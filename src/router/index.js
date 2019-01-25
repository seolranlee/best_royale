import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/MASTER_about',
      name: 'MASTER_about',
    },
    {
      path: '/MASTER_test',
      name: 'MASTER_test',
    }
  ]
})
