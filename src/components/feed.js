export const feed = (onNavigate) => {
    const homeDiv = document.createElement('div');

    const buttonCerrarSesion = document.createElement('button');
    buttonCerrarSesion.className = "button";
    buttonCerrarSesion.textContent = 'Cerrar sesion';
    homeDiv.appendChild(buttonCerrarSesion);

    buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));
    
    return homeDiv;
};