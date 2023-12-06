import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '../views/EditView.vue'
import CreateView from '../views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: HomeView
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: CreateView
    },
    {
      path: '/product/:id/edit',
      name: 'product-edit',
      component: EditView
    }
  ]
})

export default router
