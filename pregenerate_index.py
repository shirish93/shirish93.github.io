# /// script
# requires-python = ">=3.13.6"
# dependencies = [
#   "python-frontmatter>=1.1.0",
#   "lunr>=0.8.0",
# ]
# ///

import json
import os
import re
import hashlib
import frontmatter
from lunr import lunr

def clean_and_truncate_content(text, max_words=35):
    """Replicates Jekyll's strip_html | strip_newlines | truncatewords"""
    if not text:
        return ""
    # Strip Liquid tags
    text = re.sub(r'\{%.*?%\}', '', text)
    # Strip basic Markdown image/link artifacts
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)
    text = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', text)
    # Strip HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Strip newlines and normalize spaces
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Truncate words
    words = text.split()
    if len(words) > max_words:
        text = ' '.join(words[:max_words])
    return text

def parse_jekyll_content():
    """Parses local markdown files to replicate the Liquid documents.json"""
    # Directories mapped to your liquid collections
    directories = ['_posts', '_ideas', '_fermentland', '_aboutme', '_failedprojects', '.']
    skip_urls = ['.xml', '.txt', 'assets', 'category', 'tag']
    exact_skips = ['/ideas', '/fermentland', '/failed-projects']
    
    docs = []

    for directory in directories:
        if not os.path.isdir(directory):
            continue
            
        for root, _, files in os.walk(directory):
            # Do not traverse deeply into the root directory (to avoid _site, etc.)
            if directory == '.' and root != '.':
                continue
                
            for file in files:
                if not file.endswith(('.md', '.markdown', '.html')):
                    continue
                    
                filepath = os.path.join(root, file)
                try:
                    post = frontmatter.load(filepath)
                except Exception:
                    continue
                
                basename = os.path.splitext(file)[0]
                
                # 1. Derive URL (favor explicitly defined permalinks in frontmatter)
                url = post.get('permalink')
                if not url:
                    if directory == '_posts':
                        # Parse Jekyll standard YYYY-MM-DD-title format
                        match = re.match(r'^(\d{4})-(\d{2})-(\d{2})-(.+)$', basename)
                        if match:
                            url = f"/{match.group(1)}/{match.group(2)}/{match.group(3)}/{match.group(4)}.html"
                        else:
                            url = f"/posts/{basename}.html"
                    elif directory == '.':
                        url = "/" if basename == 'index' else f"/{basename}.html"
                    else:
                        # e.g., _ideas -> /ideas/filename.html
                        clean_dir = directory.replace('_', '')
                        url = f"/{clean_dir}/{basename}.html"
                
                # 2. Filter logic (matching your Liquid template 'continue' statements)
                if any(s in url for s in skip_urls) or url in exact_skips:
                    continue
                
                # 3. Extract content
                title = post.get('title', basename)
                body = clean_and_truncate_content(post.content, max_words=35)
                
                # 4. Generate Stable ID via URL Hashing
                # This ensures the ID only changes if the URL changes, preventing massive git diffs
                stable_id = hashlib.md5(url.encode('utf-8')).hexdigest()[:10]
                
                docs.append({
                    "id": stable_id,
                    "url": url,
                    "title": title,
                    "body": body
                })
                
    return docs

def compact_inv_index(index):
    fields = index["fields"]
    field_vector_idxs = {v[0]: idx for idx, v in enumerate(index["fieldVectors"])}
    items = {}
    for item in index["invertedIndex"]:
        token = item[0]
        props = item[1]
        new_item = [token]
        for field in fields:
            f_props = props.get(field, {})
            matches = []
            for doc_ref, value in f_props.items():
                key = f'{field}/{doc_ref}'
                if key not in field_vector_idxs:
                    raise ValueError(f"Missing key: {key}")
                matches.append(field_vector_idxs[key])
                matches.append(value)
            new_item.append(matches)
        items[props["_index"]] = new_item
    
    indexes = sorted(items.keys())
    return [items[k] for k in indexes if k in items]

def compact_vectors(index):
    def compact_fn(item):
        doc_id = item[0]
        vectors = item[1]
        prev = None
        compacted = []
        for ii, v in enumerate(vectors):
            if ii % 2 == 0:
                if prev is not None and v == prev + 1:
                    prev += 1
                    continue
                prev = v
            compacted.append(v)
        return [doc_id, compacted]
    return [compact_fn(item) for item in index["fieldVectors"]]

def main():
    # Parse local markdown files instead of making a network request
    page_json = parse_jekyll_content()
    
    os.makedirs('assets/js/blurbs', exist_ok=True)
    
    # Write blurb files using the new stable ID
    for doc in page_json:
        doc_id = doc["id"]
        with open(f'assets/js/blurbs/{doc_id}.json', 'w') as fd:
            json.dump(doc, fd)
          
    # Generate Lunr index
    idx = lunr(ref='id', fields=[dict(field_name='title', boost=10), 'body', 'url'], documents=page_json)
    serialized_idx = idx.serialize()
    
    # Compact the index
    serialized_idx['invertedIndex'] = compact_inv_index(serialized_idx)
    serialized_idx['fieldVectors'] = compact_vectors(serialized_idx)
    
    # Write final index disk once
    with open('assets/js/idx.json', 'w') as fd:
        json.dump(serialized_idx, fd)

if __name__ == "__main__":
    main()