import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
//  {
  //  path: '/about',
   // name: 'about',
 //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
 // }
]

const router = createRouter({
  history: createWebHistory('/interactive_comments/'),
  routes
})

export default router
