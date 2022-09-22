import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllQuotes from '../views/AllQuotes.vue'
import CreateQuote from '../views/CreateQuote.vue'
import DeleteQuote from '../views/DeleteQuote.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all', 
    name: 'all quote', 
    component: AllQuotes
  }, 
  {
    path: '/create', 
    name: 'create quote', 
    component: CreateQuote
  }, 
  {
    path: '/delete', 
    name: 'delete quote', 
    component: DeleteQuote
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
