import { crearPost, mostrarpost,agregarLike, quitarLike, obtenerDocumento } from '../firestore/baseDeDatosFirestore.js';
import { usuarioActual } from '../lib/firebase/configuracionFirabase.js';

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
  function contenedorPost(post) {

    const postFeedContainer = document.createElement('div');
    postFeedContainer.classList.add('postFeedContainer');
    feedDiv.appendChild(postFeedContainer);

    const textContainerpost = document.createElement('div');
    textContainerpost.classList.add('textContainerpost');
    postFeedContainer.appendChild(textContainerpost);
    textContainerpost.id = 'textContainerpost';

    const containerUsuarioEimagen = document.createElement('div');
    containerUsuarioEimagen.classList.add('containerUsuarioEimagen');
    textContainerpost.appendChild(containerUsuarioEimagen);

    const containerPost = document.createElement('button');
    containerPost.classList.add('containerPost');
    containerPost.id = 'containerPost';
    textContainerpost.appendChild(containerPost);
    containerPost.onclick = function () {
      play();
    };

    const likeFuego = document.createElement('img');
    likeFuego.src = 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif';
    likeFuego.classList.add('likeFuego');
    containerPost.appendChild(likeFuego);

    const contadorLikes = document.createElement('number');
    contadorLikes.className = 'contadorLikes';
    contadorLikes.innerHTML = post.data().likes;
    contadorLikes.id = 'contadorLikes';
    contadorLikes.textContent = '0';
    containerPost.appendChild(contadorLikes);

    const eliminarPost = document.createElement('img');
    eliminarPost.src = 'https://cdn-icons-png.flaticon.com/512/1017/1017479.png';
    eliminarPost.classList.add('eliminarPost');
    textContainerpost.appendChild(eliminarPost);

    const editarPost = document.createElement('img');
    editarPost.src = 'https://cdn.icon-icons.com/icons2/2778/PNG/512/create_edit_modify_icon_176960.png';
    editarPost.classList.add('editarPost');
    textContainerpost.appendChild(editarPost);

    const imagenUsuariopost = document.createElement('img');
    imagenUsuariopost.className = 'imagenUsuario';
    containerUsuarioEimagen.appendChild(imagenUsuariopost);
    imagenUsuariopost.src = 'usuario.png';

    const nombreUsuariopost = document.createElement('p');
    nombreUsuariopost.className = 'nombreUsuario';
    nombreUsuariopost.innerText = post.data().autor;
    nombreUsuariopost.id = 'nombreDeUsuario';
    containerUsuarioEimagen.appendChild(nombreUsuariopost);

    const publicacion = document.createElement('textarea');
    publicacion.classList.add('publicarInput');
    publicacion.innerText = post.data().contenido;
    publicacion.id = 'post';
    publicacion.placeholder = 'Post';
    textContainerpost.appendChild(publicacion);
  }

  //funcion mostrarPost hace un recorrido de cada post y en cada uno se manda a llamar la funcion contenedorPost----------
  mostrarpost().then((respuesta) => {
    respuesta.forEach((post) => {
      contenedorPost(post);
      console.log(post.data().contenido);
    //para acceder a la info de post es con post.data.contenido o fecha o autor----------------
    })
  });


//-----------------------------------------------------------------------------------------------------------

  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));

  buttonPublicar.addEventListener('click', (e) => {
    e.preventDefault();


    const userPost = `${usuarioActual}`;
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