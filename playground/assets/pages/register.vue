<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Crear Cuenta</h2>
      <input type="text" placeholder="Nombre de usuario">
      <input type="email" placeholder="Correo electrónico">
      <input type="password" placeholder="Contraseña">
      <button class="btn-primary">Registrarse</button>
      <p>¿Ya tienes cuenta? <NuxtLink to="/login">Inicia sesión</NuxtLink></p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/background-net.jpg') no-repeat center center/cover;
}
.auth-card {
  background: rgba(0, 0, 0, 0.75);
  padding: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input { padding: 12px; border-radius: 4px; border: none; background: #333; color: white; }
</style>