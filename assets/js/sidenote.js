(function ($) {
    $(document).ready(function () {
        const $footnotes = $(".footnotes"),
        sideNoteStartMargin = 10,
        sideNoteMaxWidth = 280,
        sideNoteMinWidth = 100,
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


        function updateFootnoteLinks(isSideNoteMode) {
            //const isSideNoteMode = $(window).width() > 768; // Example breakpoint

            $("a[href^='#fn']").each(function () {
                const footnoteId = this.hash.replace("#fn", ""); // Extract ID number
                if (isSideNoteMode) {
                    $(this).attr("href", "#sn" + footnoteId); // Point to sidenote
                } else {
                    $(this).attr("href", "#fn" + footnoteId); // Point to endnote
                }
            });
        }
        function isSideNoteModeTrue() {
            const browserWidth = $mainContent.width();
            const startPosition = $postTitle.offset()?.left + $postTitle.outerWidth() + sideNoteStartMargin;
        
            if (!$postTitle.length) {
                console.log("No post title found.");
                return false;
            }
            const availableSpaceForSideNote = browserWidth - startPosition;
            return availableSpaceForSideNote >= sideNoteMinWidth;
        }

        function loadSideNotesFromFootnotes() {
            let isSideNoteMode = isSideNoteModeTrue();
            if (isSideNoteMode) {
                console.log("Sidenote mode enabled.");
                startPosition = $postTitle.offset()?.left + $postTitle.outerWidth() + sideNoteStartMargin;
                $(".sidenote").remove(); // Clear existing sidenotes
                const $fnItems = $footnotes.find("ol li");
                $("sup").each(function (index) {
                    const $footnoteHtml = $fnItems.eq(index).html();
                    createSideNote($(this), $footnoteHtml, startPosition);
                });
                $footnotes.hide(); // Hide endnotes
                updateFootnoteLinks(isSideNoteMode); // Update links to point to sidenotes
            } else {
                console.log("Endnote mode enabled.");
                $(".sidenote").remove(); // Remove sidenotes
                $footnotes.show(); // Show endnotes
                updateFootnoteLinks(isSideNoteMode); // Update links to point to endnotes
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
            console.log(footnoteHtml)
            let fnNum = superscript.attr("id").replace("fnref:", "");
            
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = footnoteHtml;
            tempDiv.querySelector("p a.reversefootnote")?.remove();
            footnoteHtml = tempDiv.innerHTML;
            
            let div = $("<div>")
                .html(fnNum + "." +footnoteHtml)
                .addClass("sidenote")
                .attr("id", superscript.attr("id").replace("fnref", "sn")); 

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
