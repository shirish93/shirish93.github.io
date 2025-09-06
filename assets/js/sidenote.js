// Wait for the entire page to load, including images, to ensure layout is stable for positioning.
window.addEventListener('load', function () {
    const footnotes = document.querySelector(".footnotes");
    // Only run the script if there are footnotes on the page.
    if (!footnotes) {
        return;
    }

    const sideNoteStartMargin = 10;
    const sideNoteMaxWidth = 280;
    const sideNoteMinWidth = 100;
    const mainContent = document.querySelector(".main-content");
    const postTitle = document.querySelector(".posttitle");

    function isSideNoteModeTrue() {
        // Sidenotes are only possible if the required elements exist.
        if (!mainContent || !postTitle) {
            return false;
        }
        const postTitleRect = postTitle.getBoundingClientRect();
        // Calculate available space to the right of the post title within the viewport.
        const availableSpace = window.innerWidth - postTitleRect.right - sideNoteStartMargin;
        return availableSpace >= sideNoteMinWidth;
    }

    function updateFootnoteLinks(isSideNoteMode) {
        document.querySelectorAll("a[href^='#fn']").forEach(function (link) {
            const footnoteId = link.hash.substring(3); // e.g., #fn1 -> 1
            if (isSideNoteMode) {
                link.setAttribute("href", "#sn" + footnoteId); // Point to sidenote
            } else {
                link.setAttribute("href", "#fn" + footnoteId); // Point to endnote
            }
        });
    }

    function createSideNote(superscript, footnoteHtml, lastSidenoteBottom) {
        const fnNum = superscript.id.replace("fnref:", "");

        // Create a temporary element to parse and clean the footnote HTML.
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = footnoteHtml;
        const reverseLink = tempDiv.querySelector("a.reversefootnote");
        if (reverseLink) {
            reverseLink.remove();
        }
        const cleanedHtml = tempDiv.innerHTML;

        const div = document.createElement("div");
        div.innerHTML = `${fnNum}. ${cleanedHtml}`;
        div.className = "sidenote";
        div.id = `sn${fnNum}`;

        const supRect = superscript.getBoundingClientRect();
        const postTitleRect = postTitle.getBoundingClientRect();

        // Set initial styles for measurement, but keep it invisible to prevent flicker.
        div.style.visibility = 'hidden';
        div.style.position = 'absolute';
        div.style.left = `${postTitleRect.right + window.scrollX + sideNoteStartMargin}px`;
        div.style.minWidth = `${sideNoteMinWidth}px`;
        div.style.maxWidth = `${sideNoteMaxWidth}px`;
        document.body.appendChild(div);

        let topPosition = supRect.top + window.scrollY;

        // Check for overlap with the previous sidenote and adjust if necessary.
        if (topPosition < lastSidenoteBottom) {
            topPosition = lastSidenoteBottom;
        }

        // Set the final, correct top position and make the element visible.
        div.style.top = `${topPosition}px`;
        div.style.visibility = 'visible';

        // Return the new bottom position for the next note to use.
        return topPosition + div.offsetHeight;
    }

    function loadSideNotesFromFootnotes() {
        const isSideNoteMode = isSideNoteModeTrue();

        document.querySelectorAll(".sidenote").forEach(el => el.remove());

        if (isSideNoteMode) {
            let lastSidenoteBottom = 0; // Tracks the bottom edge of the last placed sidenote.
            const marginBetweenNotes = 15; // A small pixel gap between notes.
            const fnItems = footnotes.querySelectorAll("ol li");
            document.querySelectorAll("sup[id^='fnref:']").forEach((supElement, index) => {
                if (fnItems[index]) {
                    const footnoteHtml = fnItems[index].innerHTML;
                    // createSideNote now returns the bottom position of the note it just created.
                    lastSidenoteBottom = createSideNote(supElement, footnoteHtml, lastSidenoteBottom) + marginBetweenNotes;
                }
            });
            footnotes.style.display = 'none';
        } else {
            footnotes.style.display = ''; // Revert to default display (e.g., 'block').
        }
        updateFootnoteLinks(isSideNoteMode);
    }

    function handleHashChange() {
        // Smooth scroll to the target if it's a sidenote.
        if (location.hash.startsWith('#sn')) {
            try {
                const target = document.querySelector(location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } catch (e) {
                console.error('Error scrolling to hash:', e);
            }
        }
    }

    // Run on initial load.
    loadSideNotesFromFootnotes();

    // Add event listeners for resize and hash changes.
    window.addEventListener("resize", loadSideNotesFromFootnotes);
    window.addEventListener("hashchange", handleHashChange);
});
