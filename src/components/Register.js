const Register = (onNavigate) => {
  const registerSection = document.createElement('section');
  registerSection.classList.add('contenedor');

  const registerTitle = document.createElement('h2');
  registerTitle.textContent = '¡Registrate!';
  registerTitle.classList.add('welcome-title');

  const registerForm = document.createElement('form');

  const username = document.createElement('input');
  username.setAttribute('type', 'name');
  username.setAttribute('placeholder', 'Nombre de mascota');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'REGISTRARSE';
  buttonRegister.addEventListener('click', () => {
    addUser.then(email.value, password.value)
  });
  buttonRegister.classList.add('btn');
//.catch para las excepciones

  registerForm.append(username, email, password, buttonRegister);
  registerSection.append(registerTitle, registerForm);

  return registerSection;
};

export default Register;
