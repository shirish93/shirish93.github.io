// This file assumes `idx` (the lunr index) and `documents` (the data store) are loaded globally.

function lunr_search(query) {
    const resultdiv = document.getElementById('lunrsearchresults');
    
    // Ensure the index and documents are loaded
    if (!idx || !documents) {
        if (resultdiv) {
            resultdiv.innerHTML = '<ul><li>Search is not ready, please try again in a moment.</li></ul>';
        }
        return false; // prevent form submission
    }

    // Perform the search
    const results = idx.search(query);
    
    // Clear previous results
    if (resultdiv) {
        resultdiv.innerHTML = '';
        const ul = document.createElement('ul');
        resultdiv.appendChild(ul);

        // Display the results
        if (results.length === 0) {
            ul.innerHTML = '<li>No results found.</li>';
        } else {
            for (const item of results) {
                const doc = documents[item.ref]; // Find the document by its ID (ref)
                if (doc) {
                    ul.innerHTML += `<li class="lunrsearchresult"><a href="${doc.url}"><span class="title">${doc.title}</span></a></li>`;
                }
            }
        }
    }

    return false; // Prevent form submission
}