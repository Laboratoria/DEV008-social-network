const Login = (onNavigate) => {
  const section = document.createElement('section');
  section.classList.add('contenedor');
  section.classList.add('flex');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = '¡Bienvenida/o!';

  const loginForm = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', () => onNavigate('/Home'));
  buttonLogin.classList.add('btn');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));
  buttonRegister.classList.add('btn');

  loginForm.append(inputEmail, inputPassword, buttonLogin, buttonRegister);
  section.append(welcomeTitle, loginForm);

  return section;
};

export default Login;
