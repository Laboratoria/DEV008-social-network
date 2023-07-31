import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { app} from "../lib/firebase/configuracionFirabase";


const db = getFirestore(app);

export function crearPost(user_autor, user_contenido, fecha_hoy) {
    const referenciaColeccion = collection(db,'Posts');
    const datosPost = { autor: user_autor,  contenido: user_contenido, fecha: fecha_hoy, likes: []}
    return addDoc(referenciaColeccion, datosPost); 
};




// esto debe vivir en feed: 

// .....addEventListener("click", () => {
    // ... 
    //crearPost(user.id, text.value, Date.now()).then(() => { //refrescar la vista  })
//})


// mostrarpost().then((posts)=> { ..... for...})

//siguiente: mostrar post
// miFuncion() {
// return getDocs(referenciaColleccion)
//}