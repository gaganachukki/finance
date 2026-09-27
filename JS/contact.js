document.addEventListener('DOMContentLoaded', () => {
    

    // Contact Form Validation
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccessMessage');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Redirect to 404 page as requested by user
            window.location.href = '404.html';
        });
    }
});
