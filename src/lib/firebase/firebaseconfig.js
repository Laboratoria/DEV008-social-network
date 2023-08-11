/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  EmailAuthCredential,
  EmailAuthProvider,
  GoogleAuthProvider, getAuth, signInWithPopup,
} from 'firebase/auth';
// Required for side-effects
import {
  getFirestore, addDoc, collection, onSnapshot, doc, query, orderBy, getDocs,
} from 'firebase/firestore';
import { async } from 'regenerator-runtime';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export const escribirDatosUsuarios = async ( author, texto ) => {
  // Add a new document in collection "cities"
  // try {
  // const docRef =
    await addDoc(collection(firestore, 'publicaciones'), {
      texto: texto,
      createdAt: Date.now(),
      author: author, // Le asignamos el autor al post
      likes: [],
    });
    console.log('Document successfully written!');
  // } catch (error) {
  //   console.error('Error writing document: ', error);
  // }
};


//Post en tiempo real 
// const unsub = onSnapshot(doc(firestore, "publicaciones"), (doc) => {
//   const source = doc.metadata.hasPendingWrites ? "Local" : "Server" ;
//     console.log(source, "data", doc.data());
//     console.log("Current data: ", doc.data());
// });


// Crear cada post//

export const subscribeToDataChanges = (actualizarFeed) => (query(collection(firestore, 'publicaciones'), orderBy('createdAt', 'asc')), (snapshot) => {
  const data = [];
  snapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(data)
  actualizarFeed(data);
});

export const getPost = async () => {
  const dataPost = [];
  const q = query(collection(firestore, "publicaciones"));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  dataPost.push({...doc.data(), id: doc.id});
}); 
return dataPost
}

//Obtén el perfil de un usuario

export const getCurrentUser = () => auth.currentUser;
