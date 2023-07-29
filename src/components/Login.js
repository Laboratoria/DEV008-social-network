import { loginUser } from '../lib/firebase/account';
import { googleLogin } from '../lib/firebase/firebaseconfig';

const Login = (onNavigate) => {
  const section = document.createElement('section');
  section.classList.add('form-container');
  section.classList.add('flex');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = '¡Bienvenida/o!';

  const loginForm = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  btnContainer.classList.add('flex');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginUser(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        onNavigate('/Home');
        // Signed in
        const user = userCredential.user;
        alert('Bienvenida  de regreso InstaPet');
      // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      // ..
      });
  });
  buttonLogin.classList.add('btn');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));
  buttonRegister.classList.add('btn');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Inicia sesión con';
  buttonGoogle.classList.add('btn');
  buttonGoogle.setAttribute('id', 'google-btn');

  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('src', './img/google.svg');
  googleIcon.classList.add('icon');

  buttonGoogle.append(googleIcon);
  btnContainer.append(buttonLogin, buttonRegister, buttonGoogle);
  loginForm.append(inputEmail, inputPassword, btnContainer);
  section.append(welcomeTitle, loginForm);

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const resultado = googleLogin();
    resultado.then(() => {
      onNavigate('/Home');
    });
  });

  return section;
};

export default Login;
