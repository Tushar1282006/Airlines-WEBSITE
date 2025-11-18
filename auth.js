(function () {
    const USERS_KEY = 'aerovista-users';
    const SESSION_KEY = 'aerovista-current-user';

    const state = {
        navBound: false
    };

    function readStorage(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (error) {
            console.warn(`[AeroAuth] Failed to read ${key} from storage`, error);
            return fallback;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(`[AeroAuth] Failed to write ${key} to storage`, error);
        }
    }

    function getUsers() {
        return readStorage(USERS_KEY, []);
    }

    function saveUsers(users) {
        writeStorage(USERS_KEY, users);
    }

    function normalizeEmail(email) {
        return (email || '').trim().toLowerCase();
    }

    function findUserByEmail(email) {
        const normalized = normalizeEmail(email);
        return getUsers().find(user => user.email === normalized);
    }

    function setCurrentUser(user) {
        if (!user) return;
        writeStorage(SESSION_KEY, {
            email: user.email,
            name: user.name,
            lastLogin: new Date().toISOString()
        });
        updateNavUi();
    }

    function getCurrentUser() {
        return readStorage(SESSION_KEY, null);
    }

    function clearCurrentUser() {
        try {
            localStorage.removeItem(SESSION_KEY);
        } catch (error) {
            console.warn('[AeroAuth] Failed to clear current user', error);
        }
        updateNavUi();
    }

    async function hashPassword(password) {
        if (!password) return '';

        if (window.crypto && window.crypto.subtle && window.TextEncoder) {
            const encoder = new TextEncoder();
            const data = encoder.encode(password);
            const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        }

        // Fallback (less secure) encoding if SubtleCrypto is unavailable
        try {
            return btoa(password);
        } catch {
            return password;
        }
    }

    function showFormMessage(form, type, text) {
        const messageEl = form?.querySelector('[data-form-message]');
        if (!messageEl) return;

        messageEl.textContent = text || '';
        messageEl.dataset.state = type || '';
        messageEl.style.display = text ? 'block' : 'none';
    }

    function updateNavUi() {
        const authButtons = document.getElementById('authButtons');
        const userSession = document.getElementById('userSession');
        const userGreeting = document.getElementById('userGreeting');

        if (!authButtons && !userSession) return;

        const currentUser = getCurrentUser();

        if (currentUser && userSession && userGreeting) {
            const name = (currentUser.name || '').trim();
            const firstName = name.split(' ')[0] || 'Traveler';
            userGreeting.textContent = `Hi, ${firstName}`;
            userSession.style.display = 'flex';
            if (authButtons) authButtons.style.display = 'none';
        } else {
            if (userSession) userSession.style.display = 'none';
            if (authButtons) authButtons.style.display = 'flex';
        }
    }

    function bindNavEvents() {
        if (state.navBound) return;
        state.navBound = true;

        const loginBtn = document.querySelector('.btn-login');
        const signupBtn = document.querySelector('.btn-signup');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                window.location.href = 'login.html';
            });
        }

        if (signupBtn) {
            signupBtn.addEventListener('click', () => {
                window.location.href = 'signup.html';
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                clearCurrentUser();
                alert('You have been logged out successfully.');
            });
        }

        updateNavUi();
    }

    function setupSignupForm() {
        const form = document.getElementById('signupForm');
        if (!form) return;

        const passwordField = form.querySelector('input[name="password"]');
        const confirmField = form.querySelector('input[name="confirmPassword"]');

        // Optional real-time password feedback
        passwordField?.addEventListener('input', () => {
            showPasswordHints(form, passwordField.value);
        });

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const fullName = form.elements['fullName']?.value.trim() || '';
            const email = normalizeEmail(form.elements['email']?.value);
            const password = form.elements['password']?.value || '';
            const confirmPassword = form.elements['confirmPassword']?.value || '';
            const termsAccepted = form.elements['agreeTerms']?.checked;

            const errors = [];

            if (fullName.length < 2) {
                errors.push('Please enter your full name.');
            }

            if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address.');
            }

            const passwordValidation = validatePassword(password);
            if (!passwordValidation.valid) {
                errors.push(passwordValidation.message);
            }

            if (password !== confirmPassword) {
                errors.push('Passwords do not match.');
            }

            if (!termsAccepted) {
                errors.push('You must accept the terms to continue.');
            }

            if (errors.length > 0) {
                showFormMessage(form, 'error', errors.join(' '));
                return;
            }

            if (findUserByEmail(email)) {
                showFormMessage(form, 'error', 'An account with this email already exists. Please log in instead.');
                return;
            }

            showFormMessage(form, 'info', 'Creating your account...');

            try {
                const passwordHash = await hashPassword(password);
                const users = getUsers();
                const newUser = {
                    name: fullName,
                    email,
                    passwordHash,
                    createdAt: new Date().toISOString()
                };

                users.push(newUser);
                saveUsers(users);

                showFormMessage(form, 'success', 'Account created successfully! Redirecting to login...');
                form.reset();

                setTimeout(() => {
                    window.location.href = 'login.html?signup=success';
                }, 1400);
            } catch (error) {
                console.error('[AeroAuth] Failed to create account', error);
                showFormMessage(form, 'error', 'Something went wrong while creating your account. Please try again.');
            }
        });
    }

    function setupLoginForm() {
        const form = document.getElementById('loginForm');
        if (!form) return;

        const params = new URLSearchParams(window.location.search);
        if (params.get('signup') === 'success') {
            showFormMessage(form, 'success', 'Account created! You can log in now.');
        }

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = normalizeEmail(form.elements['email']?.value);
            const password = form.elements['password']?.value || '';
            const rememberMe = form.elements['rememberMe']?.checked;

            if (!isValidEmail(email)) {
                showFormMessage(form, 'error', 'Please enter a valid email address.');
                return;
            }

            if (!password) {
                showFormMessage(form, 'error', 'Please enter your password.');
                return;
            }

            showFormMessage(form, 'info', 'Validating credentials...');

            try {
                const user = findUserByEmail(email);
                if (!user) {
                    showFormMessage(form, 'error', 'No account found with that email. Please sign up first.');
                    return;
                }

                const passwordHash = await hashPassword(password);
                if (passwordHash !== user.passwordHash) {
                    showFormMessage(form, 'error', 'Incorrect password. Please try again.');
                    return;
                }

                setCurrentUser(user);

                if (rememberMe) {
                    localStorage.setItem('aerovista-remember-email', email);
                } else {
                    localStorage.removeItem('aerovista-remember-email');
                }

                showFormMessage(form, 'success', 'Login successful! Redirecting to the homepage...');

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1200);
            } catch (error) {
                console.error('[AeroAuth] Login failed', error);
                showFormMessage(form, 'error', 'Unable to log in at this time. Please try again.');
            }
        });

        const savedEmail = localStorage.getItem('aerovista-remember-email');
        if (savedEmail) {
            form.elements['email'].value = savedEmail;
            if (form.elements['rememberMe']) {
                form.elements['rememberMe'].checked = true;
            }
        }
    }

    function showPasswordHints(form, password) {
        const hintEl = form?.querySelector('[data-password-hint]');
        if (!hintEl) return;

        const { requirements } = validatePassword(password);
        hintEl.innerHTML = requirements.map(req => {
            const statusClass = req.met ? 'met' : 'pending';
            return `<span class="hint-${statusClass}">${req.label}</span>`;
        }).join('');
    }

    function validatePassword(password) {
        const requirements = [
            { label: '8+ characters', met: password.length >= 8 },
            { label: 'One uppercase', met: /[A-Z]/.test(password) },
            { label: 'One lowercase', met: /[a-z]/.test(password) },
            { label: 'One number', met: /\d/.test(password) }
        ];

        const unmet = requirements.filter(req => !req.met);
        return {
            valid: unmet.length === 0,
            message: unmet.length === 0
                ? ''
                : `Password must include ${unmet.map(req => req.label.toLowerCase()).join(', ')}.`,
            requirements
        };
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setupPasswordToggles() {
        // Setup password toggle for login page
        const loginPasswordToggle = document.getElementById('loginPasswordToggle');
        const loginPassword = document.getElementById('loginPassword');
        
        if (loginPasswordToggle && loginPassword) {
            loginPasswordToggle.closest('.password-toggle').addEventListener('click', () => {
                const isPassword = loginPassword.type === 'password';
                loginPassword.type = isPassword ? 'text' : 'password';
                loginPasswordToggle.classList.toggle('fa-eye');
                loginPasswordToggle.classList.toggle('fa-eye-slash');
            });
        }

        // Setup password toggle for signup page - password field
        const signupPasswordToggle = document.getElementById('signupPasswordToggle');
        const signupPassword = document.getElementById('signupPassword');
        
        if (signupPasswordToggle && signupPassword) {
            signupPasswordToggle.closest('.password-toggle').addEventListener('click', () => {
                const isPassword = signupPassword.type === 'password';
                signupPassword.type = isPassword ? 'text' : 'password';
                signupPasswordToggle.classList.toggle('fa-eye');
                signupPasswordToggle.classList.toggle('fa-eye-slash');
            });
        }

        // Setup password toggle for signup page - confirm password field
        const signupConfirmPasswordToggle = document.getElementById('signupConfirmPasswordToggle');
        const signupConfirmPassword = document.getElementById('signupConfirmPassword');
        
        if (signupConfirmPasswordToggle && signupConfirmPassword) {
            signupConfirmPasswordToggle.closest('.password-toggle').addEventListener('click', () => {
                const isPassword = signupConfirmPassword.type === 'password';
                signupConfirmPassword.type = isPassword ? 'text' : 'password';
                signupConfirmPasswordToggle.classList.toggle('fa-eye');
                signupConfirmPasswordToggle.classList.toggle('fa-eye-slash');
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        bindNavEvents();
        setupSignupForm();
        setupLoginForm();
        setupPasswordToggles();
    });

    window.addEventListener('storage', (event) => {
        if (event.key === SESSION_KEY || event.key === USERS_KEY) {
            updateNavUi();
        }
    });

    window.AeroAuth = {
        getUsers,
        saveUsers,
        findUserByEmail,
        setCurrentUser,
        getCurrentUser,
        clearCurrentUser,
        hashPassword,
        updateNavUi
    };
})();

