import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc , updateDoc, arrayUnion} from 'firebase/firestore';
import { app } from '../lib/firebase/configuracionFirabase';

const db = getFirestore(app);

export function crearPost(userAutor, userContenido, fechaHoy) {
  const referenciaColeccion = collection(db, 'Posts');
  console.log(referenciaColeccion);
  const datosPost = {
    autor: userAutor,
    contenido: userContenido,
    fecha: fechaHoy,
    likes: [],
  };
  console.log(datosPost);
  return addDoc(referenciaColeccion, datosPost);
}

export function mostrarpost() {
  const referenciaColeccion = collection(db, 'Posts');
  return getDocs(referenciaColeccion);
}

export function borrarPost(id) {
  return deleteDoc(doc(db, 'Posts', id));
}

export function incrementarLike(postId,userId){
//const agregar = FieldValue.arrayUnion.increment(1);
const referenciaDocumento = doc(db, 'Posts', postId);
return referenciaDocumento.updateDoc({likes:FieldValue.arrayUnion(userId)});
}

/*export function agregarLike(userId,postId){
  const referenciaDocumento = doc(db, 'Posts', postId);
 console.log()
  return updateDoc(referenciaDocumento, {likes: arrayUnion(userId)})
};*/


export function decrementarLike(){
  const quitar = firebase.firestore.FieldValue.increment(-1);
  const referenciaDocumento = doc(db, 'Posts', postId);
  referenciaDocumento.update({ likes: quitar});
}



/*
export function quitarLike(userId,postId){
  const referenciaDocumento = doc(db, 'Posts', postId);
  return setDoc(referenciaDocumento, {likes: arrayRemove(userId)})
};

export function obtenerDocumento (id){
  const referenciaDocumento = doc(db, 'Posts', id);
  return getDoc(referenciaDocumento)
};*/


//hacer el listener para el agregar y quitar like
//luego el usuario en localstorage
