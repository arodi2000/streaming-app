<template>
  <div>
    <h2>Bienvenido a tu plataforma</h2>
    <p>El sistema de streaming está listo para recibir contenido.</p>
    
    <div style="display: flex; gap: 20px; overflow-x: auto; padding: 20px 0;">
      <div v-for="i in 5" :key="i" 
           style="min-width: 200px; height: 300px; background: #333; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
        Película {{ i }}
      </div>
    </div>
  </div>
</template>