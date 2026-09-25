/* =====================================================
   NAVBAR HAMBURGER + MOBILE MENU JS
   For all public pages (index, about, services, etc.)
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    const body = document.body;

    if (!hamburger) return;

    function openMenu() {
        hamburger.classList.add('active');
        if (navLinks) navLinks.classList.add('mobile-open');
        if (navActions) navActions.classList.add('mobile-open');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('mobile-open');
        if (navActions) navActions.classList.remove('mobile-open');
        body.style.overflow = '';
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (hamburger.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close on nav link click
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
});
