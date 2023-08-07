import logo from "../imagenes/elq.png"
export default () => {
  const viewiniciodeSesion = `
    <h2 class="tex-center">Inicio de sesión </h2>
    <figure>
    <img src="${logo}">
    </figure>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewiniciodeSesion;
  return divElem;
};
