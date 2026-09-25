document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section - Flying effect
    const tlHero = gsap.timeline();
    tlHero.from(".badge", { y: -50, opacity: 0, duration: 0.8, ease: "back.out(1.7)" })
          .from(".hero-content h1", { x: -100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
          .from(".hero-content p", { x: -50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-actions", { y: 50, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
          .from(".trust-badges", { opacity: 0, duration: 1 }, "-=0.4")
          .from(".hero-image .main-img", { scale: 0.5, rotation: 10, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1")
          .from(".floating-card", { 
              y: 100, 
              opacity: 0, 
              duration: 1, 
              stagger: 0.2, 
              ease: "back.out(1.5)" 
          }, "-=0.8");

    // Services Row
    gsap.from(".service-item", {
        scrollTrigger: { trigger: ".services-row", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
    });

    // About Section
    gsap.from(".about-stats div", {
        scrollTrigger: { trigger: ".about-stats", start: "top 90%" },
        scale: 0.5, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(2)"
    });
    gsap.from(".about-img", {
        scrollTrigger: { trigger: ".about-image-wrapper", start: "top 75%" },
        x: 100, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".glass-card", {
        scrollTrigger: { trigger: ".glass-card", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, delay: 0.4, ease: "power3.out"
    });

    // Smart Tools Section - Fix for flying effect
    gsap.from(".app-mockup", {
        scrollTrigger: { trigger: ".tools-section", start: "top 75%" },
        y: 150, rotation: -5, opacity: 0, duration: 1.2, ease: "power4.out"
    });
    gsap.from(".feature-list-checks li", {
        scrollTrigger: { trigger: ".feature-list-checks", start: "top 80%" },
        x: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });

    // NEW: How It Works Section
    gsap.from(".how-card", {
        scrollTrigger: { trigger: ".how-it-works", start: "top 85%" },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
    });

    // NEW: Financial Products Section
    gsap.from(".product-card", {
        scrollTrigger: { trigger: ".products-section", start: "top 75%" },
        x: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
    });

    // NEW: FAQ Section
    gsap.from(".faq-item", {
        scrollTrigger: { trigger: ".faq-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });

    // Global Reach
    gsap.from(".global-stat", {
        scrollTrigger: { trigger: ".global-reach", start: "top 85%" },
        scale: 0, opacity: 0, duration: 0.8, stagger: 0.2, ease: "elastic.out(1, 0.5)"
    });

    // Testimonials
    gsap.from(".testi-card", {
        scrollTrigger: { trigger: ".testimonials", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    // Download CTA
    gsap.from(".download-text", {
        scrollTrigger: { trigger: ".download-app", start: "top 75%" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".app-btn", {
        scrollTrigger: { trigger: ".app-buttons", start: "top 85%" },
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.2, ease: "back.out(2)"
    });

    // iPhone Mockup
    gsap.from(".app-showcase-img", {
        scrollTrigger: { trigger: ".download-grid", start: "top 75%" },
        y: 100, opacity: 0, rotation: 5, duration: 1, ease: "back.out(1.5)"
    });
});
