import { signIn } from './components/signIn';
import { signUp } from './components/signUp';
import { wall } from './components/wall';

const rootDiv = document.getElementById('root');

const routes = {
  '/': signIn,
  '/signup': signUp,
  '/wall': wall,
};
const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.appendChild(routes[pathname](onNavigate));

};
//
const component = routes[window.location.pathname];
rootDiv.appendChild(component(onNavigate));
