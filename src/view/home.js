/* eslint-disable semi */
export default () => {
  const viewHome = `
  <!-- Barra de navegación -->
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">LabsConnect</a>
    </div>
    <div class="navbar-links">
      <a href="#signinModal" data-modal-target="#signinModal">Sign in</a>
      <a href="#signupModal" data-modal-target="#signupModal">Sign up</a>
      <a href="#" id="logout" class="logged-in">Log out</a>
    </div>
  </nav>

<!-- Modal de Sign in -->
<div id="signinModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Sign in</h2>
      <form id="signinForm">
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" class="form-control mb-3" placeholder="Email" required>
  
        <label for="login-password">Password:</label>
        <input type="password" id="login-password" class="form-control mb-3" placeholder="******" required>
  
        <button type="submit" class="btn-submit">Login</button>
      </form>
    </div>
  </div>
  
  <!-- Modal de Sign up -->
<div id="signupModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Sign up</h2>
      <form id="signupForm">
        <label for="signup-email">Email:</label>
        <input type="email" id="signup-email" class="form-control mb-3" placeholder="Email" required>
  
        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password" class="form-control mb-3" placeholder="******" required>
  
        <button type="submit" class="btn-submit">Register</button>
      </form>
    </div>
  </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
}
