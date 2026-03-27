<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h1>Iniciar Sesión</h1>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <input type="email" placeholder="Correo electrónico" required>
        </div>
        
        <div class="input-group">
          <input type="password" placeholder="Contraseña" required>
        </div>

        <button type="submit" class="btn-login">
          Iniciar Sesión
        </button>

        <div class="options">
          <label><input type="checkbox"> Recuérdame</label>
          <a href="#">¿Necesitas ayuda?</a>
        </div>
      </form>

      <div class="footer-card">
        <p>¿Primera vez en la plataforma? 
          <NuxtLink to="/register">Suscríbete ahora</NuxtLink>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogin = () => {
  console.log("Iniciando sesión...");
  // Aquí irá tu lógica de Firebase o Supabase después
}
</script>

<style scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Puedes poner una imagen de fondo de películas aquí */
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
              url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8cf141a/mexico/MX-es-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-size: cover;
}

.login-card {
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  border-radius: 4px;
  width: 100%;
  max-width: 450px;
}

h1 { color: #fff; margin-bottom: 28px; font-size: 32px; }

.login-form { display: flex; flex-direction: column; gap: 16px; }

.input-group input {
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  border: none;
  background: #333;
  color: white;
  font-size: 16px;
  box-sizing: border-box;
}

/* BOTÓN ESTILO STREAMING */
.btn-login {
  background-color: #e50914;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 24px;
  transition: background 0.2s ease;
}

.btn-login:hover {
  background-color: #c11119;
}

.options {
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 13px;
  margin-top: 10px;
}

.footer-card {
  margin-top: 40px;
  color: #737373;
}

.footer-card a {
  color: #fff;
  text-decoration: none;
}

.footer-card a:hover {
  text-decoration: underline;
}
</style>