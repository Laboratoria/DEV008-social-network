import { home } from "./components/Home.js";
import { register } from "./components/Regis.js";
import { login } from "./components/Login.js";

const rootDiv = document.getElementById('root');
const routes = {
  '/': home,
  '/register': register,
  '/ login': login,
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());