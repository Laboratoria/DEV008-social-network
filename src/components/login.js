export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('container');
  homeDiv.textContent = 'Bienvenidos a Login';

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('button');
  buttonHome.textContent = 'Regresar a home';

  const contenedorImagen = document.createElement('aside');
  contenedorImagen.classList.add('contenedorImagen');
  homeDiv.appendChild(contenedorImagen);

  const contenedorFormulario = document.createElement('section');
  contenedorImagen.classList.add('contenedorFormulario');
  homeDiv.appendChild(contenedorFormulario);

  const headerLogo = document.createElement('img');
  contenedorFormulario.appendChild(headerLogo);

  const inputCorreo = document.createElement('input');
  inputCorreo.placeholder = 'Ingresa tu correo';
  contenedorFormulario.appendChild(inputCorreo);

  const inputContraseña = document.createElement('input');
  inputContraseña.placeholder = 'Ingresa tu constraseña';
  contenedorFormulario.appendChild(inputContraseña);

  const buttonEntrar = document.createElement('button');
  buttonEntrar.classList.add('button');
  buttonEntrar.textContent = 'Entrar';
  contenedorFormulario.appendChild(buttonEntrar);

  const textoAccederCon = document.createElement('p');
  textoAccederCon.textContent = 'Acceder con:';
  contenedorFormulario.appendChild(textoAccederCon);

  const buttonGoogle = document.createElement('img');
  buttonGoogle.src = 'https://www.flaticon.es/icono-gratis/google_5968863';
  contenedorFormulario.appendChild(buttonGoogle);

  const textoRegistrateAqui = document.createElement('p');
  textoRegistrateAqui.textContent = 'Si no tienes cuenta registrate aquí';
  contenedorFormulario.appendChild(textoRegistrateAqui);

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  contenedorFormulario.appendChild(buttonRegister);
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
