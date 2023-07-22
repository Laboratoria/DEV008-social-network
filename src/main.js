//rauter , gestiona las rutas
import { signIn } from './components/signIn';
import { signUp } from './components/signUp';
import { wall } from './components/wall';

const rootDiv = document.getElementById('root');
//funciones a ejecutar por elección del usuario
const routes = {
  '/': signIn,
  '/signup': signUp,
  '/wall': wall,
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  //while se utiliza si tengo que remover mas de un hijo
  // while (rootDiv.firstChild) {
  rootDiv.removeChild(rootDiv.firstChild); 
  // }

  rootDiv.appendChild(routes[pathname](onNavigate));
};
//Selecciona pagina o componente para mostrarlo dependiendo URL
const component = routes[window.location.pathname];
console.log(window.location.pathname);
//Recuperar las paginas cuando selecciono hacia atras o hacia adelante del historial(las saca del historial)
window.addEventListener('popstate', () =>{
  const paginas = routes[window.location.pathname];
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(paginas(onNavigate));
  console.log(window.location.pathname) 
  
});
 //Agrega el componente a la pantalla
rootDiv.appendChild(component(onNavigate));
