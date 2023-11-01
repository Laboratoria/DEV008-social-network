import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider, getAuth, signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore, doc, addDoc, collection, query, orderBy, getDocs, deleteDoc,
} from 'firebase/firestore';

// Configuración de Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyDvAiTov1h1P4refJwXUEuIuxAHwEiXJvU',
  authDomain: 'instapet-rs9.firebaseapp.com',
  projectId: 'instapet-rs9',
  storageBucket: 'instapet-rs9.appspot.com',
  messagingSenderId: '20626526101',
  appId: '1:20626526101:web:f0f2fbdc4f69aa5164709c',
  measurementId: 'G-NPGVFY50GP',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function googleLogin() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

const firestore = getFirestore(app);

export const escribirDatosUsuarios = (texto, email) => {
  console.log(email);
  addDoc(collection(firestore, 'publicaciones'), {
    texto,
    user: email,
    createdAt: Date.now(),
    likes: [],
  });
  console.log('Document successfully written!');
};

export const subscribeToDataChanges = (actualizarFeed) => (query(collection(firestore, 'publicaciones'), orderBy('createdAt', 'asc')), (snapshot) => {
  const data = [];
  snapshot.forEach((post) => {
    data.push({
      id: post.id,
      ...post.data(),
    });
  });
  console.log(data);
  actualizarFeed(data);
});

export const getPost = async () => {
  const dataPost = [];
  const q = query(collection(firestore, 'publicaciones'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((post) => {
  // doc.data() is never undefined for query doc snapshots
    dataPost.push({ ...post.data(), id: post.id });
  });
  return dataPost;
};

// Obtén el perfil de un usuario

export const getCurrentUser = () => auth.currentUser;

// Eliminar post

export const deletePost = (id) => deleteDoc(doc(firestore, 'publicaciones', id));
