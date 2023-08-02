import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import error from './components/Error';
import { escribirDatosUsuarios } from './lib/firebase/firebaseconfig';
import { async } from 'regenerator-runtime';

const routes = [
  { path: '/', component: Login },
  { path: '/Home', component: Home },
  { path: '/Register', component: Register },
  { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

document.getElementById('publishValue').addEventListener('click', async () => {
  const textValue = document.getElementById('inputValue').value;
  if (textValue.length !== 0) {
    await escribirDatosUsuarios({ texto: textValue });
  }
});


