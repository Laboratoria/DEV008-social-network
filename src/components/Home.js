const Home = (onNavigate) => {
  const homeSection = document.createElement('section');
  homeSection.classList.add('contenedorHome');
  homeSection.classList.add('flex2');

  const headerSection = document.createElement('div');

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = 'Instapet';

  const postForm = document.createElement('form');
  postForm.classList.add('post-form');
  postForm.classList.add('flex');

  const postMessage = document.createElement('input');
  postMessage.setAttribute('type', 'textarea');
  postMessage.setAttribute('placeholder', '¿Miau, Woaw, Pio?');

  const buttonPublicar = document.createElement('button');
  buttonPublicar.textContent = 'Publicar';
  buttonPublicar.classList.add('btn');
  // aqui debemos poner la funcion que guarde lo que se escribio y que se muestre en el texarea
  // igualmente esta funcion debe hacer el boton cambie por el boton editar

  const buttonEditar = document.createElement('button');
  buttonEditar.textContent = 'Editar';
  buttonEditar.classList.add('btn');

  const buttonLogout = document.createElement('button');
  buttonLogout.classList.add('btn');
  buttonLogout.addEventListener('click', () => onNavigate('/'));
  buttonLogout.textContent = 'Cerrar sesión';

  homeSection.appendChild(headerSection);
  homeSection.appendChild(postForm);
  headerSection.append(welcomeTitle, buttonLogout);
  postForm.append(postMessage, buttonPublicar, buttonEditar);

  return homeSection;
};

export default Home;
