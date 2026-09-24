document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section
    const tlHero = gsap.timeline();
    tlHero.from(".blog-hero h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".blog-hero p", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

    // Featured Article
    gsap.from(".featured-wrapper", {
        scrollTrigger: { trigger: ".featured-section", start: "top 80%" },
        y: 60, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Categories
    gsap.from(".category-pill", {
        scrollTrigger: { trigger: ".categories-section", start: "top 85%" },
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)"
    });

    // Recent Articles Grid
    gsap.from(".article-card", {
        scrollTrigger: { trigger: ".recent-articles-section", start: "top 75%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
    });

    // Popular Reads
    gsap.from(".popular-item", {
        scrollTrigger: { trigger: ".popular-section", start: "top 75%" },
        x: -50, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });

    // Newsletter
    gsap.from(".newsletter-wrapper", {
        scrollTrigger: { trigger: ".newsletter-section", start: "top 80%" },
        scale: 0.95, opacity: 0, duration: 1, ease: "power3.out"
    });
});
