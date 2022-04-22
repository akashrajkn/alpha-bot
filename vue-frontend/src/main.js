import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueTypedJs from 'vue-typed-js'
import App from './App.vue'


const app = createApp(App)

app.use(ElementPlus)
app.use(VueTypedJs)
app.mount('#app')
