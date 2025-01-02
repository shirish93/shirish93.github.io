(function ($) {
    $(document).ready(function () {
        const $footnotes = $(".footnotes"),
        sideNoteStartMargin = 12,
        sideNoteMaxWidth = 280,
        sideNoteMinWidth = 135,
        $mainContent = $(".main-content"),
        $postTitle = $(".posttitle");

        $(window).on("load", function () {
            if ($footnotes.length < 1) {
                console.log("No footnotes found.");
                return;
            }

            loadSideNotesFromFootnotes();

            $(window).resize(function () {
                loadSideNotesFromFootnotes();
            });

            window.addEventListener("hashchange", handleHashChange);
        });

        function isSideNoteMode() {
            const browserWidth = $mainContent.width();;
            const startPosition = $postTitle.offset()?.left + $postTitle.outerWidth() + sideNoteStartMargin;
        
            if (!$postTitle.length) {
                console.log("No post title found.");
                return false;
            }
            const availableSpaceForSideNote = browserWidth - startPosition;
            return availableSpaceForSideNote >= sideNoteMinWidth;
        }
        
        function updateFootnoteLinks() {
            //const isSideNoteMode = $(window).width() > 768; // Example breakpoint

            $("a[href^='#fn']").each(function () {
                const footnoteId = this.hash.replace("#fn", ""); // Extract ID number
                if (isSideNoteMode()) {
                    $(this).attr("href", "#sn" + footnoteId); // Point to sidenote
                } else {
                    $(this).attr("href", "#fn" + footnoteId); // Point to endnote
                }
            });
        }

        function loadSideNotesFromFootnotes() {
            if (isSideNoteMode()) {
                console.log("Sidenote mode enabled.");
                startPosition = $postTitle.offset()?.left + $postTitle.outerWidth() + sideNoteStartMargin;
                $(".sidenote").remove(); // Clear existing sidenotes
                const $fnItems = $footnotes.find("ol li");
                $("sup").each(function (index) {
                    const $footnoteHtml = $fnItems.eq(index).html();
                    createSideNote($(this), $footnoteHtml, startPosition);
                });
                $footnotes.hide(); // Hide endnotes
                updateFootnoteLinks(); // Update links to point to sidenotes
            } else {
                console.log("Endnote mode enabled.");
                $(".sidenote").remove(); // Remove sidenotes
                $footnotes.show(); // Show endnotes
                updateFootnoteLinks(); // Update links to point to endnotes
            }
        }

        function handleHashChange() {
            const hash = location.hash;
            if (!hash) return;

            const target = $(hash);
            if (target.length && (target.css("visibility") === "hidden" || target.css("display") === "none")) {
                target.css({
                    visibility: "visible",
                    display: "block",
                    position: "static",
                    left: "auto"
                });
            
                $("html, body").animate({ scrollTop: target.offset().top }, 500);
            }
        }

        function createSideNote(superscript, footnoteHtml, startPosition) {
            let div = $("<div>")
                .html(footnoteHtml)
                .addClass("sidenote")
                .attr("id", `sn${superscript.attr("id").replace("ref", "")}`); 

            const topPosition = superscript.offset();

            div.css({
                position: "absolute",
                left: startPosition,
                top: topPosition?.top,
                minWidth: sideNoteMinWidth,
                maxWidth: sideNoteMaxWidth,
            });

            $(document.body).append(div);
        }
    });
})(jQuery);
