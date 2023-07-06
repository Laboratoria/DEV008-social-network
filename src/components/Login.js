export const login = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Hola de vuelta'
    const buttonHome = document.createElement ('button');
    buttonHome.textContent = 'Regresar al Home';

    homeDiv.appendChild(buttonHome);

    return homeDiv;
};