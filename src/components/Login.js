import { onNavigate } from "../main";

export const login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Hola de vuelta'
  const buttonHome = document.createElement ('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.textContent = 'Bienvenido a InstaPet';
  buttonHome.textContent = 'Regresar al Home';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
