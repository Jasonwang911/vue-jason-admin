import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'


export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'dashboard' }
      }]
    }
  ]
})
