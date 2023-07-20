export const signIn = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signUpButton = document.createElement('button');
  const signInButton = document.createElement('button');
  const googleButton = document.createElement('button');
  // <p>"Únete a nuestra red de apoyo y reduce el derroche alimentario."<p/>
  const infoPagina = document.createElement('p');
  const lema = document.createElement('h4');
  const correoElectronico = document.createElement('input');
  const contrasena = document.createElement('input');
  const pregunta = document.createElement('p');

  googleButton.textContent = 'Acceder con Google';
  pregunta.textContent = '¿No tienes una cuenta?';
  correoElectronico.placeholder = 'Correo Electrónico';
  contrasena.placeholder = 'Contraseña';
  lema.textContent = '¡Donde come uno, comen dos!';
  infoPagina.textContent = '"Únete a nuestra red de apoyo y reduce el derroche alimentario."';
  signUpButton.textContent = 'Registrate';
  signInButton.textContent = 'Inicia Sesión';

  signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });

  signInButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  homeDiv.appendChild(infoPagina);
  homeDiv.appendChild(lema);
  homeDiv.appendChild(correoElectronico);
  homeDiv.appendChild(contrasena);
  homeDiv.appendChild(signInButton);
  homeDiv.appendChild(googleButton);
  homeDiv.appendChild(pregunta);
  homeDiv.appendChild(signUpButton);

  return homeDiv;
};
