import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   scrollBehavior(to, from, savedPosition) {
    // return desired position
    // if (to.hash) {
    //   // window.alert(to.hash)
     
    // }
    document.getElementById("top")?.scrollIntoView();
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/headphones',
      name: 'headphones',
      component: () => import('../views/headphones.vue'),
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../views/speakers.vue'),
    },
    {
      path: '/earphones',
      name: 'earphones',
      component: () => import('../views/earphones.vue'),
    },
    {
      path: '/product/:name',
      name: 'product',
      component: () => import('../views/product.vue'),
      props: (route: { params: { name?: string | undefined } }) => ({
        name: route.params.name ?? "none",
      }),
    },
  ],
})

export default router
