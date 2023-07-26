import { savePosts, getPosts } from './firebase.js';

export const wall = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const signOutButton = document.createElement('button');
  const postButton = document.createElement('button');
  const post = document.createElement('textarea');

  post.placeholder = 'Escribe tu publicación';
  post.rows = '4';
  postButton.textContent = 'Publicar';
  signOutButton.textContent = 'Cerrar sesión';

  allPosts.addEventListener('submit', (e) => {
    e.preventDefault();
    savePosts(post.value);
  });
  getPosts();
  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.appendChild(postButton);
  homeDiv.appendChild(signOutButton);

  return wallDiv;
};
