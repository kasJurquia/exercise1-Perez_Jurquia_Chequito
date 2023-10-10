import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import bootsrap from 'bootstrap/dist/js/bootstrap.bundle.js'




loadFonts()   

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
