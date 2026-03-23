<template>
  <div class="streaming-container">
    <header class="navbar">
      <div class="logo">PRÍNCIPE STREAM</div>
      <nav>
        <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
        <NuxtLink to="/login" class="btn-login">Entrar</NuxtLink>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>CATÁLOGO SAIYAJIN</h1>
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
              <small>▶ Ver Trailer</small>
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

// AQUÍ ES DONDE PONES LOS VIDEOS
// He creado la lista para que cada imagen busque su video correspondiente
const listaPeliculas = ref(
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    titulo: `Película ${i + 1}`,
    imagen: `/posters/${i + 1}.jpg`, // Busca en public/posters/
    // Aquí pondrías el link de YouTube o la ruta de tu video local
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
  }))
)

const scrollLeft = () => carrusel.value.scrollBy({ left: -600, behavior: 'smooth' })
const scrollRight = () => carrusel.value.scrollBy({ left: 600, behavior: 'smooth' })

// Función para abrir el video
const reproducirVideo = (url) => {
  // Por ahora abre una nueva ventana, luego podemos hacer un Modal (ventana flotante)
  window.open(url, '_blank')
}
</script>

<style scoped>
.streaming-container { background: #080808; color: white; min-height: 100vh; }
.navbar { display: flex; justify-content: space-between; padding: 20px 5%; background: black; }
.logo { color: #00ff41; font-weight: bold; font-size: 1.5rem; text-shadow: 0 0 10px #00ff41; }
.btn-login { background: #e50914; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; }

.hero { 
  height: 45vh; 
  display: flex; 
  align-items: center; 
  padding: 0 5%;
  background: linear-gradient(to right, #080808 30%, transparent), url('/logos.jpg') center/cover; 
}

.catalog { padding: 40px 5%; margin-top: -60px; }
.carousel-wrapper { position: relative; display: flex; align-items: center; }

.movie-track { 
  display: flex; 
  gap: 15px; 
  overflow-x: hidden; 
  scroll-behavior: smooth; 
  padding: 40px 0; 
}

.movie-card { 
  min-width: 200px; 
  height: 300px; 
  transition: all 0.4s ease; 
  border-radius: 8px; 
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

/* EFECTO ZOOM NEÓN */
.movie-card:hover { 
  transform: scale(1.3) translateY(-10px); 
  z-index: 50; 
  box-shadow: 0 0 20px #00ff41; 
  border: 2px solid #00ff41; 
}

.movie-card img { width: 100%; height: 100%; object-fit: cover; }

.card-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: 0.3s;
}

.movie-card:hover .card-overlay { opacity: 1; }

.nav-btn { 
  position: absolute; 
  z-index: 100; 
  background: rgba(0,0,0,0.8); 
  color: #00ff41; 
  border: none; 
  font-size: 2.5rem; 
  padding: 15px; 
  cursor: pointer; 
}
.left { left: -25px; }
.right { right: -25px; }
</style>