const Login = (navigateTo) => {
  
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Hola de vuelta'

  const email = document.createElement('INPUT');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico')

  const password = document.createElement('INPUT');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  const buttonHome = document.createElement('button');

  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonHome.textContent = 'Regresar al Home';
  
  homeDiv.appendChild(email);
  homeDiv.appendChild(password);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

export default Login;
