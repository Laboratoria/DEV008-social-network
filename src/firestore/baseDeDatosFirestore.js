import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
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
