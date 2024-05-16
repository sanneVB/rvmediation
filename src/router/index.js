import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MediatorView from '@/views/MediatorView.vue'
import NmvView from '@/views/NmvView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyStatementView from '@/views/PrivacyStatementView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mediator',
    name: 'mediator',
    component: MediatorView
  },
  {
    path: '/nmv',
    name: 'nmv',
    component: NmvView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/privacystatement',
    name: 'privacystatement',
    component: PrivacyStatementView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
