import { escribirDatosUsuarios, subscribeToDataChanges } from '../lib/firebase/firebaseconfig';

const Home = (onNavigate) => {
  const homeSection = document.createElement('section');
  homeSection.classList.add('contenedorHome');

  const headerSection = document.createElement('div');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = 'Instapet';

  const postForm = document.createElement('div');
  postForm.classList.add('post-form', 'flex');

  const postMessage = document.createElement('textarea');
  postMessage.id = 'inputValue';
  postMessage.setAttribute('placeholder', '¿Miau, Woaw, Pio?');
  const btnContainerHome = document.createElement('div');
  btnContainerHome.classList.add('btn-container', 'flex');
  const buttonPublicar = document.createElement('button');
  buttonPublicar.textContent = 'Publicar';
  buttonPublicar.id = 'publishValue';
  buttonPublicar.classList.add('btn');
  const containerNewPost = document.createElement('div');
  containerNewPost.id = 'feedScrollContent';

  // aqui debemos poner la funcion que guarde lo que se escribio y que se muestre en el texarea
  // igualmente esta funcion debe hacer el boton cambie por el boton editar
  // buttonPublicar.addEventListener('click', () => {
  // console.log('Aquí debe de ir el click');
  // escribirDatosUsuarios();
  // });

  // Función para crear cada post//

  const renderNewPost = (data) => {
    // const boxPost = document.createAttribute('textarea');
    const newDiv = document.createElement('div');
    newDiv.id = 'newPostFeed';
    const newTextPostArea = postMessage.value;
    newTextPostArea.textContent = data;
    console.log(newTextPostArea);
    newTextPostArea.id = `ta${data.id}`;
    newTextPostArea.disabled = true;
  };

  const actualizarFeed = (data) => {
    const feedContainer = document.getElementById('feedScrollContent');
    feedContainer.innerHTML = '';
    data.forEach((item) => {
      const postElement = renderNewPost({ publicacion: item, id: item.id });
      // Verificar si el post tiene un "Me gusta" en el localStorage
      if (localStorage.getItem(`like_${item.id}`) === 'true') {
        postElement.querySelector('.material-symbols-like').classList.add('liked');
      }
    });
  };
  subscribeToDataChanges(actualizarFeed);

  const buttonCancelar = document.createElement('button');
  buttonCancelar.textContent = 'Cancelar';
  buttonCancelar.classList.add('btn');

  const buttonLogout = document.createElement('button');
  buttonLogout.classList.add('btn');
  buttonLogout.addEventListener('click', () => onNavigate('/'));
  buttonLogout.textContent = 'Cerrar sesión';

  homeSection.appendChild(headerSection);
  homeSection.appendChild(postForm);
  headerSection.append(welcomeTitle, buttonLogout);
  btnContainerHome.append(buttonPublicar, buttonCancelar);
  postForm.append(postMessage, btnContainerHome);
  postForm.append(containerNewPost);

  return homeSection;
};

export default Home;
