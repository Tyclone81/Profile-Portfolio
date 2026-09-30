document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".app-header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    console.log("🏗️  Portfolio Client Runtime Context Active.");

    // 1. DYNAMIC STICKY BLUR MATRIX
    // Adds a visual frosted-glass backdrop border the moment the user scrolls
    const handleHeaderScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    // 2. SCROLLSPY MECHANISM (Dynamic Active Link Highlighting)
    // Tracks scroll coordinates to highlight navigation tabs in real-time
    const handleScrollspy = () => {
        const scrollPosition = window.scrollY + 120; // Matches scroll padding top boundary offset

        sections.forEach((currentSection) => {
            const sectionHeight = currentSection.offsetHeight;
            const sectionTop = currentSection.offsetTop;
            const sectionId = currentSection.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    // Wire up listeners directly to the window scroll thread
    window.addEventListener("scroll", () => {
        handleHeaderScroll();
        handleScrollspy();
    });

    // Run baseline diagnostics check loop upfront on immediate page boot
    handleHeaderScroll();
    handleScrollspy();
});
