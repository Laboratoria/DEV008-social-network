import { crearPost } from '../firestore/baseDeDatosFirestore.js';

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
  publicar.id = 'crearPost';
  publicar.placeholder = 'Crear post';
  textContainer.appendChild(publicar);

  const buttonPublicar = document.createElement('button');
  buttonPublicar.className = "buttonPublicar";
  buttonPublicar.id = 'botonPublicar';
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
  nombreUsuariopost.id = 'nombreDeUsuario';
  nombreUsuariopost.textContent= 'Nombre de Usuario';
  textContainerpost.appendChild(nombreUsuariopost);

  const publicacion = document.createElement("textarea");
  publicacion.classList.add("publicarInput");
  publicacion.id = 'post';
  publicacion.placeholder = 'Post';
  textContainerpost.appendChild(publicacion);

  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));

  buttonPublicar.addEventListener('click', (e) => {
    e.preventDefault();

    const userPost = 'Usuario';
    const contenidoPost = document.getElementById('crearPost').value;
    console.log(contenidoPost);
    const fechaPost = Date.now();
    console.log(fechaPost);

    crearPost(userPost, contenidoPost, fechaPost)
      .then((respuesta) => {
        // Signed in
        const user = respuesta.user;
        console.log(user);
        // ...
        alert('Haz creado un post');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(error.message);
      });
  });

  return homeDiv;
};


// esto debe vivir en feed: 

// .....addEventListener("click", () => {
    // ... 
    //crearPost(user.id, text.value, Date.now()).then(() => { //refrescar la vista  })
//})


// mostrarpost().then((posts)=> { ..... for...})

//siguiente: mostrar post
// miFuncion() {
// return getDocs(referenciaColleccion)
//}