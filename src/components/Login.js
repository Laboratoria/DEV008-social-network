const Login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add("contenedor");

  const email = document.createElement('INPUT');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico');

  const password = document.createElement('INPUT');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', () => onNavigate('/Home'));


  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));

  homeDiv.appendChild(email);
  homeDiv.appendChild(password);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};

export default Login;

