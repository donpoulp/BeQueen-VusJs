import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BurgerMenu from '@/components/burgerMenu.vue'
import ProductsList from '@/views/ProductsList.vue'
import Product from '@/components/Product.vue'
import ProductInfo from '@/components/ProductInfo.vue'
import Auth from '@/views/Auth.vue'
import Register from '@/components/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/burgerMenu',
      name: 'burgerMenu',
      component: BurgerMenu
    },
    {
      path: '/productsList',
      name: 'productsList',
      component: ProductsList
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'productInfo',
      component: ProductInfo

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import("../views/CartView.vue"),

    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
