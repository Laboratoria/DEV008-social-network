import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc , updateDoc, arrayUnion, arrayRemove} from 'firebase/firestore';
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
  const referenciaDocumento = doc(db, 'Posts', id);
  return deleteDoc(referenciaDocumento);
}

export function incrementarLike(postId,userId){
const referenciaDocumento = doc(db, 'Posts', postId);
return updateDoc(referenciaDocumento, {likes: arrayUnion(userId)})
}


export function decrementarLike(userId,postId){
  const referenciaDocumento = doc(db, 'Posts', postId);
  return updateDoc(referenciaDocumento, {likes: arrayRemove(userId)})
}


export function obtenerDocumento (id){
  const referenciaDocumento = doc(db, 'Posts', id);
  return getDoc(referenciaDocumento)
};


//hacer el listener para el agregar y quitar like
//luego el usuario en localstorage

export function editPost (id, contenidoEditado) {
  const referenciaDocumento = doc(db, 'Posts', id);
  return updateDoc (referenciaDocumento, {contenido: (contenidoEditado)})
}