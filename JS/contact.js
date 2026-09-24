document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact Form Validation
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccessMessage');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation is handled by HTML5 required attribute
            // We just show success message since there's no backend
            
            successMsg.style.display = 'block';
            form.reset();
            
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    }
});
