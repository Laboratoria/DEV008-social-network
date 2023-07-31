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
  buttonCerrarSesion.textContent = 'Salir';
  headerFeed.appendChild(buttonCerrarSesion);

  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feedContainer');
  homeDiv.appendChild(feedDiv);

  const crearPostContainer = document.createElement('div');
  crearPostContainer.classList.add('crearPostContainer');
  feedDiv.appendChild(crearPostContainer);

  const textContainer = document.createElement('div');
  textContainer.classList.add('textContainer');
  crearPostContainer.appendChild(textContainer);

  const imagenUsuario = document.createElement('img');
  imagenUsuario.className = "imagenUsuario";
  textContainer.appendChild(imagenUsuario);
  imagenUsuario.src = "usuario.png";

  const nombreUsuario = document.createElement('p');
  nombreUsuario.className = "nombreUsuario";
  nombreUsuario.textContent= 'Nombre de Usuario';
  textContainer.appendChild(nombreUsuario);

  const publicar = document.createElement("textarea");
  publicar.classList.add("publicarInput");
  publicar.placeholder = 'Crear post';
  textContainer.appendChild(publicar);

  const buttonPublicar = document.createElement('button');
  buttonPublicar.className = "buttonPublicar";
  buttonPublicar.textContent = 'Publicar';
  textContainer.appendChild(buttonPublicar);

  const postFeedContainer = document.createElement('div');
  postFeedContainer.classList.add('postFeedContainer');
  feedDiv.appendChild(postFeedContainer);

  const textContainerpost = document.createElement('div');
  textContainerpost.classList.add('textContainerpost');
  postFeedContainer.appendChild(textContainerpost);

  const imagenUsuariopost = document.createElement('img');
  imagenUsuariopost.className = "imagenUsuario";
  textContainerpost.appendChild(imagenUsuariopost);
  imagenUsuariopost.src = "usuario.png";

  const nombreUsuariopost = document.createElement('p');
  nombreUsuariopost.className = "nombreUsuario";
  nombreUsuariopost.textContent= 'Nombre de Usuario';
  textContainerpost.appendChild(nombreUsuariopost);

  const publicacion = document.createElement("textarea");
  publicacion.classList.add("publicarInput");
  publicacion.placeholder = 'Crear post';
  textContainerpost.appendChild(publicacion);

  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
