// MetaObjects Developer Site JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeCodeTabs();
    initializeCopyButtons();
    initializeSyntaxHighlighting();
    initializeScrollAnimations();
    initializeAccessibility();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    let lastScrollY = window.scrollY;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }

        // Hide/show navbar on scroll (mobile)
        if (window.innerWidth <= 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', throttle(updateNavbar, 16));

    // Mobile menu toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            mobileToggle.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (mobileToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Code tabs functionality
function initializeCodeTabs() {
    const codeTabs = document.querySelectorAll('.code-tab');
    const codePanels = document.querySelectorAll('.code-panel');

    codeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all tabs and panels
            codeTabs.forEach(t => t.classList.remove('active'));
            codePanels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Copy button functionality
function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const textToCopy = this.dataset.copy || this.previousElementSibling?.textContent;

            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);
                showCopyFeedback(this);
            } catch (err) {
                // Fallback for older browsers
                fallbackCopyToClipboard(textToCopy);
                showCopyFeedback(this);
            }
        });
    });

    // Add copy buttons to code blocks
    document.querySelectorAll('.code-block pre').forEach(pre => {
        const button = createCopyButton();
        pre.style.position = 'relative';
        pre.appendChild(button);

        button.addEventListener('click', async function() {
            const code = pre.querySelector('code');
            const textToCopy = code ? code.textContent : pre.textContent;

            try {
                await navigator.clipboard.writeText(textToCopy);
                showCopyFeedback(this);
            } catch (err) {
                fallbackCopyToClipboard(textToCopy);
                showCopyFeedback(this);
            }
        });
    });
}

function createCopyButton() {
    const button = document.createElement('button');
    button.className = 'copy-btn code-copy-btn';
    button.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 4px;
        color: white;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    button.innerHTML = `
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
    `;

    // Show button on hover
    button.parentElement?.addEventListener('mouseenter', () => {
        button.style.opacity = '1';
    });

    button.parentElement?.addEventListener('mouseleave', () => {
        button.style.opacity = '0';
    });

    return button;
}

function showCopyFeedback(button) {
    const originalHTML = button.innerHTML;
    const originalText = button.textContent;

    button.innerHTML = `
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        ${originalText ? 'Copied!' : ''}
    `;

    button.style.background = 'rgba(16, 185, 129, 0.2)';
    button.style.borderColor = 'rgba(16, 185, 129, 0.4)';

    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
        button.style.borderColor = '';
    }, 2000);
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Syntax highlighting initialization
function initializeSyntaxHighlighting() {
    if (typeof hljs !== 'undefined') {
        // Configure highlight.js
        hljs.configure({
            languages: ['javascript', 'typescript', 'java', 'json', 'xml', 'bash', 'yaml'],
            ignoreUnescapedHTML: true
        });

        // Highlight all code blocks
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .feature-card,
        .community-card,
        .step,
        .architecture-text,
        .architecture-diagram
    `);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Accessibility enhancements
function initializeAccessibility() {
    // Add keyboard navigation for tabs
    const codeTabs = document.querySelectorAll('.code-tab');

    codeTabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('tabindex', index === 0 ? '0' : '-1');

        tab.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const currentIndex = Array.from(codeTabs).indexOf(this);
                let nextIndex;

                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % codeTabs.length;
                } else {
                    nextIndex = currentIndex === 0 ? codeTabs.length - 1 : currentIndex - 1;
                }

                codeTabs[nextIndex].focus();
                codeTabs[nextIndex].click();
            }
        });
    });

    // Add ARIA labels to buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.setAttribute('aria-label', 'Copy code to clipboard');
    });

    // Announce dynamic content changes
    const announcer = createLiveRegion();

    // Announce when code is copied
    document.addEventListener('click', function(e) {
        if (e.target.closest('.copy-btn')) {
            setTimeout(() => {
                announcer.textContent = 'Code copied to clipboard';
                setTimeout(() => {
                    announcer.textContent = '';
                }, 1000);
            }, 100);
        }
    });
}

function createLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.cssText = `
        position: absolute !important;
        left: -10000px !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
    `;
    document.body.appendChild(liveRegion);
    return liveRegion;
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance monitoring (optional)
function initializePerformanceMonitoring() {
    if ('performance' in window && 'PerformanceObserver' in window) {
        try {
            // Monitor Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Monitor First Input Delay
            const fidObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Monitor Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((entryList) => {
                let clsValue = 0;
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                console.log('CLS:', clsValue);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.log('Performance monitoring not available');
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send to analytics service in production
});

// Service worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        throttle,
        debounce,
        showCopyFeedback,
        fallbackCopyToClipboard
    };
}