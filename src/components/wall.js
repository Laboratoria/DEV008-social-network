export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const signOutButton = document.createElement('button');
  const postButton = document.createElement('button');

  postButton.textContent = 'Publicar';
  signOutButton.textContent = 'Cerrar sesión';
  

  signOutButton.addEventListener('click',() => {
    onNavigate('/')
  });

  wallDiv.appendChild(postButton);
  wallDiv.appendChild(signOutButton);

  return wallDiv;
};
