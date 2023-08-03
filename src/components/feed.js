import { crearPost, mostrarpost} from '../firestore/baseDeDatosFirestore.js';

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
  //se da una evento onclick al buttonPublicar para que mande a llamar la funcion postPublicado---------------
  buttonPublicar.onclick = function () {
    postPublicado(post);
    //imprime en consola los post publicados----------------
    console.log(postPublicado)
  };

  //funcion que crea el contenedor de cada post----------------------------
  function contenedorPost (){

  const postFeedContainer = document.createElement('div');
  postFeedContainer.classList.add('postFeedContainer');
  feedDiv.appendChild(postFeedContainer);

  const textContainerpost = document.createElement('div');
  textContainerpost.classList.add('textContainerpost');
  postFeedContainer.appendChild(textContainerpost);
  textContainerpost.id = "textContainerpost";

  const imagenUsuariopost = document.createElement('img');
  imagenUsuariopost.className = 'imagenUsuario';
  textContainerpost.appendChild(imagenUsuariopost);
  imagenUsuariopost.src = 'usuario.png';

  const nombreUsuariopost = document.createElement('p');
  nombreUsuariopost.className = 'nombreUsuario';
  nombreUsuariopost.id = 'nombreDeUsuario';
  nombreUsuariopost.textContent = '${post.data()autor}';
  textContainerpost.appendChild(nombreUsuariopost);

  const publicacion = document.createElement('textarea');
  publicacion.classList.add('publicarInput');
  publicacion.id = 'post';
  publicacion.placeholder = 'Post';
  textContainerpost.appendChild(publicacion);

  };

  //funcion mostrarPost hace un recorrido de cada post y en cada uno se manda a llamar la funcion contenedorPost----------
  mostrarpost().then((respuesta) => {
    respuesta.forEach((post) => {
      contenedorPost(post)
      console.log(post.data().contenido);
    //para acceder a la info de post es con post.data.contenido o fecha o autor----------------
    })
  });


//-----------------------------------------------------------------------------------------------------------


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