import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {faInstagram,faTwitter,faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram,faTwitter,faFacebookSquare)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
