import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Stars from '../views/Stars.vue'
import Particles from '../views/Particles.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Badge from '../views/Badge.vue'
import Diray from '../views/Diray.vue'
import Practice from '../views/PracticeChart.vue'
import Situation from '../views/SituationChart.vue'
import Shadowing from '../views/ShadowingChart.vue'
import checkPassword from '../views/Password/checkPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/situationchart',
    name: 'situationchart',
    component:Situation
  },

  {
    path: '/checkpassword',
    name: 'checkpassword',
    component:checkPassword
  },
  {
    path: '/shadowingchart',
    name: 'shadowingchart',
    component:Shadowing
  },
  {
    path: '/stars',
    name: 'stars',
    component:Stars
  },
  {
    path: '/particles',
    name: 'particles',
    component:Particles
  },
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/register',
    name: 'register',
    component:Register
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile
  },
  {
    path: '/badge',
    name: 'badge',
    component:Badge
  },
  {
    path: '/diray',
    name: 'diray',
    component:Diray
  },
  {
    path: '/home',
    name: 'PracticeChart',
    component:Practice
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
