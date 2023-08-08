export function guardarUsuarioActual(user) {
  return localStorage.setItem('usuarioActual', JSON.stringify(user));
}

export function obtenerUsuarioActual() {
  const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
  return usuarioActual;
}

export function eliminarUsuarioActual() {
  localStorage.removeItem('usuarioActual');
}
