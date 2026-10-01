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

    // 3. INTERACTIVE RESUME VIEWER MODAL
    const resumeModal = document.getElementById("resume-modal");
    const openResumeBtn = document.getElementById("open-resume-btn");
    const closeResumeBtn = document.getElementById("modal-close-btn");
    const printResumeBtn = document.getElementById("modal-print-btn");
    const resumeIframe = document.getElementById("resume-iframe");

    const openModal = (e) => {
        if (e) e.preventDefault();
        if (resumeModal) {
            resumeModal.classList.add("open");
            resumeModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        if (resumeModal) {
            resumeModal.classList.remove("open");
            resumeModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }
    };

    if (openResumeBtn) {
        openResumeBtn.addEventListener("click", openModal);
    }

    if (closeResumeBtn) {
        closeResumeBtn.addEventListener("click", closeModal);
    }

    if (resumeModal) {
        resumeModal.addEventListener("click", (e) => {
            if (e.target === resumeModal) {
                closeModal();
            }
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && resumeModal && resumeModal.classList.contains("open")) {
            closeModal();
        }
    });

    if (printResumeBtn && resumeIframe) {
        printResumeBtn.addEventListener("click", () => {
            try {
                if (resumeIframe.contentWindow) {
                    resumeIframe.contentWindow.focus();
                    resumeIframe.contentWindow.print();
                    return;
                }
            } catch (err) {
                console.warn("Direct iframe print failed, falling back to window:", err);
            }
            const printWindow = window.open(resumeIframe.src, "_blank");
            if (printWindow) {
                printWindow.addEventListener("load", () => {
                    printWindow.focus();
                    printWindow.print();
                });
            }
        });
    }

    // 4. INTERACTIVE ARTICLE VIEWER MODAL
    const articleModal = document.getElementById("article-modal");
    const articleCloseBtn = document.getElementById("article-close-btn");
    const articleCopyBtn = document.getElementById("article-copy-btn");
    const copyBtnText = document.getElementById("copy-btn-text");
    const articleModalBody = document.getElementById("article-modal-body");
    const articleExternalLink = document.getElementById("article-external-link");
    const viewArticleBtns = document.querySelectorAll(".view-article-btn");

    let cachedArticle = null;
    const articleApiUrl = "https://dev.to/api/articles/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal";

    const renderArticle = (data) => {
        if (!articleModalBody) return;
        const tagsHtml = (data.tag_list || []).map(tag => `<span class="tech-tag">#${tag}</span>`).join("");
        articleModalBody.innerHTML = `
            <div class="article-meta-header">
                <h1>${data.title}</h1>
                <div style="color: var(--text-muted); font-size: 0.9rem;">
                    <span>By ${data.user?.name || "Victor Ogero"}</span> &bull; 
                    <span>${data.reading_time_minutes || 3} min read</span> &bull; 
                    <span>${data.readable_publish_date || "Sep 9"}</span>
                </div>
                ${tagsHtml ? `<div class="article-meta-tags">${tagsHtml}</div>` : ""}
            </div>
            <div class="article-content">
                ${data.body_html}
            </div>
        `;
    };

    const fetchArticleContent = async () => {
        if (cachedArticle) {
            renderArticle(cachedArticle);
            return;
        }
        try {
            const res = await fetch(articleApiUrl);
            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();
            cachedArticle = data;
            renderArticle(data);
        } catch (err) {
            console.error("Failed to load article from dev.to:", err);
            if (articleModalBody) {
                const targetUrl = articleExternalLink ? articleExternalLink.href : "https://dev.to/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal";
                articleModalBody.innerHTML = `
                    <div class="article-loading-state">
                        <h3 style="color: var(--text-pure); margin-bottom: 0.5rem;">Could not load reader view</h3>
                        <p style="color: var(--text-muted); max-width: 450px; margin-bottom: 1.5rem;">The article is available directly on dev.to.</p>
                        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="glow-cta-btn" style="padding: 0.75rem 1.8rem; font-size: 0.9rem;">Read on dev.to &rarr;</a>
                    </div>
                `;
            }
        }
    };

    // Pre-fetch article data in background so it opens instantly
    setTimeout(async () => {
        try {
            const res = await fetch(articleApiUrl);
            if (res.ok) cachedArticle = await res.json();
        } catch (e) {
            // Silently ignore background prefetch errors
        }
    }, 1200);

    const openArticleModal = (e) => {
        if (e) e.preventDefault();
        if (articleModal) {
            articleModal.classList.add("open");
            articleModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            fetchArticleContent();
        }
    };

    const closeArticleModal = () => {
        if (articleModal) {
            articleModal.classList.remove("open");
            articleModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }
    };

    viewArticleBtns.forEach(btn => {
        btn.addEventListener("click", openArticleModal);
    });

    if (articleCloseBtn) {
        articleCloseBtn.addEventListener("click", closeArticleModal);
    }

    if (articleModal) {
        articleModal.addEventListener("click", (e) => {
            if (e.target === articleModal) {
                closeArticleModal();
            }
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && articleModal && articleModal.classList.contains("open")) {
            closeArticleModal();
        }
    });

    if (articleCopyBtn) {
        articleCopyBtn.addEventListener("click", () => {
            const url = articleExternalLink ? articleExternalLink.href : "https://dev.to/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal";
            navigator.clipboard.writeText(url).then(() => {
                if (copyBtnText) copyBtnText.textContent = "Copied!";
                setTimeout(() => {
                    if (copyBtnText) copyBtnText.textContent = "Copy Link";
                }, 2000);
            }).catch(err => {
                console.error("Clipboard copy failed:", err);
            });
        });
    }
});
