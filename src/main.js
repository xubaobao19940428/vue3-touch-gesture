import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import vue3Touch from '../packages'

const app = createApp(App)

app.use(vue3Touch,{ name: 'vue3-touch' })

app.mount('#app')
