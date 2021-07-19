import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SearchLocation from '../view/SearchLocation.vue'
import LocationDetails from '../view/LocationDetails.vue'
import Cart from '../view/Cart.vue'
import Ceckout from '../view/Ceckout.vue'
import Home from '../view/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/search-location',
    name: 'Search Location',
    component: SearchLocation
  },
  {
    path: '/location-details/:id',
    name: 'Location details',
    component: LocationDetails
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/ceckout',
    name: 'Ceckout',
    component: Ceckout
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
