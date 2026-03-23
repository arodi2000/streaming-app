<template>
  <div class="streaming-container">
    <section class="hero">
      <div class="hero-content">
        <h1 class="neon-title">VEGETA STREAM</h1>
        <p>Tu dosis diaria de acción y poder Saiyajin.</p>
        <div class="hero-btns">
          <button class="btn-play" @click="reproducir('Principal')">▶ Reproducir</button>
          <button class="btn-list">+ Mi Lista</button>
        </div>
      </div>
    </section>

    <div class="catalog">
      <h2 class="category">Tendencias ahora</h2>
      
      <div class="carousel-wrapper">
        <button class="arrow left" @click="scrollLeft">❮</button>
        
        <div class="movie-track" ref="carrusel">
          <div 
            v-for="peli in peliculas" 
            :key="peli.id" 
            class="movie-card"
            @click="reproducir(peli.titulo)"
          >
            <img :src="peli.imagen" :alt="peli.titulo">
            <div class="hover-info">
              <span>{{ peli.titulo }}</span>
            </div>
          </div>
        </div>

        <button class="arrow right" @click="scrollRight">❯</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carrusel = ref(null)

// Genera la lista de 50 películas automáticamente usando tus archivos 1.jpg, 2.jpg...
const peliculas = ref(
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    titulo: `Película ${i + 1}`,
    imagen: `/posters/${i + 1}.jpg` 
  }))
)

// Funciones de los botones para que el carrusel se mueva
const scrollRight = () => {
  carrusel.value.scrollBy({ left: 550, behavior: 'smooth' })
}

const scrollLeft = () => {
  carrusel.value.scrollBy({ left: -550, behavior: 'smooth' })
}

const reproducir = (titulo) => {
  alert("Iniciando: " + titulo)
}
</script>

<style scoped>
.streaming-container { background: #050505; min-height: 100vh; color: #fff; overflow-x: hidden; }

/* Banner */
.hero {
  height: 65vh;
  background: linear-gradient(to top, #050505, transparent), 
              url('https://wallpaperaccess.com/full/245458.jpg') no-repeat center/cover;
  display: flex;
  align-items: center;
  padding: 0 5%;
}
.neon-title { font-size: 4rem; color: #00ff41; text-shadow: 0 0 20px #00ff41; margin: 0; }

/* Botones */
.btn-play { background: #fff; color: #000; border: none; padding: 12px 30px; font-weight: bold; border-radius: 4px; cursor: pointer; margin-right: 15px; }
.btn-list { background: rgba(255,255,255,0.2); color: #fff; border: none; padding: 12px 30px; border-radius: 4px; cursor: pointer; }

/* Carrusel y Efecto Zoom */
.catalog { padding: 0 5%; margin-top: -80px; }
.category { font-size: 1.5rem; margin-bottom: 20px; }
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
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  border-radius: 8px;
}

/* EL EFECTO QUE PEDISTE: Zoom y Neón al señalar */
.movie-card:hover {
  transform: scale(1.35) translateY(-10px);
  z-index: 100;
  box-shadow: 0 0 25px #00ff41;
  border: 2px solid #00ff41;
}

.movie-card img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }

/* Navegación */
.arrow {
  position: absolute;
  z-index: 110;
  background: rgba(0,0,0,0.6);
  color: #00ff41;
  border: none;
  height: 80%;
  width: 50px;
  cursor: pointer;
  font-size: 2.5rem;
  transition: 0.3s;
}
.arrow:hover { background: #00ff41; color: #000; }
.left { left: -30px; }
.right { right: -30px; }
</style>    