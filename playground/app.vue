<template>
  <div>
    <nav class="navbar">
      <div class="logo">PRÍNCIPE STREAMING</div>
      <div class="menu">
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/login" class="btn-primary">Entrar</NuxtLink>
      </div>
    </nav>

    <NuxtPage />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  position: fixed;
  width: 100%;
  z-index: 100;
}
.logo { color: #e50914; font-size: 1.8rem; font-weight: bold; }
.menu a { color: white; text-decoration: none; margin-left: 20px; }
</style>