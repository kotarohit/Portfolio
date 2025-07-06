// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        // Remove existing icon (could be <i> or <svg>)
        const existingIcon = themeToggle.querySelector('i, svg');
        if (existingIcon) {
            existingIcon.remove();
        }
        
        // Create new <i> element with appropriate data-lucide attribute
        const newIcon = document.createElement('i');
        if (this.theme === 'dark') {
            newIcon.setAttribute('data-lucide', 'sun');
        } else {
            newIcon.setAttribute('data-lucide', 'moon');
        }
        
        // Append the new icon to the toggle button
        themeToggle.appendChild(newIcon);
        
        // Re-initialize Lucide icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    setupToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Skills Carousel - Enhanced with proper animation
class SkillsCarousel {
    constructor() {
        this.skills = [
            'Meta',
            'PySpark',
            'Airflow',
            'Azure',
            'Databricks',
            'Kafka',
            'LangChain',
            'Snowflake',
            'Python',
            'SQL',
            'Docker',
            'DBT',
            'OpenAI',
            'CrewAI'
        ];
        this.currentIndex = 0;
        this.element = document.getElementById('currentSkill');
        this.isAnimating = false;
        this.init();
    }

    init() {
        if (this.element) {
            // Set initial skill
            this.element.textContent = this.skills[this.currentIndex];
            this.startRotation();
        }
    }

    startRotation() {
        setInterval(() => {
            if (!this.isAnimating) {
                this.nextSkill();
            }
        }, 2500); // Changed to 2.5 seconds for better readability
    }

    nextSkill() {
        if (!this.element || this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Fade out current skill
        this.element.style.opacity = '0';
        this.element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Update to next skill
            this.currentIndex = (this.currentIndex + 1) % this.skills.length;
            this.element.textContent = this.skills[this.currentIndex];
            
            // Fade in new skill
            this.element.style.opacity = '1';
            this.element.style.transform = 'translateY(0)';
            
            this.isAnimating = false;
        }, 300); // Slightly longer transition for smoother effect
    }
}

// Smooth Scrolling for Navigation
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, options);

        // Observe all cards and sections
        const elementsToObserve = document.querySelectorAll(
            '.experience-card, .project-card, .skill-category, .blog-card, .contact-card, .metric'
        );

        elementsToObserve.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.style.background = this.getNavbarBackground(0.95);
            } else {
                this.navbar.style.background = this.getNavbarBackground(0.8);
            }
        });
    }

    getNavbarBackground(opacity) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            return `rgba(15, 23, 42, ${opacity})`;
        } else {
            return `rgba(255, 255, 255, ${opacity})`;
        }
    }
}

// Card Hover Effects
class CardEffects {
    constructor() {
        this.init();
    }

    init() {
        // Add hover effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effects to blog cards
        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                // Add a subtle click animation
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 150);
            });
        });

        // Add hover effects to metrics
        document.querySelectorAll('.metric').forEach(metric => {
            metric.addEventListener('mouseenter', () => {
                metric.style.transform = 'translateY(-4px) scale(1.05)';
            });

            metric.addEventListener('mouseleave', () => {
                metric.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Parallax Effect for Hero Section
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3; // Reduced for subtler effect
            
            if (this.hero) {
                this.hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Loading Animation
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // Add staggered animation to elements
        const elements = document.querySelectorAll('.metric, .experience-card, .project-card');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Contact Form Interactions
class ContactInteractions {
    constructor() {
        this.init();
    }

    init() {
        // Add click-to-copy functionality for email and phone
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (index === 0) {
                    this.copyToClipboard('kotarohit14@gmail.com');
                    this.showToast('Email copied to clipboard!');
                } else if (index === 1) {
                    this.copyToClipboard('+1 (857) 335-3738');
                    this.showToast('Phone number copied to clipboard!');
                }
            });
        });
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    showToast(message) {
        // Create a simple toast notification
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--accent-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Initialize all components
    new ThemeManager();
    new SkillsCarousel();
    new SmoothScroll();
    new AnimationObserver();
    new NavbarScroll();
    new CardEffects();
    new ParallaxEffect();
    new ContactInteractions();

    // Add loading animation after a short delay
    setTimeout(() => {
        new LoadingAnimation();
    }, 500);

    // Add custom cursor effect for interactive elements
    const interactiveElements = document.querySelectorAll(
        'button, a, .project-card, .blog-card, .contact-card, .metric'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });

        el.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Any additional scroll-based animations can go here
}, 16)); // ~60fps