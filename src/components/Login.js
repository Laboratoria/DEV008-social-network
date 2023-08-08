import { loginUser } from '../lib/firebase/account';
import { googleLogin } from '../lib/firebase/firebaseconfig';

const Login = (navigateTo) => {
  // Creación de div contenedor
  const loginContent = document.createElement('div');
  loginContent.classList.add('flex');
  loginContent.id = 'login-content';

  // Contenido del header (logo y bienvenida) -START-
  const header = document.createElement('header');

  const logo = document.createElement('img');
  logo.setAttribute('src', '../img/instapet-logo.svg');
  logo.classList.add('logo');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = '¡Bienvenida/o!';
  // Contenido del header (logo y bienvenida) -END-

  // Contenido del form -START-
  const sectionForm = document.createElement('section');
  sectionForm.classList.add('form-container', 'flex');

  const loginTitle = document.createElement('h3');
  loginTitle.classList.add('form-title');
  loginTitle.textContent = 'Inicia sesión';

  const loginForm = document.createElement('form');
  loginForm.id = 'login-form';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container', 'flex');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('btn');
  buttonLogin.id = 'login';
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginUser(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        navigateTo('/Home');
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Bienvenida  de regreso InstaPet');
      // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      // ..
      });
  });

  const para = document.createElement('p');
  para.textContent = 'O puedes iniciar sesión con:';

  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('src', './img/google.svg');
  googleIcon.classList.add('icon');
  googleIcon.id = 'google-logo';

  googleIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const resultado = googleLogin();
    resultado.then(() => {
      navigateTo('/Home');
    });
  });

  const paraRegister = document.createElement('p');
  paraRegister.textContent = '¿No tienes cuenta? ';

  const registerLink = document.createElement('a');
  registerLink.textContent = 'Registrate aquí.';
  registerLink.href = '/Register';
  // Contenido del form -END-

  paraRegister.append(registerLink);
  inputContainer.append(inputEmail, inputPassword);
  loginForm.append(loginTitle, inputContainer, buttonLogin, para, googleIcon, paraRegister);
  sectionForm.append(loginForm);
  header.append(logo, welcomeTitle);
  loginContent.append(header, sectionForm);

  return loginContent;
};

export default Login;
