import { onNavigate } from '../main.js';

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Registrate a InstaPet';
    
  const username = document.createElement('INPUT');
  username.setAttribute('type', 'email');
  username.setAttribute('placeholder', 'Nombre de usuario');

  const email = document.createElement('INPUT');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico')

  const password = document.createElement('INPUT');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';

  const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Regresar al Home';
  
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.textContent = 'Bienvenido a InstaPet';
  buttonHome.textContent = 'Regresar al Home';

  homeDiv.appendChild(username);
  homeDiv.appendChild(email);
  homeDiv.appendChild(password);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
