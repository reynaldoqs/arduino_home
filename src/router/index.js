import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/destinos',
    name: 'destinos',

    component: () => import('../views/Destinos.vue')
  },{
    path:'/cooperativas',
    name:'cooperativas',
    component:() => import('../views/Cooperativas.vue')
  },
  {
    path: '/atencion',
    name: 'atencion',
    component:() => import('../views/Atencion.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component:() => import('../views/Servicios.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
