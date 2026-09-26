document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section
    const tlHero = gsap.timeline();
    tlHero.from(".services-hero h1", { y: 60, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".services-hero p", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

    // Wealth Section
    gsap.from(".wealth-content", {
        scrollTrigger: { trigger: ".wealth-section", start: "top 80%" },
        x: -60, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".wealth-list-item", {
        scrollTrigger: { trigger: ".wealth-list", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power2.out"
    });
    gsap.from(".wealth-image", {
        scrollTrigger: { trigger: ".wealth-section", start: "top 80%" },
        x: 60, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Corporate Solutions
    gsap.from(".corp-card", {
        scrollTrigger: { trigger: ".corporate-section", start: "top 75%" },
        y: 80, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)"
    });

    // Wallet Section
    gsap.from(".wallet-image", {
        scrollTrigger: { trigger: ".wallet-section", start: "top 75%" },
        scale: 0.9, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".wallet-card-overlay", {
        scrollTrigger: { trigger: ".wallet-section", start: "top 60%" },
        x: 50, opacity: 0, duration: 0.8, delay: 0.4, ease: "power3.out"
    });
    gsap.from(".wallet-content", {
        scrollTrigger: { trigger: ".wallet-section", start: "top 75%" },
        x: 50, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Insurance Section
    gsap.from(".insurance-pill", {
        scrollTrigger: { trigger: ".insurance-section", start: "top 90%" },
        scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.7)",
        immediateRender: false,
        clearProps: "all"
    });

    gsap.from(".insurance-card", {
        scrollTrigger: { trigger: ".insurance-grid", start: "top 90%" },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
        immediateRender: false,
        clearProps: "all"
    });

    gsap.from(".insurance-trust-bar", {
        scrollTrigger: { trigger: ".insurance-trust-bar", start: "top 95%" },
        y: 30, opacity: 0, duration: 0.6, ease: "power2.out",
        immediateRender: false,
        clearProps: "all"
    });

    // Process Section
    gsap.from(".process-step", {
        scrollTrigger: { trigger: ".process-section", start: "top 75%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.25, ease: "power2.out",
        clearProps: "all"
    });

    // Refresh ScrollTrigger when images load to prevent calculation offset
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    // Interactive Pill Selection
    const pills = document.querySelectorAll(".insurance-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
        });
    });
});
