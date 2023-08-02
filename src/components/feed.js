<<<<<<< HEAD
import { crearPost, mostrarpost } from '../firestore/baseDeDatosFirestore.js';
=======
import { crearPost, mostrarpost} from '../firestore/baseDeDatosFirestore.js';
>>>>>>> 8443c8fd37c3fb80479d89783417ee5df0e50fbe

export const feed = (onNavigate) => {
 console.log(mostrarpost());
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
  imagenUsuario.className = 'imagenUsuario';
  textContainer.appendChild(imagenUsuario);
  imagenUsuario.src = 'usuario.png';

  const nombreUsuario = document.createElement('p');
  nombreUsuario.className = 'nombreUsuario';
  nombreUsuario.textContent = 'Nombre de Usuario';
  textContainer.appendChild(nombreUsuario);

  const publicar = document.createElement('textarea');
  publicar.classList.add('publicarInput');
  publicar.id = 'crearPost';
  publicar.placeholder = 'Crear post';
  textContainer.appendChild(publicar);

  const buttonPublicar = document.createElement('button');
  buttonPublicar.className = 'buttonPublicar';
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
  imagenUsuariopost.className = 'imagenUsuario';
  textContainerpost.appendChild(imagenUsuariopost);
  imagenUsuariopost.src = 'usuario.png';

  const nombreUsuariopost = document.createElement('p');
  nombreUsuariopost.className = 'nombreUsuario';
  nombreUsuariopost.id = 'nombreDeUsuario';
  nombreUsuariopost.textContent = 'Nombre de Usuario';
  textContainerpost.appendChild(nombreUsuariopost);

  const publicacion = document.createElement('textarea');
  publicacion.classList.add('publicarInput');
  publicacion.id = 'post';
  publicacion.placeholder = 'Post';
  textContainerpost.appendChild(publicacion);

  mostrarpost().then((respuesta) => {
    respuesta.forEach((post) => {
      console.log(post.data());
          //aqui ya se pintan los post
    //para acceder a la info de post es con post.data.contenido o fecha o autor
    })
  });
  
  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));

  buttonPublicar.addEventListener('click', (e) => {
    e.preventDefault();

    const userPost = 'Usuario';
    console.log(userPost);
    const contenidoPost = document.getElementById('crearPost').value;
    console.log(contenidoPost);
    const fecha = new Date();
    const fechaPost = fecha.toLocaleDateString();
    console.log(fechaPost);

    crearPost(userPost, contenidoPost, fechaPost)
      .then((respuesta) => {
        // Signed in
        const postCreado = respuesta;
        console.log(postCreado);
        // ...
        alert('Haz creado un post');
        window.location.reload(); // Para recargar la pantalla//
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(error.message);
        window.location.reload(); // Para recargar la pantalla//
      });
  });

  return homeDiv;
};


// esto debe vivir en feed: 

// .....addEventListener("click", () => {
    // ... 
    // crearPost(user.id, text.value, Date.now()).then(() => { //refrescar la vista  })
// })


// mostrarpost().then((posts)=> { ..... for...})

//siguiente: mostrar post
// miFuncion() {
// return getDocs(referenciaColleccion)
//}
