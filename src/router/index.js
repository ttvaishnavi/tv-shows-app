import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import { routeNames } from '../constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.DASHBOARD,
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
