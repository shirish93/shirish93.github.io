(function ($) {
    $(document).ready(function () {
        const $footnotes = $(".footnotes"),
            sideNoteStartMargin = 12,
            sideNoteMaxWidth = 280,
            sideNoteMinWidth = 140;

        $(window).on("load", function () {
            if ($footnotes.length < 1) {
                console.log("No footnotes found.");
                return;
            }

            loadSideNotesFromFootnotes();

            $(window).resize(function () {
                loadSideNotesFromFootnotes();
            });
        });

        function loadSideNotesFromFootnotes() {
            const $postTitle = $(".posttitle"),
                browserWidth = $(".main-content").width(),
                startPosition = $postTitle.offset()?.left + $postTitle.outerWidth() + sideNoteStartMargin;

            if (!$postTitle.length) {
                console.log("No post title found.");
                return;
            }

            const availableSpaceForSideNote = browserWidth - startPosition;
            if (availableSpaceForSideNote +110 < sideNoteMinWidth) {
                console.log("Not enough space for sidenotes.");
                return;
            }
            console.log("def enough space for sidenotes, but like, who even knows?");
            const $fnItems = $footnotes.find("ol li");
            $("sup").each(function (index) {
                const $footnoteHtml = $fnItems.eq(index).html();
                createSideNote($(this), $footnoteHtml, startPosition);
            });

            $footnotes.hide();
        }

        function createSideNote(superscript, footnoteHtml, startPosition) {
            let div = $("<div>")
                .html(footnoteHtml)
                .addClass("sidenote");

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
