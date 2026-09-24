document.addEventListener("DOMContentLoaded", (event) => {
    // Only run if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const tlHero = gsap.timeline();
    tlHero.from(".about-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from(".about-hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6");

    // Our Story Section Slide Effects
    gsap.from(".story-content", {
        scrollTrigger: {
            trigger: ".story-section",
            start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".story-image", {
        scrollTrigger: {
            trigger: ".story-section",
            start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Core Values Staggered Cards
    gsap.from(".value-card", {
        scrollTrigger: {
            trigger: ".values-section",
            start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Team Section Hover/Slide
    gsap.from(".team-member", {
        scrollTrigger: {
            trigger: ".team-section",
            start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Timeline Animation
    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item, i) => {
        const xOffset = item.classList.contains('left') ? -50 : 50;
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            },
            x: xOffset,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // CTA Fade and Scale
    gsap.from(".join-section", {
        scrollTrigger: {
            trigger: ".join-section",
            start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
