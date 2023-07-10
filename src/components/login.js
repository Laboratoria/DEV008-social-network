import { onNavigate } from '../main';

export const login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenidos a Login';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar a home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
}