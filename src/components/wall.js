import { savePosts, getPosts, getCurrentUser, deletePost } from './firebase.js';

export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const allPosts = document.createElement('div');
  const containerPosts = document.createElement('div');
  containerPosts.classList.add('containerPosts');
  const signOutButton = document.createElement('button');
  const postButton = document.createElement('button');
  postButton.classList.add('postButton');
  const post = document.createElement('textarea');
  post.classList.add('post');
  allPosts.classList.add('allPosts');
  const header = document.createElement('header');
  header.classList.add('header');

  post.placeholder = 'Escribe tu publicación';
  post.rows = '4';
  postButton.textContent = 'Publicar';
  signOutButton.textContent = 'Cerrar sesión';

  allPosts.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    savePosts(post.value, user.email).then(() => {
      allPosts.reset();
      window.location.reload();
      console.log(allPosts);
    });
  });
  getPosts().then((posts) => {
    posts.forEach((doc) => {
      const data = doc.data();
      const user = getCurrentUser();

      if (data.correo === user.email) {
        containerPosts.innerHTML += `
        <div class = 'card1'> </div>
        <div class = 'card'>

        <p>${data.post}<p>
        <button class = 'btn-delete' data-id='${doc.id}'> Eliminar </button>

        </div>
        `;
      } else {
        containerPosts.innerHTML += `
        <div class = 'card1'> </div>
        <div class = 'card'>
        <p>${data.post}<p>
        </div>

        `;
      }
      const btnsDelete = containerPosts.querySelectorAll('.btn-delete');
     

      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id).then(() => {
            window.location.reload();
          });
        });
      });
      console.log(btnsDelete);
      // console.log(data);
    });
    // console.log(posts);
  });

  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });
  wallDiv.appendChild(header);

  allPosts.append(post, postButton);
  wallDiv.appendChild(allPosts);
  wallDiv.appendChild(containerPosts);
  wallDiv.appendChild(signOutButton);

  return wallDiv;
};
