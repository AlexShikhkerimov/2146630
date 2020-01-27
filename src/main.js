import Vue from 'vue';
import App from './App.vue';
import moment from 'moment';

Vue.filter('formatDate', function (value) {
  moment.locale
  if (value) {
    return moment(String(value)).format('D MMMM YYYY');
  }
});

Vue.use(require('vue-shortkey'))

new Vue({
  el: '#app',
  render: h => h(App)
})