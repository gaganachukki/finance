document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm_password');
    const signupForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const roleBtns = document.querySelectorAll('.role-btn');
    
    // Default role
    let selectedRole = 'user';

    // Role Selection Logic
    if (roleBtns.length > 0) {
        roleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                roleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedRole = btn.getAttribute('data-role');
            });
        });
    }

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            if (confirmInput) confirmInput.setAttribute('type', type);
            
            if(type === 'password') {
                togglePassword.classList.remove('fa-eye-slash');
                togglePassword.classList.add('fa-eye');
            } else {
                togglePassword.classList.remove('fa-eye');
                togglePassword.classList.add('fa-eye-slash');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = passwordInput.value;
            const confirmPassword = confirmInput.value;
            
            if (password !== confirmPassword) {
                loginError.style.display = 'block';
                loginError.innerText = 'Passwords do not match.';
                return;
            }

            if (password.length < 6) {
                loginError.style.display = 'block';
                loginError.innerText = 'Password must be at least 6 characters.';
                return;
            }

            if (email.includes('@')) {
                loginError.style.display = 'none';
                
                let formattedName = fullname.trim() || email.split('@')[0];
                
                // Save to localStorage
                localStorage.setItem('stackly_user_email', email);
                localStorage.setItem('stackly_user_name', formattedName);
                
                // Redirect to login page after signup
                window.location.href = 'login.html';
            }
        });
    }
});
