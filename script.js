const btnSignup = document.getElementById('btn-signup');
const btnLogin = document.getElementById('btn-login');
const signupPanel = document.getElementById('signup-panel');
const loginSide = document.getElementById('login-side');
const loginForm = document.getElementById('login-form');
const tittle = document.getElementById('tittle');
const tittle2 = document.getElementById('tittle2');
const desc = document.getElementById('desc');

let isSignUpMode = false;

btnSignup.addEventListener('click', function (e) {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;

    if (isSignUpMode) {
        // Modo Sign Up (Cadastro)
        signupPanel.style.backgroundColor = '#ffffff';
        signupPanel.style.color = '#000000';
        
        loginSide.style.backgroundColor = '#2ecc71';
        loginSide.style.color = '#ffffff';
        loginForm.style.backgroundColor = '#27b361';
        btnLogin.style.backgroundColor = '#1f904e';

        btnSignup.style.backgroundColor = '#a4a4a4';
        btnSignup.style.color = '#ffffff';
        btnSignup.style.borderColor = '#000000';
        btnSignup.textContent = 'Sign In';

        tittle.textContent = 'Sign Up';
        tittle2.textContent = 'Sign Up';
        desc.textContent = 'Already have an account?';
    } else {
        // Modo Sign In (Login - estado original)
        signupPanel.style.backgroundColor = '#2ecc71';
        signupPanel.style.color = '#ffffff';
        
        loginSide.style.backgroundColor = '#ffffff';
        loginSide.style.color = '#000000';
        loginForm.style.backgroundColor = '#ffffff'; // Ajuste para a cor original do seu form, se for outra
        btnLogin.style.backgroundColor = '#2ecc71'; // Ajuste para a cor original do seu botão, se for outra

        btnSignup.style.backgroundColor = 'transparent'; // Ou a cor original do botão
        btnSignup.style.color = '#ffffff';
        btnSignup.style.borderColor = '#ffffff';
        btnSignup.textContent = 'Sign Up';

        tittle.textContent = 'Sign In';
        tittle2.textContent = 'Sign In';
        desc.textContent = "Don't have an account yet?";
    }
});