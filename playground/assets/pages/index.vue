<template>
  <div class="streaming-container">
    <header class="navbar">
      <div class="logo">STREAMING</div>
      <nav>
        <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
        <NuxtLink to="/login" class="btn-login">Entrar</NuxtLink>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>CATÁLOGOS</h1>
        <p>Tu poder no tiene límites, tu catálogo tampoco.</p>
      </div>
    </section>

    <div class="catalog">
      <h2 class="section-title">Tendencias para Ti</h2>
      
      <div class="carousel-wrapper">
        <button class="nav-btn left" @click="scrollLeft">❮</button>
        
        <div class="movie-track" ref="carrusel">
          <div 
            v-for="peli in listaPeliculas" 
            :key="peli.id" 
            class="movie-card"
            @click="reproducirVideo(peli.videoUrl)"
          >
            <img :src="peli.imagen" :alt="peli.titulo">
            <div class="card-overlay">
              <span>{{ peli.titulo }}</span>
              <small>▶ Ver Video</small>
            </div>
          </div>
        </div>

        <button class="nav-btn right" @click="scrollRight">❯</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carrusel = ref(null)

// LISTA REAL DE TUS IMÁGENES Y VIDEOS
const listaPeliculas = ref([
  { id: 1, titulo: 'Guerrero 1', imagen: '/posters/1.jpg', videoUrl: 'LINK_DE_TU_VIDEO_1' },
  { id: 2, titulo: 'Guerrero 2', imagen: '/posters/2.jpg', videoUrl: 'LINK_DE_TU_VIDEO_2' },
  { id: 3, titulo: 'Guerrero 3', imagen: '/posters/3.jpg', videoUrl: 'LINK_DE_TU_VIDEO_3' },
  { id: 4, titulo: 'Guerrero 4', imagen: '/posters/4.jpg', videoUrl: 'LINK_DE_TU_VIDEO_4' },
  { id: 5, titulo: 'Guerrero 5', imagen: '/posters/5.jpg', videoUrl: 'LINK_DE_TU_VIDEO_5' },
  { id: 6, titulo: 'Guerrero 6', imagen: '/posters/6.jpg', videoUrl: 'LINK_DE_TU_VIDEO_6' },
  { id: 7, titulo: 'Guerrero 7', imagen: '/posters/7.jpg', videoUrl: 'LINK_DE_TU_VIDEO_7' },
  { id: 8, titulo: 'Guerrero 8', imagen: '/posters/8.jpg', videoUrl: 'LINK_DE_TU_VIDEO_8' },
  { id: 9, titulo: 'Guerrero 9', imagen: '/posters/9.jpg', videoUrl: 'LINK_DE_TU_VIDEO_9' },
  { id: 10, titulo: 'Guerrero 10', imagen: '/posters/10.jpg', videoUrl: 'LINK_DE_TU_VIDEO_10' },
  // Para las 40 restantes puedes seguir este patrón manualmente
])

const scrollLeft = () => carrusel.value.scrollBy({ left: -600, behavior: 'smooth' })
const scrollRight = () => carrusel.value.scrollBy({ left: 600, behavior: 'smooth' })

const reproducirVideo = (url) => {
  if (url !== 'LINK_DE_TU_VIDEO') {
    window.open(url, '_blank')
  } else {
    alert("Príncipe, aún no has puesto el link para este video.")
  }
}
</script>

<style scoped>
/* (Mantenemos el mismo estilo de neón que ya tenías) */
.streaming-container { background: #080808; color: white; min-height: 100vh; }
.navbar { display: flex; justify-content: space-between; padding: 20px 5%; background: black; align-items: center; }
.logo { color: #00ff41; font-weight: bold; font-size: 1.5rem; text-shadow: 0 0 10px #00ff41; }
.btn-login { background: #e50914; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; }
.hero { height: 40vh; display: flex; align-items: center; padding: 0 5%; background: linear-gradient(to right, #080808 30%, transparent), url('/logos.jpg') center/cover; }
.catalog { padding: 40px 5%; margin-top: -60px; }
.carousel-wrapper { position: relative; display: flex; align-items: center; }
.movie-track { display: flex; gap: 15px; overflow-x: hidden; scroll-behavior: smooth; padding: 40px 0; }
.movie-card { min-width: 200px; height: 300px; transition: all 0.4s ease; border-radius: 8px; overflow: hidden; cursor: pointer; position: relative; }
.movie-card:hover { transform: scale(1.3) translateY(-10px); z-index: 50; box-shadow: 0 0 20px #00ff41; border: 2px solid #00ff41; }
.movie-card img { width: 100%; height: 100%; object-fit: cover; }
.card-overlay { position: absolute; bottom: 0; width: 100%; background: rgba(0,0,0,0.8); padding: 10px; text-align: center; opacity: 0; transition: 0.3s; }
.movie-card:hover .card-overlay { opacity: 1; }
.nav-btn { position: absolute; z-index: 100; background: rgba(0,0,0,0.8); color: #00ff41; border: none; font-size: 2.5rem; padding: 15px; cursor: pointer; }
.left { left: -25px; }
.right { right: -25px; }
</style>