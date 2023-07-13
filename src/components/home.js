export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const contenedorHome = document.createElement('div');
  contenedorHome.className="contenedorHome";
  homeDiv.appendChild(contenedorHome);

  const logoPrincipal = document.createElement('img');
  logoPrincipal.className = "logoPrincipal"
  contenedorHome.appendChild(logoPrincipal);
  logoPrincipal.src = "disneylogo.png";

  const sinopsis = document.createElement('p');
  sinopsis.className="sinopsis";
  sinopsis.textContent = 'sinopsis';
  contenedorHome.appendChild(sinopsis);

  const contenedorBotones = document.createElement('div');
  contenedorBotones.className="contenedorBotonesHome";
  contenedorHome.appendChild(contenedorBotones);
  
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  contenedorBotones.appendChild(buttonRegister);

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar sesion';
  contenedorBotones.appendChild(buttonLogin);

  const contenedorImagenesH = document.createElement('div');
  contenedorImagenesH.className = "contenedorImagenesH";
  contenedorHome.appendChild(contenedorImagenesH);

  const imagenIzquierdaH = document.createElement('img');
  imagenIzquierdaH.className = "imagenIzquierdaH"
  contenedorImagenesH.appendChild(imagenIzquierdaH);
  imagenIzquierdaH.src = "disneylogo.png";

  const imagenDerechaH = document.createElement('img');
  imagenDerechaH.className = "imagenDerechaH"
  contenedorImagenesH.appendChild(imagenDerechaH);
  imagenDerechaH.src = "disneylogo.png";

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));


  homeDiv.appendChild(contenedorHome);

  return homeDiv;
};