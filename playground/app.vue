<template>
  <div>
    <header class="navbar">
      <h1 style="color: #e50914;">STREAMING APP</h1>
      <nav>
        <NuxtLink to="/" style="color: white; margin-right: 20px; text-decoration: none;">Inicio</NuxtLink>
        <NuxtLink to="/login" class="btn-primary">Entrar</NuxtLink>
      </nav>
    </header>

    <main style="padding: 50px; text-align: center;">
      <NuxtPage />
    </main>
  </div>
</template>