import { addUser } from '../lib/firebase/account';
import { googleLogin } from '../lib/firebase/firebaseconfig';

const Register = (navigateTo) => {
  const registerContent = document.createElement('div');
  registerContent.classList.add('flex');
  registerContent.id = 'register-content';

  // Contenido del header (logo y bienvenida) -START-
  const header = document.createElement('header');

  const logo = document.createElement('img');
  logo.setAttribute('src', 'img/instapet-logo.svg');
  logo.classList.add('logo');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = '¡Bienvenida/o!';
  // Contenido del header (logo y bienvenida) -END-

  // Contenido del form -START-
  const registerContainer = document.createElement('section');
  registerContainer.classList.add('form-container', 'flex');

  const registerTitle = document.createElement('h3');
  registerTitle.textContent = 'Registrate aquí';
  registerTitle.classList.add('form-title');

  const registerForm = document.createElement('form');
  registerForm.setAttribute('id', 'Registro'); // Esto es para el Firestore//

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container', 'flex');

  const usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'name');
  usernameInput.setAttribute('placeholder', 'Nombre de mascota');

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Correo electrónico');

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Contraseña');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList.add('btn');
  buttonRegister.id = 'register';

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addUser(emailInput.value, passwordInput.value)
      .then((userCredential) => {
        navigateTo('/');
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Bienvenida  a InstaPet');
      // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      // ..
      });
  });

  const para = document.createElement('p');
  para.textContent = 'O puedes registrate con:';

  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('src', 'img/google.svg');
  googleIcon.classList.add('icon');
  googleIcon.id = 'google-logo';

  googleIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const resultado = googleLogin();
    resultado.then(() => {
      navigateTo('/Home');
    });
  });

  const paraLogin = document.createElement('p');
  paraLogin.textContent = '¿Ya tienes cuenta? ';

  const loginLink = document.createElement('a');
  loginLink.textContent = 'Inicia sesión aquí.';
  loginLink.href = '/';
  // Contenido del form -END-

  paraLogin.append(loginLink);
  inputContainer.append(usernameInput, emailInput, passwordInput);
  registerForm.append(inputContainer, buttonRegister, para, googleIcon, paraLogin);
  registerContainer.append(registerTitle, registerForm);
  header.append(logo, welcomeTitle);
  registerContent.append(header, registerContainer);

  return registerContent;
};

export default Register;
