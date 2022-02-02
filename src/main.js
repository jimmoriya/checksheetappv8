import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap' 
import '@/assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
