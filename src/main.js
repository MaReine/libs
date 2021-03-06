import Vue from 'vue'
import App from './App.vue'
import './libs/rem/rem'
import './libs/calculation/calculation'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
