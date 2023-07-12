
const Home = () => {

  const homeDiv = document.createElement('div');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};

export default Home;