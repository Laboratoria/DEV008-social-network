import { crearPost, mostrarpost, borrarPost, incrementarLike , obtenerDocumento, decrementarLike} from '../firestore/baseDeDatosFirestore.js';
//import { usuarioActual } from '../lib/firebase/configuracionFirabase.js';
import { obtenerUsuarioActual } from '../lib/localStorage.js';

export const feed = (onNavigate) => {
  const usuarioActual = obtenerUsuarioActual();
  console.log(usuarioActual);

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('homeDiv');

  const headerFeed = document.createElement('header');
  headerFeed.classList.add('headerFeed');
  homeDiv.appendChild(headerFeed);

  const headerLogo = document.createElement('img');
  headerLogo.src = '../logo.png';
  headerLogo.classList.add('headerLogoFeed');
  headerFeed.appendChild(headerLogo);

  const usuarioInfoHeader = document.createElement('div');
  usuarioInfoHeader.classList.add('usuarioInfoHeader');
  headerFeed.appendChild(usuarioInfoHeader);

  const imagenUsuarioHeader = document.createElement('img');
  imagenUsuarioHeader.className = 'imagenUsuarioHeader';
  usuarioInfoHeader.appendChild(imagenUsuarioHeader);
  imagenUsuarioHeader.src = 'usuario.png';

  const nombreUsuarioHeader = document.createElement('h2');
  nombreUsuarioHeader.className = 'nombreUsuarioHeader';
  nombreUsuarioHeader.innerText = usuarioActual.email;
  usuarioInfoHeader.appendChild(nombreUsuarioHeader);

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

  const usuarioInfo = document.createElement('section');
  usuarioInfo.className = 'usuarioInfo';
  textContainer.appendChild(usuarioInfo);

  const imagenUsuario = document.createElement('img');
  imagenUsuario.className = 'imagenUsuario';
  imagenUsuario.src = 'usuario.png';
  usuarioInfo.appendChild(imagenUsuario);

  const nombreUsuario = document.createElement('p');
  nombreUsuario.className = 'nombreUsuario';
  nombreUsuario.innerText = usuarioActual.email;
  usuarioInfo.appendChild(nombreUsuario);

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

  // funcion que crea el contenedor de cada post----------------------------
  function contenedorPost(post) {

    const postFeedContainer = document.createElement('div');
    postFeedContainer.classList.add('postFeedContainer');
    feedDiv.appendChild(postFeedContainer);

    const textContainerpost = document.createElement('div');
    textContainerpost.classList.add('textContainerpost');
    postFeedContainer.appendChild(textContainerpost);
    textContainerpost.id = 'textContainerpost';

    const usuarioInfoPost = document.createElement('section');
    usuarioInfoPost.className = 'usuarioInfo';
    textContainerpost.appendChild(usuarioInfoPost);

    const editarPost = document.createElement('img');
    editarPost.src = 'https://cdn.icon-icons.com/icons2/2778/PNG/512/create_edit_modify_icon_176960.png';
    editarPost.classList.add('editarPost');
    textContainerpost.appendChild(editarPost);
    editarPost.addEventListener("click", () => {
      alert('Edita tu post');
      const abrirEditor = new publicacion.disabled(true);
      //console.log(abrirEditor);
      abrirEditor
          });

    const guardarPost = document.createElement('img');
    guardarPost.src = 'https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790860-8check_84164.png';
    guardarPost.classList.add('guardarPost');
    textContainerpost.appendChild(guardarPost);
    guardarPost.addEventListener("click", () => {
      alert('Editaste tu post');
      const cerrarPost = new publicacion.disabled(false);
      cerrarPost

    });

    const imagenUsuariopost = document.createElement('img');
    imagenUsuariopost.className = 'imagenUsuario';
    imagenUsuariopost.src = 'usuario.png';
    usuarioInfoPost.appendChild(imagenUsuariopost);

    const nombreUsuariopost = document.createElement('p');
    nombreUsuariopost.className = 'nombreUsuario';
    nombreUsuariopost.innerText = post.data().autor;
    nombreUsuariopost.id = 'nombreDeUsuario';
    usuarioInfoPost.appendChild(nombreUsuariopost);

    const publicacion = document.createElement('textarea');
    publicacion.classList.add('publicarInput');
    publicacion.innerText = post.data().contenido;
    publicacion.disabled = 'false';
    publicacion.id = 'post';
    publicacion.disabled = false;

    publicacion.placeholder = 'Post';
    textContainerpost.appendChild(publicacion);

    const opcionesPostContenedor = document.createElement('section');
    opcionesPostContenedor.className = 'opcionesPostContenedor';
    textContainerpost.appendChild(opcionesPostContenedor);

    const containerLike = document.createElement('button');
    containerLike.classList.add('containerLike');
    containerLike.id = ' containerLike';
    opcionesPostContenedor.appendChild(containerLike);

    containerLike.addEventListener("click", function () {
      obtenerDocumento(post.id)
      .then( (documento)=> {
        const yaDioLike = documento.data().likes.includes(usuarioActual.uid)
        if (yaDioLike){
          decrementarLike(usuarioActual.uid, post.id).then(()=>{
            window.location.reload()
          })
        }
        else{
          incrementarLike(post.id, usuarioActual.uid).then(()=>{
            window.location.reload();
          })
        }
      })
      .catch((error)=>{
        console.log(error)
      })
       /* incrementarLike(post.id, usuarioActual.uid).then((respuesta) => {
        console.log(respuesta);
        console.log('Diste un like');
        console.log(post.uid);
        alert("funciona el boton")
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert(error.message);
          window.location.reload(); // Para recargar la pantalla//
        });*/
      });
    
    containerLike.onclick = function () {
      play();
    };

    const likeFuego = document.createElement('img');
    likeFuego.src = 'https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f525.gif';
    likeFuego.classList.add('likeFuego');
    containerLike.appendChild(likeFuego);

    const contadorLikes = document.createElement('number');
    contadorLikes.className = 'contadorLikes';
    contadorLikes.id = 'contadorLikes';
    contadorLikes.textContent = post.data().likes.length;
    console.log(post);
    containerLike.appendChild(contadorLikes);
    //aqui sustituir el valor de 0 por la longitud del arreglo de likes post.likes.lenght

    const eliminarPost = document.createElement('img');
    eliminarPost.src = 'https://cdn-icons-png.flaticon.com/512/1017/1017479.png';
    eliminarPost.classList.add('eliminarPost');
    opcionesPostContenedor.appendChild(eliminarPost);
    eliminarPost.addEventListener('click', () => {
      const alertConfimar = confirm('¿Eliminar post?'); // Confirmación para eliminar post// NO FUNCIONA / LO BORRA DE TODOS MODOS//
      alert(alertConfimar);
      if (alertConfimar === true) {
        borrarPost(post.id)
          .then((respuesta) => {
            console.log(respuesta);
            console.log('Borraste un post');
            window.location.reload();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert(error.message);
            window.location.reload();
          });
      }
    });
    //console.log(post.id);
  }

  //funcion mostrarPost hace un recorrido de cada post y en cada uno se manda a llamar la funcion contenedorPost----------
  mostrarpost().then((respuesta) => {
    respuesta.forEach((post) => {
      contenedorPost(post);
      //console.log(post.data().contenido);
      //para acceder a la info de post es con post.data.contenido o fecha o autor----------------
    });
  });

  buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));


  buttonPublicar.addEventListener('click', (e) => {
    e.preventDefault();

    const userPost = usuarioActual.email;
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
        console.log('Haz creado un post');
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