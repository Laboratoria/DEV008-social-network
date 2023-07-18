const Login = (onNavigate) => {
  const section = document.createElement('section');
  section.classList.add('form-container');
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

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  btnContainer.classList.add('flex');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', () => onNavigate('/Home'));
  buttonLogin.classList.add('btn');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));
  buttonRegister.classList.add('btn');

  btnContainer.append(buttonLogin, buttonRegister);
  loginForm.append(inputEmail, inputPassword, btnContainer);
  section.append(welcomeTitle, loginForm);

  return section;
};

export default Login;
