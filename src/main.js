import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js';
// rauter , gestiona las rutas
import { signIn } from './components/signIn';
import { signUp } from './components/signUp';
import { wall } from './components/wall';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhmNVMP2orY3iOmOT6DdaVABzLyzydVLY',
  authDomain: 'redis-ccc00.firebaseapp.com',
  projectId: 'redis-ccc00',
  storageBucket: 'redis-ccc00.appspot.com',
  messagingSenderId: '718676390172',
  appId: '1:718676390172:web:516edc445106e832a98ad9',
  measurementId: 'G-JQF50P4QXX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootDiv = document.getElementById('root');
// funciones a ejecutar por elección del usuario
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
window.addEventListener('popstate', () => {
  const paginas = routes[window.location.pathname];
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(paginas(onNavigate));
  console.log(window.location.pathname);
});
//Agrega el componente a la pantalla
rootDiv.appendChild(component(onNavigate));
