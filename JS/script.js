document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('mobile-open');
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navbar.classList.contains('mobile-open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navbar.classList.contains('mobile-open')) {
            navbar.classList.remove('mobile-open');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Number Counter Animation
    const counters = document.querySelectorAll('.counter-value');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseFloat(target.getAttribute('data-target'));
                const duration = 2000; // ms
                const stepTime = Math.abs(Math.floor(duration / 50));
                
                let current = 0;
                const step = endValue / 50;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= endValue) {
                        target.innerText = endValue + (target.getAttribute('data-suffix') || '');
                        clearInterval(timer);
                    } else {
                        // format integer vs decimal based on data-decimals
                        const decimals = target.getAttribute('data-decimals') ? parseInt(target.getAttribute('data-decimals')) : 0;
                        target.innerText = (decimals ? current.toFixed(decimals) : Math.floor(current)) + (target.getAttribute('data-suffix') || '');
                    }
                }, stepTime);
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});


      // FAQ Accordion Logic
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
          const question = item.querySelector('.faq-question, h4');
          if (question) {
              question.addEventListener('click', () => {
                  const isActive = item.classList.contains('active');
                  // Close all
                  faqItems.forEach(i => i.classList.remove('active'));
                  // Open clicked
                  if (!isActive) {
                      item.classList.add('active');
                  }
              });
          }
      });
