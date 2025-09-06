// Vanilla JS for theme-specific interactions

// Handles the navigation bar hiding/showing on scroll
(function() {
    const navbar = document.querySelector('.mediumnavigation');
    if (!navbar) return;

    var lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = navbar.offsetHeight;
    let didScroll;

    window.addEventListener('scroll', function() {
        didScroll = true;
    });

    // Throttle scroll event checking
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If they scrolled down and are past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            navbar.classList.remove('nav-down');
            navbar.classList.add('nav-up');
            navbar.style.top = -navbarHeight + 'px';
        } else {
            // Scroll Up
            // If did not scroll past the document height
            if (st + window.innerHeight < document.documentElement.scrollHeight) {
                navbar.classList.remove('nav-up');
                navbar.classList.add('nav-down');
                navbar.style.top = '0px';
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
})();

// All other interactions
document.addEventListener('DOMContentLoaded', function() {

    // Highlight current nav link
    const currentUrl = window.location.href.replace(/\/$/, '').replace(/www\./, ''); // Normalize

    let bestMatch = null;
    let longestMatch = 0;

    document.querySelectorAll(".nav-link").forEach(function(link) {
        const linkHref = link.href.replace(/\/$/, ''); // Normalize

        if (currentUrl.startsWith(linkHref)) {
            // The root link should only match if it's an exact match for the homepage,
            // not as a prefix for all other pages.
            const isRootLink = link.pathname === '/' || link.pathname.endsWith('/index.html');
            if (isRootLink && linkHref !== currentUrl) {
                return; // Skip if it's the root link but not an exact match
            }

            if (linkHref.length > longestMatch) {
                longestMatch = linkHref.length;
                bestMatch = link;
            }
        }
    });

    if (bestMatch) {
        bestMatch.classList.add("current");
    } else {
        // If no other section matched, assume it's a blog post and highlight "Blog".
        const blogLink = document.querySelector('a.nav-link[href$="/index.html"]');
        if (blogLink) {
            blogLink.classList.add("current");
        }
    }

    // Alertbar visibility on scroll
    const alertbar = document.querySelector('.navbar');
    if (alertbar) {
        // For a fade effect, you'll need CSS transitions. E.g.:
        // .alertbar { opacity: 0; visibility: hidden; transition: opacity .3s, visibility .3s; }
        // .alertbar.is-visible { opacity: 1; visibility: visible; }
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 280) {
                alertbar.classList.add('is-visible');
            } else {
                alertbar.classList.remove('is-visible');
            }
        });
    }

    // Smooth scroll for on-page anchors
    function smoothScrollTo(target) {
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(link => {
        link.addEventListener('click', function(e) {
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname
            ) {
                let target = null;
                try {
                    target = document.querySelector(this.hash);
                } catch (error) {
                    console.error("Invalid selector for hash:", this.hash);
                }
                
                if (!target) {
                    target = document.querySelector(`[name="${this.hash.slice(1)}"]`);
                }
                
                if (target) {
                    e.preventDefault();
                    smoothScrollTo(target);
               }
            }
        });
    });

    // Smooth scroll on page load if hash exists
    setTimeout(function() {
        if (location.hash) {
            window.scrollTo(0, 0); // First, scroll to top
            let target = null;
            try {
                target = document.querySelector(location.hash);
            } catch (error) {
                console.error("Invalid selector for hash:", location.hash);
            }
            if (!target) {
                target = document.querySelector(`[name="${location.hash.slice(1)}"]`);
            }
            if (target) {
                smoothScrollTo(target);
            }
        }
    }, 1);

    // Adjust site-content margin-top to account for fixed header
    const navHeader = document.querySelector('nav.mediumnavigation');
    const siteContent = document.querySelector('.site-content');
    if (navHeader && siteContent) {
        siteContent.style.marginTop = navHeader.offsetHeight + 'px';
    }
    // Spoilers
    document.addEventListener('click', function(event) {
        if (event.target.matches('.spoiler')) {
            event.target.classList.remove('spoiler');
        }
    });
});


// Defers loading of fonts and icons
(function() {
    var loadDeferredStyles = function() {
      var addStylesNode = document.getElementById("deferred-styles");
      if (!addStylesNode) return;
      var replacement = document.createElement("div");
      replacement.innerHTML = addStylesNode.textContent;
      document.body.appendChild(replacement);
      if (addStylesNode.parentElement) {
        addStylesNode.parentElement.removeChild(addStylesNode);
      }
    };
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
    else window.addEventListener('load', loadDeferredStyles);
})();