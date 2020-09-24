// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import page from './components/page.vue'


Vue.config.productionTip = false

//Vue.component('user', user) глобальне об'явлення компонента

new Vue({
  el: '#app',
  components: {
    'App': App,
    'page': page
  },
  template: '<div><App/><page/></div>'

})
