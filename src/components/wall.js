export const wall = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signOutButton = document.createElement('button');
  const postButton = document.createElement('button');

  postButton.textContent = 'Publicar';
  signOutButton.textContent = 'Cerrar sesión';
  

  signOutButton.addEventListener('click',() => {
    onNavigate('/')
  });

  homeDiv.appendChild(postButton);
  homeDiv.appendChild(signOutButton);

  return homeDiv;
};
