import {
  savePosts,
  getPosts,
  getCurrentUser,
  deletePost,
  getPost,
} from './firebase.js';

export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const allPosts = document.createElement('form');
  const containerPosts = document.createElement('div');
  containerPosts.classList.add('containerPosts');
  const signOutButton = document.createElement('button');
  signOutButton.classList.add('signOutButton');
  const postButton = document.createElement('button');
  postButton.classList.add('postButton');
  const post = document.createElement('textarea');
  post.classList.add('post');
  allPosts.classList.add('allPosts');
  const header = document.createElement('header');
  header.classList.add('header');
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '../image/unnamed.png';

  post.placeholder = '¿Qué vas hay de comer hoy?';
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
        <div class = 'card1'>
        ${data.correo}   </div>
       
        <div class = 'card'>
        <p>${data.post}<p>
        <button class = 'btn-delete' data-id='${doc.id}'> Eliminar </button>
      
        </div>
        `;
      } else {
        containerPosts.innerHTML += `
        <div class = 'card1'>
        ${data.correo} </div>
        
        <div class = 'card'>
        <p>${data.post}<p>
        </div>
        `;
        console.log(user.email);
      }

      const btnsDelete = containerPosts.querySelectorAll('.btn-delete');

      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id).then(() => {
            window.location.reload();
          });
        });
      });
      const btnEdit = containerPosts.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          getPost(dataset.id).then(() => {
            post.value = data.post;
            console.log(data);
          });
        });
      });
      // console.log(btnsDelete);
      // console.log(data);
    });
    // console.log(posts);
  });

  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });

  header.appendChild(logo);
  wallDiv.appendChild(header);

  allPosts.append(post, postButton);
  wallDiv.appendChild(allPosts);
  wallDiv.appendChild(containerPosts);
  wallDiv.appendChild(signOutButton);

  return wallDiv;
};
