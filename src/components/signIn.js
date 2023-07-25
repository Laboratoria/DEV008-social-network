export const signIn = (onNavigate) => {
  // Aquí se crean los elementos de HTML

  const homeDiv = document.createElement('div');
  const signUpButton = document.createElement('button');
  const signInButton = document.createElement('button');
  const googleButton = document.createElement('button');

  const description = document.createElement('p');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const dontYouHaveAnAccount = document.createElement('p');

  // Se inserta el nombre a los elementos creados
  googleButton.textContent = 'Acceder con Google';
  dontYouHaveAnAccount.textContent = '¿No tienes una cuenta?';
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Contraseña';

  description.textContent = '"Únete a nuestra red de apoyo y reduce el derroche alimentario."';
  signUpButton.textContent = 'Registrate';
  signInButton.textContent = 'Inicia sesión';

  // Se crean los eventos que permitiran la navegación
  signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });

  signInButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  // Se insertan los hijos
  homeDiv.appendChild(description);
  homeDiv.appendChild(email);
  homeDiv.appendChild(password);
  homeDiv.appendChild(signInButton);
  homeDiv.appendChild(googleButton);
  homeDiv.appendChild(dontYouHaveAnAccount);
  homeDiv.appendChild(signUpButton);

  return homeDiv;
};
