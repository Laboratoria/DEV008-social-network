export const signIn = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signUpButton = document.createElement('button');
  const signInButton = document.createElement('button');

  signUpButton.textContent = 'Registrate';
  signInButton.textContent = 'Inicia Sesión';

  signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });

  homeDiv.appendChild(signUpButton);
  homeDiv.appendChild(signInButton);
  return homeDiv;
};
