import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { app} from "../lib/firebase/configuracionFirabase";

const db = getFirestore(app);

export function crearPost(userAutor, userContenido, fechaHoy) {
  const referenciaColeccion = collection(db, 'Posts');
  const datosPost = { autor: userAutor, contenido: userContenido, fecha: fechaHoy, likes: []}
  return addDoc(referenciaColeccion, datosPost);
}
