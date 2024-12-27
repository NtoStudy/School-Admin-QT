import { createApp } from 'vue'
import router from  './router/intercept.ts'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
