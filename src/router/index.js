import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import FavouritesView from "@/views/FavouritesView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CartView from "@/views/CartView.vue";
import ModelView from "@/views/ModelView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: CatalogView
  },
  {
    path: '/model/:id',
    name: 'model',
    component: ModelView,
    props: true
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
