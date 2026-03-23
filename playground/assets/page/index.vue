<template>
  <div class="main-content">
    <section class="hero">
      <h1>Películas Tendencia</h1>
    </section>

    <div class="carousel-container">
      <h2>Mi Lista</h2>
      <div class="carousel">
        <div v-for="i in 10" :key="i" class="movie-card">
          <img :src="`https://picsum.photos/200/300?random=${i}`" alt="Pelicula">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content { padding-top: 100px; }
.carousel-container { padding: 20px 50px; }
.carousel {
  display: flex;
  gap: 15px;
  overflow-x: scroll; /* Carrusel manual con scroll */
  padding: 20px 0;
}
.carousel::-webkit-scrollbar { display: none; } /* Oculta la barra de scroll */
.movie-card img { width: 200px; border-radius: 5px; }
</style>