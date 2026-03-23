export default defineNuxtConfig({
  devtools: { enabled: true },
  // Esta línea es la que causaba el error si el archivo no existía
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Príncipe Streaming',
    }
  }
})