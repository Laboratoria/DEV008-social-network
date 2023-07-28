export const feed = (onNavigate) => {
    const homeDiv = document.createElement('div');

    const buttonCerrarSesion = document.createElement('button');
    buttonCerrarSesion.className = "button";
    buttonCerrarSesion.textContent = 'Cerrar sesion';
    homeDiv.appendChild(buttonCerrarSesion);

    const contenedorLogoChico = document.createElement('div');
    contenedorLogoChico.className= "contenedorLogoChico";
    homeDiv.appendChild(contenedorLogoChico);

    const logoChico = document.createElement('img');
    logoChico.src = '../logo.png';
    logoChico.className = "logoChico";
    homeDiv.appendChild(logoChico);

    const inputBuscador = document.createElement('input');
    inputBuscador.placeholder = 'Buscar por palabra';
    inputBuscador.classList.add('input');
    inputBuscador.id = 'buscador';
    homeDiv.appendChild(inputBuscador);

    const contenedorPublicacion = document.createElement('div');
    contenedorPublicacion.className = "contenedorPublicacion";
    homeDiv.appendChild(contenedorPublicacion);

    const inputPublicar = document.createElement('input');
    inputPublicar.placeholder = 'Publica algo aquí';
    inputPublicar.classList.add('input');
    inputPublicar.id = 'publicar';
    homeDiv.appendChild(inputPublicar);

    const buttonPublicar = document.createElement('button');
    buttonPublicar.className = "button";
    buttonPublicar.textContent = 'Publicar';
    homeDiv.appendChild(buttonPublicar);



    buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));
    
    return homeDiv;
};