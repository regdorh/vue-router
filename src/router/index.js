import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: {
      product: {
        title: 'Colaciones',
        description: 'Some quick example text to build on the card title and make up the bulk of the card',
        price: '2 x 1 Some quick example text to build on the card title and make up the bulk of the card content',
        amount: '1.000 Vestibulum at eros'
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
    props: {
      product: {
        title: 'Desayunos',
        description: 'Contamos con desayunos nutritivos y deliciosos',
        price: 2000,
        amount: 'Para dos personas'
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
  
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
