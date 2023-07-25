export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('container');

  const contenedorImagen = document.createElement('aside');
  contenedorImagen.classList.add('contenedorImagen');
  homeDiv.appendChild(contenedorImagen);

  const loginImg = document.createElement('img');
  loginImg.src = '../img_login.png';
  loginImg.classList.add('loginImagen');
  contenedorImagen.appendChild(loginImg);

  const contenedorFormulario = document.createElement('form');
  contenedorFormulario.classList.add('contenedorFormulario');
  homeDiv.appendChild(contenedorFormulario);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../logo.png';
  headerLogo.classList.add('headerLogo');
  contenedorFormulario.appendChild(headerLogo);

  const inputCorreo = document.createElement('input');
  inputCorreo.placeholder = 'Correo';
  inputCorreo.classList.add('input');
  contenedorFormulario.appendChild(inputCorreo);

  const inputContraseña = document.createElement('input');
  inputContraseña.placeholder = 'Constraseña';
  inputContraseña.classList.add('input');
  contenedorFormulario.appendChild(inputContraseña);
  inputContraseña.type = ('password');

  const buttonEntrar = document.createElement('button');
  buttonEntrar.classList.add('button');
  buttonEntrar.textContent = 'Entrar';
  contenedorFormulario.appendChild(buttonEntrar);

  const textoAccederCon = document.createElement('p');
  textoAccederCon.textContent = 'Acceder con:';
  contenedorFormulario.appendChild(textoAccederCon);

  const buttonGoogle = document.createElement('img');
  buttonGoogle.src = 'https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_1280.png';
  buttonGoogle.classList.add('buttonGoogle');
  contenedorFormulario.appendChild(buttonGoogle);

  const textoRegistrateAqui = document.createElement('p');
  textoRegistrateAqui.textContent = 'Si no tienes cuenta registrate aquí';
  contenedorFormulario.appendChild(textoRegistrateAqui);

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('button');
  buttonRegister.textContent = 'Registrate';
  contenedorFormulario.appendChild(buttonRegister);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('button');
  buttonHome.textContent = 'Inicio';
  contenedorFormulario.appendChild(buttonHome);

  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  buttonHome.addEventListener('click', () => onNavigate('/'));
  return homeDiv;
};
