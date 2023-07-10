import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  setDoc, doc, collection, onSnapshot, addDoc, getDocs, query, orderBy, where,
} from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import { auth, googleProvider, db } from './config.js';

export const signUp = async (user) => {
  try {
    const firebaseUser = await createUserWithEmailAndPassword(auth, user.email, user.password);

    await setDoc(doc(db, 'users', firebaseUser.user.uid), {
      first_name: user.name,
      last_name: user.lastName,
      username: user.username,
      email: user.email,
    });
    window.location.assign('/login');
    window.alert('Registro exitoso');
  } catch (error) {
    console.log({ error });
  }
};

export const getUser = async (email) => new Promise((resolve, reject) => {
  const user = [];
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', email));
  getDocs(q)
    .then((querySnapshot) => {
      querySnapshot.forEach(() => {
        user.push(doc.data());
        return doc.data();
      });
      console.log(user);
      resolve(user[0]);
    }).catch((error) => {
      reject(error);
    });
});

export const signInGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const userRegistered = await getUser(result.user.email);
    if (!userRegistered) {
      alert('No tienes cuenta con nosotras, por favor registrate');
      window.location.assign('/register');
    } else {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      //    const user = result.user;
      console.log(
        'Este usuario se logueo con google',
        credential,
        'y el token',
        token,
      );

      localStorage.setItem('userCredentials', JSON.stringify(result));
      window.location.assign('/feed');
      window.alert('Ingreso Exitoso');
    }
  } catch (error) {
    console.error(error);
  }
};

// SignIn
export const signIn = (user) => {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      localStorage.setItem('userCredentials', JSON.stringify(userCredential));
      window.location.assign('/feed');
      window.alert('Ingreso Exitoso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// Creacion de un post
export function addPostToFeed(id, content, container, name) {
  const timelinePostsContainer = document.createElement('div');
  const userPublishedPost = document.createElement('div');
  userPublishedPost.className = 'user-published-post';
  timelinePostsContainer.appendChild(userPublishedPost);

  const userPublishedPostDiv = document.createElement('div');
  userPublishedPostDiv.className = 'user-published-post-div';
  userPublishedPost.appendChild(userPublishedPostDiv);

  const userPublishedPostContent = document.createElement('div');
  userPublishedPostContent.className = 'user-published-post-content';
  userPublishedPostDiv.appendChild(userPublishedPostContent);

  const conversationImg3 = document.createElement('img');
  conversationImg3.className = 'conversation-img colorlightblue';
  conversationImg3.src = 'img/istockphoto-1323400501-612x612.jpg';
  userPublishedPostContent.appendChild(conversationImg3);

  const userPublishedPostTextContent = document.createElement('div');
  userPublishedPostTextContent.className = 'user-published-post-text-content';
  userPublishedPostContent.appendChild(userPublishedPostTextContent);

  const userPublishedPostTitle = document.createElement('p');
  userPublishedPostTitle.className = 'user-published-post-title';
  userPublishedPostTitle.textContent = name;
  userPublishedPostTextContent.appendChild(userPublishedPostTitle);

  const userPublishedPostText = document.createElement('p');
  userPublishedPostText.className = 'user-published-post-text';
  userPublishedPostText.textContent = content;
  userPublishedPostTextContent.appendChild(userPublishedPostText);

  const userPublishedPostActions = document.createElement('div');
  userPublishedPostActions.className = 'user-published-post-actions';
  userPublishedPostDiv.appendChild(userPublishedPostActions);

  const messagesIcon3 = document.createElement('img');
  messagesIcon3.className = 'messages-icon';
  messagesIcon3.src = 'img/chat-svgrepo-com.svg';
  messagesIcon3.alt = 'message-icon-for-comment';
  userPublishedPostActions.appendChild(messagesIcon3);

  const heartIcon3 = document.createElement('img');
  heartIcon3.className = 'heart-icon';
  heartIcon3.src = 'img/heart-svgrepo-com.svg';
  heartIcon3.alt = 'heart-icon-for-likes';
  userPublishedPostActions.appendChild(heartIcon3);

  container.prepend(timelinePostsContainer);

  onSnapshot(doc(db, 'post', id), (snapshotDoc) => {
    const updatedPost = snapshotDoc.data();
    userPublishedPostText.textContent = updatedPost.text;
  });
}

export const savePost = async (text, name) => (

  addDoc(collection(db, 'post'), {
    text,
    name,
    timeline: Date.now(),
  })
);

export const showPosts = async () => getDocs(query(collection(db, 'post'), orderBy('timeline', 'asc')));

export {
  onSnapshot,
};

// export const resetPassword = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then((userEmail) => {
//       console.log('se envio un correo para cambiar contraseña!');

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);

//       return error;
//     });
// };
