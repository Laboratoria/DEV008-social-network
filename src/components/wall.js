export const wall = () => {
  const homeDiv = document.createElement('div');
  const signOutButton = document.createElement('button');

  signOutButton.textContent = 'Cerrar sesión';

  homeDiv.appendChild(signOutButton);

  return homeDiv;
};
