import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
