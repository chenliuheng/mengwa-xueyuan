import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Home from './views/Home.vue'
import English from './views/English.vue'
import Math from './views/Math.vue'
import Profile from './views/Profile.vue'
import WordCard from './games/english/WordCard.vue'
import WordMatch from './games/english/WordMatch.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/english', component: English },
  { path: '/math', component: Math },
  { path: '/profile', component: Profile },
  { path: '/game/word-card', component: WordCard },
  { path: '/game/word-match', component: WordMatch }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
