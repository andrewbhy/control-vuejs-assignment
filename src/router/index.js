import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
  
    {
      path: '/about',
      name: 'Vue.js Scallfolding',
      component: Hello
    },
    {
      path : '/login',
      name : 'Login',
      component : Login
    },
    {
      path: '*',
      name :"Not Found",
      component : NotFound
    }

  ]
})
