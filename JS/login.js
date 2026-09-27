document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const roleBtns = document.querySelectorAll('.role-btn');
    
    // Default role
    let selectedRole = 'user';

    // Role Selection Logic
    if (roleBtns.length > 0) {
        roleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                roleBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked
                btn.classList.add('active');
                // Update selected role
                selectedRole = btn.getAttribute('data-role');
            });
        });
    }

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if(type === 'password') {
                togglePassword.classList.remove('fa-eye-slash');
                togglePassword.classList.add('fa-eye');
            } else {
                togglePassword.classList.remove('fa-eye');
                togglePassword.classList.add('fa-eye-slash');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = passwordInput.value;
            
            // Simple frontend validation simulation
            if (email.includes('@') && password.length >= 6) {
                loginError.style.display = 'none';
                
                
                // Extract name from email
                let namePart = email.split('@')[0];
                let formattedName = namePart.split(/[._-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                
                // Save to localStorage
                localStorage.setItem('stackly_user_email', email);
                localStorage.setItem('stackly_user_name', formattedName);
                
                // Redirect based on selected role

                if (selectedRole === 'admin') {
                    window.location.href = 'admindashboard.html';
                } else {
                    window.location.href = 'userdashboard.html';
                }
            } else {
                loginError.style.display = 'block';
                loginError.innerText = 'Password must be at least 6 characters.';
            }
        });
    }
});
