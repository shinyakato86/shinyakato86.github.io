import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
