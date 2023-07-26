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
  dontYouHaveAnAccount.classList.add("dontYouHaceAnAccount")
  const signUpButton = document.createElement('button');

  // Se inserta el nombre a los elementos creados
  description.textContent = "Únete a nuestra red de apoyo y reduce el derroche alimentario.";
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Contraseña';
  signInButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Acceder con Google';
  dontYouHaveAnAccount.textContent = '¿No tienes una cuenta?';
  signUpButton.textContent = 'Registrate';

  // Se crean los eventos que permitiran la navegación
  signInButton.addEventListener('click', () => {
    onNavigate('/wall');
  });
  signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
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
