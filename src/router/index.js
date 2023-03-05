import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/details/:id',
      name: 'MovieDetails',
      component: () => import('../views/MovieDetailsView.vue'),
      props: true
    }
  ]
})

export default router
