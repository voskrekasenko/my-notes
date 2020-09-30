import Vue from 'vue'

Vue.filter('formatDate', value => {
  if (!value) return ''
  return new Date().toLocaleString();
})
