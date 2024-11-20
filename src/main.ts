import { createApp } from 'vue'
import App from './App.vue'
import '@/style/reset.scss'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/router/index.ts'

const app = createApp(App)


const pinia = createPinia();


pinia.use(piniaPluginPersistedstate);

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia);
app.mount('#app')
