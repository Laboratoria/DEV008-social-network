import { addUser } from '../lib/firebase/acount';

const Register = (onNavigate) => {
  const registerSection = document.createElement('section');
  registerSection.classList.add('contenedor');

  const registerTitle = document.createElement('h2');
  registerTitle.textContent = '¡Registrate!';
  registerTitle.classList.add('welcome-title');

  const registerForm = document.createElement('form');
  registerForm.classList.add('Registro');
  registerForm.setAttribute('id', 'Registro'); // Esto es para el Firestore//

  const username = document.createElement('input');
  username.setAttribute('type', 'name');
  username.setAttribute('placeholder', 'Nombre de mascota');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addUser(email.value, password.value)
      .then((userCredential) => {
        onNavigate('/');
        // Signed in
        const user = userCredential.user;
        alert('Bienvenida  a InstaPet');
      // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      // ..
      });
  });
  buttonRegister.classList.add('btn');

  registerForm.append(username, email, password, buttonRegister);
  registerSection.append(registerTitle, registerForm);

  return registerSection;
};

export default Register;
