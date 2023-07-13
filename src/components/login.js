export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('container');

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('button');
  buttonHome.textContent = 'Regresar a home';

  const loginDiv = document.createElement('div');
  loginDiv.classList.add('loginDiv');
  homeDiv.appendChild(loginDiv);

  const contenedorImagen = document.createElement('aside');
  contenedorImagen.classList.add('contenedorImagen');
  loginDiv.appendChild(contenedorImagen);

  const loginImg = document.createElement('img');
  loginImg.src = '../img_login.JPG';
  loginImg.classList.add('contenedorImagen');
  contenedorImagen.appendChild(loginImg);

  const contenedorFormulario = document.createElement('form');
  contenedorFormulario.classList.add('contenedorFormulario');
  loginDiv.appendChild(contenedorFormulario);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../musiClub -logo.JPG';
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

  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
