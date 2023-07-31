export const feed = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('feedDiv');

  const headerFeed = document.createElement('header');
  headerFeed.classList.add('headerFeed');
  homeDiv.appendChild(headerFeed);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../logo.png';
  headerLogo.classList.add('headerLogoFeed');
  headerFeed.appendChild(headerLogo);

  const buttonCerrarSesion = document.createElement('button');
  buttonCerrarSesion.classList.add('buttonCerrarSesion');
  buttonCerrarSesion.textContent = 'Cerrar sesion';
  headerFeed.appendChild(buttonCerrarSesion);

  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feedContainer');
  homeDiv.appendChild(feedDiv);

    //---------Elementos para publicar--------

  const fondoContenedorPublicar = document.createElement('div');
  fondoContenedorPublicar.classList.add('fondoContenedorPublicar');
  feedDiv.appendChild(fondoContenedorPublicar);

  const contenedorPublicar = document.createElement('div');
  contenedorPublicar.classList.add('contenedorPublicar');
  fondoContenedorPublicar.appendChild(contenedorPublicar);

  const imagenUsuarioPublicar = document.createElement('img');
  imagenUsuarioPublicar.className = "imagenUsuarioPublicar";
  contenedorPublicar.appendChild(imagenUsuarioPublicar);
  imagenUsuarioPublicar.src = "usuario.png";

  const nombreUsuarioPublicar = document.createElement('p');
  nombreUsuarioPublicar.className = "nombreUsuarioPublicar";
  nombreUsuarioPublicar.textContent= 'Nombre de usuario';
  contenedorPublicar.appendChild(nombreUsuarioPublicar);
    
  const textoPublicar = document.createElement("textarea");
  textoPublicar.classList.add("textoPublicar");
  textoPublicar.placeholder = 'Crear post';
  contenedorPublicar.appendChild(textoPublicar);

  const buttonPublicar = document.createElement('button');
  buttonPublicar.className = "buttonPublicar";
  buttonPublicar.textContent = 'Publicar';
  contenedorPublicar.appendChild(buttonPublicar)

  //---------Elementos de publicaciones--------

  const fondoContenedorPublicacion = document.createElement('div');
  fondoContenedorPublicacion.classList.add('fondoContenedorPublicacion');
  feedDiv.appendChild(fondoContenedorPublicacion);

  const contenedorPublicacion = document.createElement('div');
  contenedorPublicacion.classList.add('contenedorPublicacion');
  fondoContenedorPublicacion.appendChild(contenedorPublicacion);

  const imagenUsuarioPublicacion = document.createElement('img');
  imagenUsuarioPublicacion.className = "imagenUsuarioPublicacion";
  contenedorPublicacion.appendChild(imagenUsuarioPublicacion);
  imagenUsuarioPublicacion.src = "usuario.png";

  const nombreUsuarioPublicacion = document.createElement('p');
  nombreUsuarioPublicacion.className = "nombreUsuarioPublicacion";
  nombreUsuarioPublicacion.textContent= 'Nombre de usuario';
  contenedorPublicacion.appendChild(nombreUsuarioPublicacion);
    
  const textoPublicacion = document.createElement("textarea");
  textoPublicacion.classList.add("textoPublicacion");
  textoPublicacion.placeholder = 'Crear post';
  contenedorPublicacion.appendChild(textoPublicacion);



  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
