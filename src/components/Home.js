const Home = () => {
  const homeDiv = document.createElement('div');
  const buttonRegis = document.createElement('button');

  const buttonLogin = document.createElement('button');
  buttonRegis.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  homeDiv.appendChild(buttonRegis);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
export default Home;
