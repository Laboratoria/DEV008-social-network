const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'InstaPet';

  const postMessage = document.createElement('Texarea');
  postMessage.setAttribute('type', 'text');
  postMessage.setAttribute('placeholder', '¿Miau, Woahw, Pio?');

  const buttonLogout = document.createElement('button');
  buttonLogout.addEventListener('click', () => onNavigate('/'));
  buttonLogout.textContent = 'Cerrar sesión';

  homeDiv.appendChild(postMessage);
  homeDiv.appendChild(buttonLogout);

  return homeDiv;
};

export default Home;
