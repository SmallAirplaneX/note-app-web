import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

function start (){
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
} 

start()