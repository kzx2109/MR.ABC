import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import "aos/dist/aos.css"
import 'flowbite'

// import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(VueParticles)

new Vue({
  created() {
    AOS.init({ });
  },

  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
