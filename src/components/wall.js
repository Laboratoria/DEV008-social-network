export const wall = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signOutButton = document.createElement('button');
  const publicarButton = document.createElement('button');

  publicarButton.textContent = 'Publicar';
  signOutButton.textContent = 'Cerrar sesión';
  

  signOutButton.addEventListener('click',() => {
    onNavigate('/')
  });

  homeDiv.appendChild(publicarButton);
  homeDiv.appendChild(signOutButton);

  return homeDiv;
};
