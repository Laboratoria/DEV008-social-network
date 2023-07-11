const Login = (navigateTo) => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Hola Soy el Login de vuelta';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => {
    navigateTo('/');
  });

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

export default Login;
