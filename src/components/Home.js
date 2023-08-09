import { escribirDatosUsuarios, subscribeToDataChanges, getPost } from '../lib/firebase/firebaseconfig';
import error from './Error';

console.log(escribirDatosUsuarios);

const Home = (navigateTo) => {
  // Creación del div contenedor
  const homeContent = document.createElement('div');
  homeContent.id = 'home-content';

  // Contenido del header (logo y bienvenida) -START-
  const header = document.createElement('header');
  header.classList.add('home-header', 'flex');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('header-title');
  welcomeTitle.textContent = 'Instapet';

  const buttonLogout = document.createElement('button');
  buttonLogout.classList.add('btn');
  buttonLogout.addEventListener('click', () => navigateTo('/'));
  buttonLogout.textContent = 'Cerrar sesión';
  // Contenido del header (logo y bienvenida) -END-

  // Contenido de la publicación -START-
  const postSection = document.createElement('section');
  postSection.classList.add('textarea-container', 'flex');

  const postInputMessage = document.createElement('textarea');
  postInputMessage.classList.add('post-input');
  postInputMessage.id = 'inputValue';
  postInputMessage.setAttribute('placeholder', '¿Miau, Woaw, Pio? (Escribe aquí los pensamientos de tu mascota)');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container', 'flex');
  const buttonPublish = document.createElement('button');
  buttonPublish.textContent = 'Publicar';
  buttonPublish.id = 'publishValue';
  buttonPublish.classList.add('btn');
  const containerNewPost = document.createElement('section');
  containerNewPost.id = 'feedScrollContent';

  // aqui debemos poner la funcion que guarde lo que se escribio y que se muestre en el texarea
  // igualmente esta funcion debe hacer el boton cambie por el boton editar
  // buttonPublish.addEventListener('click', () => {
  // console.log('Aquí debe de ir el click');
  // escribirDatosUsuarios();
  // });

  // Función para crear cada post//

  const renderNewPost = (data) => {
    // const boxPost = document.createAttribute('textarea');
    const newDiv = document.createElement('div');
    newDiv.id = 'newPostFeed';
    const newTextPostArea = postInputMessage.value;
    newTextPostArea.textContent = data;
    console.log(newTextPostArea);
    newTextPostArea.id = `ta${data.id}`;
    newTextPostArea.disabled = true;
  };

  const actualizarFeed = (data) => {
    const feedContainer = document.getElementById('feedScrollContent');
    feedContainer.innerHTML = 

    
    data.forEach((item) => {
      const postElement = renderNewPost({ publicacion: item, id: item.id });
      // Verificar si el post tiene un "Me gusta" en el localStorage
      if (localStorage.getItem(`like_${item.id}`) === 'true') {
        postElement.querySelector('.material-symbols-like').classList.add('liked');
      }
    });
  };
  subscribeToDataChanges(actualizarFeed);
  getPost()
  .then((result)=>{ 
    result.forEach((item) => {
      console.log(item.texto)
    })
  })
  .catch (error => {
    console.log(error)
  })

  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancelar';
  buttonCancel.classList.add('btn');
  // Contenido de la publicación -END-

  // btnContainer.append(buttonPublish, buttonCancel);
  // postForm.append(containerNewPost, postInputMessage, btnContainer);
  btnContainer.append(buttonPublish, buttonCancel);
  postSection.append(postInputMessage, btnContainer);
  header.append(welcomeTitle, buttonLogout);
  homeContent.append(header, postSection);

  return homeContent;
};

export default Home;
