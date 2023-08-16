import {
  escribirDatosUsuarios, subscribeToDataChanges, getPost, getCurrentUser,
} from '../lib/firebase/firebaseconfig';
// import error from './Error';

const Home = (navigateTo) => {
  // Creación del div contenedor
  const homeContent = document.createElement('div');
  homeContent.id = 'home-content';

  // Contenido del header (logo y bienvenida) -START-
  const header = document.createElement('header');
  header.classList.add('home-header', 'flex');

  const logo = document.createElement('img');
  logo.setAttribute('src', './img/instapet-logo-horizontal.svg');
  logo.classList.add('logo-horizontal');

  const buttonLogout = document.createElement('img');
  buttonLogout.setAttribute('src', './img/right-to-bracket.svg');
  buttonLogout.classList.add('icon-logout');
  buttonLogout.addEventListener('click', () => navigateTo('/'));
  // Contenido del header (logo y bienvenida) -END-

  // Contenido de la publicación -
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
  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancelar';
  buttonCancel.classList.add('btn');
  const containerNewPost = document.createElement('section');
  containerNewPost.id = 'feedScrollContent';


  const actualizarFeed = (data) => {
    const feedContainer = document.getElementById('feedScrollContent');
    feedContainer.innerHTML = data.forEach((item) => {
      const postElement = renderNewPost({ texto: item, id: item.id, author: item.author });

      
    });
  };
  subscribeToDataChanges(actualizarFeed);

  const buttonEdit = './img/pen-to-square.svg';

  // Contenido de la publicación -END-

  btnContainer.append(buttonPublish, buttonCancel);
  postSection.append(postInputMessage, btnContainer);
  header.append(logo, buttonLogout);
  homeContent.append(header, postSection, containerNewPost);

  const postContainerId = homeContent.querySelector('#feedScrollContent');
  getPost()
    .then((texto) => {
      texto.forEach((element) => {
        console.log(texto);
        const author = JSON.parse(localStorage.getItem('user')).email;

        postContainerId.innerHTML += `
        <div class = 'post'>
          <div class = 'post-author'>
          <p>${author}</p>
          </div> 
          <div class = 'post-text'>  
          <p>${element.texto}<p>
          </div>
          <div class='post-btn-container flex'><img class='icons' src='${buttonEdit}' /><img class='icons btn-delete' src='${buttonDelete}' id='${element.id}' /></div>
        </div>
        `;
      });
    });

    const buttonDelete = './img/trash-can.svg';
    const btnDelete= postContainerId.querySelectorAll('.btn-delete');
    
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: {texto}}) => {
        deletePost(texto.id).then(() => {
          window.location.reload();
        });
      });
    });

  return homeContent;
};

export default Home;
