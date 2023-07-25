export const feed = (onNavigate) => {
    const homeDiv = document.createElement('div');

    const buttonCerrarSesion = document.createElement('button');
    buttonCerrarSesion.classList.add('button');
    buttonCerrarSesion.textContent = 'Cerrar';
    homeDiv.appendChild(buttonCerrarSesion);

    
    buttonCerrarSesion.addEventListener('click', () => onNavigate('/'));
    
    return homeDiv;
};