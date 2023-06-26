import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import cookies from 'vue-cookies'

const app = createApp(App)
app.use(router)
app.use(cookies)

app.mount('#app')
