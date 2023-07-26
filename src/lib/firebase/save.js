function save() {
  db.collection('users').add({
    first: registerForm.setAttribute('id', 'Registro'),
    last: 'Lovelace',
  })
    .then((docRef) => {
      alert('Registro éxitoso');
    })
    .catch((error) => {
      alert('Error en el registro');
    });
}

db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
