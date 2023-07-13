export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenidos al registro';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
