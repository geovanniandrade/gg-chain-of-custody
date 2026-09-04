/* ============================================================
   GG // DIGITAL FORENSICS
   Digital Evidence & Chain of Custody

   Front-end interactions
   Author: Geovanni Andrade
   ============================================================ */

"use strict";


/* ============================================================
   01. DOM READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initScrollReveal();
    initActiveNavigation();
    initHeaderState();
    initTerminal();
    initSmoothAnchors();
    initExternalLinks();

});


/* ============================================================
   02. SCROLL REVEAL
   ============================================================ */

function initScrollReveal() {

    const elements = document.querySelectorAll(
        [
            ".section-heading",
            ".overview-content",
            ".principle-card",
            ".stat-item",
            ".workflow-item",
            ".hash-description",
            ".code-card",
            ".feature-card",
            ".document-card",
            ".standards > div",
            ".cta-content"
        ].join(",")
    );


    if (!elements.length) {
        return;
    }


    elements.forEach((element) => {

        element.classList.add("gg-reveal");

    });


    if (!("IntersectionObserver" in window)) {

        elements.forEach((element) => {
            element.classList.add("gg-visible");
        });

        return;

    }


    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "gg-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


    elements.forEach((element) => {

        observer.observe(element);

    });

}


/* ============================================================
   03. ACTIVE NAVIGATION
   ============================================================ */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            '.navigation a[href^="#"]'
        );


    if (
        !sections.length ||
        !navigationLinks.length
    ) {

        return;

    }


    const setActiveLink = () => {

        const scrollPosition =
            window.scrollY + 180;


        let currentSection =
            "";


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    };


    window.addEventListener(
        "scroll",
        setActiveLink,
        {
            passive: true
        }
    );


    setActiveLink();

}


/* ============================================================
   04. HEADER STATE
   ============================================================ */

function initHeaderState() {

    const header =
        document.querySelector(
            ".header"
        );


    if (!header) {
        return;
    }


    const updateHeader =
        () => {

            if (
                window.scrollY > 30
            ) {

                header.classList.add(
                    "header-scrolled"
                );

            } else {

                header.classList.remove(
                    "header-scrolled"
                );

            }

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* ============================================================
   05. TERMINAL
   ============================================================ */

function initTerminal() {

    const terminal =
        document.querySelector(
            ".terminal-body"
        );


    if (!terminal) {
        return;
    }


    const success =
        terminal.querySelector(
            ".terminal-success"
        );


    if (!success) {
        return;
    }


    const originalText =
        success.textContent.trim();


    success.textContent =
        "";


    let index =
        0;


    const typeText =
        () => {

            if (
                index <
                originalText.length
            ) {

                success.textContent +=
                    originalText.charAt(
                        index
                    );


                index++;


                setTimeout(
                    typeText,
                    32
                );

            }

        };


    setTimeout(
        typeText,
        650
    );

}


/* ============================================================
   06. SMOOTH ANCHORS
   ============================================================ */

function initSmoothAnchors() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const header =
                        document.querySelector(
                            ".header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        20;


                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        }
    );

}


/* ============================================================
   07. EXTERNAL LINKS
   ============================================================ */

function initExternalLinks() {

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(
        (link) => {

            const currentRel =
                link.getAttribute(
                    "rel"
                ) || "";


            const values =
                new Set(
                    currentRel
                        .split(" ")
                        .filter(Boolean)
                );


            values.add(
                "noopener"
            );

            values.add(
                "noreferrer"
            );


            link.setAttribute(
                "rel",
                Array.from(values)
                    .join(" ")
            );

        }
    );

}


/* ============================================================
   08. GG SYSTEM MESSAGE
   ============================================================ */

console.log(
    "%cGG // DIGITAL FORENSICS",
    [
        "color:#58a6ff",
        "font-size:18px",
        "font-weight:bold",
        "font-family:monospace"
    ].join(";")
);


console.log(
    "%cDigital Evidence & Chain of Custody",
    [
        "color:#9ba8b6",
        "font-size:12px",
        "font-family:monospace"
    ].join(";")
);


console.log(
    "%cPRESERVE. VERIFY. TRACE.",
    [
        "color:#3fb950",
        "font-size:11px",
        "font-family:monospace"
    ].join(";")
);
