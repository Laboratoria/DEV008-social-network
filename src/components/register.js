import { onNavigate } from '../main';

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenidos al registro';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar a home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};