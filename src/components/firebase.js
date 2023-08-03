import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhmNVMP2orY3iOmOT6DdaVABzLyzydVLY',
  authDomain: 'redis-ccc00.firebaseapp.com',
  projectId: 'redis-ccc00',
  storageBucket: 'redis-ccc00.appspot.com',
  messagingSenderId: '718676390172',
  appId: '1:718676390172:web:516edc445106e832a98ad9',
  measurementId: 'G-JQF50P4QXX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const createCountEmailPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const googleLogin = () => {
  signInWithPopup(auth, provider);
};
export const savePosts = (post, correo) =>
  addDoc(collection(db, 'posts'), { post, correo });
export const getPosts = () => getDocs(collection(db, 'posts'));
export const getCurrentUser = () => auth.currentUser;
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const singInEmailPass = (email, password) =>
signInWithEmailAndPassword(auth, email, password);
