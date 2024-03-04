import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductPage',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      path: '/CheckOutPage',
      name: 'CheckOutPage',
      component: () => import('../views/CheckOutPage.vue')
    },
    {
      path: '/CompleteShopping',
      name: 'CompleteShopping',
      component: () => import('../views/CompleteShopping.vue')
    },
  ]
})

export default router
