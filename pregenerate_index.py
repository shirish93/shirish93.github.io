
import markdownify, frontmatter, re, html, json, os
from lunr import lunr
import requests
baseUrl="https://www.shirish.me/assets/js/documents.json"

page = requests.get(baseUrl)
page_json = page.json()
for i, doc in enumerate(page_json):
   id = doc.get("id")
   url = doc.get("url")
   title = doc.get('title')
   body = doc.get('body')[:150]
   #print ({"id": id, "url": url, "title": title,"body": body})
   
   with open(f'assets/js/blurbs/{id}.json', 'w') as fd:
      json.dump({"id": id, "url": url, "title": title,"body": body},fd)
      
idx = lunr(ref='id', fields=[dict(field_name='title', boost=10), 'body', 'url'], documents=page_json)
serialized_idx = idx.serialize()
with open('assets/js/idx.json', 'w') as fd:
   json.dump(serialized_idx,fd)
def compact_inv_index(index):
    fields = index["fields"]
    field_vector_idxs = {v[0]: idx for idx, v in enumerate(index["fieldVectors"])}
    items = {}
    for item in index["invertedIndex"]:
      token = item[0]
      props = item[1]
      new_item = [token]
      for field in fields:
           f_props = props[field]
           matches = []
           for doc_ref in f_props.keys():
               key = f'{field}/{doc_ref}'
               if key not in field_vector_idxs:
                   raise ValueError()
               matches.append(field_vector_idxs[key])
               matches.append(f_props[doc_ref])
           new_item.append(matches)
      items[props["_index"]] = new_item
    indexes = sorted(items.keys())
    compacted = [items[k] for k in indexes if k in items]
    if len(compacted) == 0:
       raise ValueError()
    return compacted

def index_to_json(idx):
   output = idx.to_json()
   output['invertedIndex'] = compact_inv_index(output)
   output['fieldVectors']  = compact_vectors(output)
   return output

def compact_vectors(index):
   def compact_fn(item):
    id = item[0]
    vectors = item[1]
    prev = None
    compacted = []
    for ii, v in enumerate(vectors):
        if ii % 2 == 0:
            if prev is not None and v == prev + 1:
                prev +=1
                continue
            prev = v
        compacted.append(v)
    return [id, compacted]
   return [compact_fn(item) for item in index["fieldVectors"]]
fieldVectors = compact_vectors(serialized_idx)
print (len(json.dumps(serialized_idx)))
serialized_idx['invertedIndex'] = json.loads(json.dumps(compact_inv_index(serialized_idx)))
serialized_idx['fieldVectors'] = fieldVectors
print (len(json.dumps(serialized_idx)))

with open('assets/js/idx.json', 'w') as fd:
   json.dump(serialized_idx,fd)
# TODO: Write down the index to file here!
'''
   
$.getJSON( "assets/blah/index.json", function( compacted ) {
   serializedIndex = expand(compacted);
   let idx = lunr.Index.load(serializedIndex)
})
function expand(compact) {
   const fields = compact["fields"];
   const fieldVectors = compact["fieldVectors"].map((item) => {
       const id = item[0];
       const vectors = item[1];
       let prev = null;
       const expanded = vectors.map((v, ii) => {
           if (ii % 2 === 0) {
               if (v === null) {
                   v = prev + 1;
               }
               prev = v;
           }
           return v;
       });
       return [id, expanded];
   });
   const invertedIndex = compact["invertedIndex"].map((item, itemIdx) => {
       const token = item[0];
       const fieldMap = {"_index": itemIdx};
       fields.forEach((field, fieldIdx) => {
           const matches = {};
           let docRef = null;
           item[fieldIdx + 1].forEach((v, ii) => {
               if (ii % 2 === 0) {
                   docRef = fieldVectors[v][0].slice(`${field}/`.length);
               } else {
                   matches[docRef] = v;
               }
           });
           fieldMap[field] = matches;
       })
       return [token, fieldMap];
   });
   invertedIndex.sort((a, b) => {
       if (a[0] < b[0]) {
           return -1;
       }
       if (a[0] > b[0]) {
           return 1;
       }
       return 0;
   });
   return {
       "version": compact["version"],
       "fields": fields,
       "fieldVectors": fieldVectors,
       "invertedIndex": invertedIndex,
       "pipeline": compact["pipeline"],
   };
}
'''