import { loginWithGoogle, loginWithPassword } from './login.controller';

const login = {
  loadHTML: () => `
  <div class="l-div">
    <div class="l-container">
        <div class="l-container-login">
            <p class="text-title">Inicia sesión</p>
            <div id="btnLoginGoogle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA500" width="30" height="30" viewBox="0 0 64 64">
                    <path
                        d="M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z" />
                </svg>
            </div>
            <p class="text-small">O con tu cuenta</p>
            <form id="formLogin">
            <div class="l-input-with-icon">
                <input type="email" required id="iptEmail" placeholder="Correo electrónico">
                <i class="fas fa-user"></i>
            </div>
            <div class="l-input-with-icon">
                <input type="password" required id="iptPassword"  placeholder="Contraseña">
                <i class="fas fa-lock"></i>
            </div>
            <div>

                <button id="btnLoginPassword" class="l-button-login">Ingresar</button>
                <p id="messageError" style="display: none"> Usuario/contraseña son invalidos</p>
                <p class="text-small">¿No tienes cuenta?
                    <span class="text-color-orange manita" id="spnNuevaCuenta">Crea una aquí</span>
                </p>
            </div>
            </form>
            
        </div>
        
        <div class="l-container-informacion">
            <p class="text-title text-color-white">Bienvenidos a:</p>
            <img src="./../../img/logo.png" alt="">
            <p class="text-color-white">Somos un espacio en donde podras consultar o publicar información acerca de
                nuestros amigos de 4 patitas
            </p>
        </div>
    </div>
</div>`,

  loadEvents: () => {
    /* -------------------------- Navegacion a register ------------------------- */
    document.getElementById('spnNuevaCuenta').addEventListener('click', () => {
      window.history.pushState({}, '', `${window.location.origin}/register`);
      /* ----- Dispara manualmente el evento popstate para actualizar la ruta ----- */
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    /* ----------------------------- Inniciar sesion con google---------------------------- */
    document.getElementById('btnLoginGoogle').addEventListener('click', async () => {
      document.getElementById('btnLoginGoogle').disabled = true;
      // Inicio de sesion con google
      loginWithGoogle()
        .then(() => {
          //  Redireccionamiento del usuario al feeds
          window.history.pushState({}, '', `${window.location.origin}/feed`);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }).catch(() => {
          document.getElementById('messageError').style.display = 'block';
        });
    });

    /* ----------------- inciar sesion con usuario y contraseña ----------------- */

    document.getElementById('formLogin').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('iptEmail').value;
      const password = document.getElementById('iptPassword').value;

      loginWithPassword(email, password)
        .then(() => {
          //  Redireccionamiento del usuario al feeds
          window.history.pushState({}, '', `${window.location.origin}/feed`);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }).catch(() => {
          document.getElementById('messageError').style.display = 'block';
        });
    });

    function ocultarError() {
      document.getElementById('messageError').style.display = 'none';
    }
    document.getElementById('iptEmail').addEventListener('focus', ocultarError);
    document.getElementById('iptPassword').addEventListener('focus', ocultarError);
  },
};
export default login;
