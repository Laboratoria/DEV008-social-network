export const register = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Bienvenido a InstaPet'
    const buttonHome = document.createElement ('button');
    buttonHome.textContent = 'Regresar al Home';

    homeDiv.appendChild(buttonHome);

    return homeDiv;
};
