import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'

  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    },
    {
      path: '/home/comment',
      component: () => import('./views/comment')
    },
    {
      path: '/home/material',
      component: () => import('./views/material')
    },
    {
      path: '/home/articles',
      component: () => import('./views/article')
    },
    {
      path: '/home/publish',
      component: () => import('./views/publish')
    },
    {
      path: '/home/publish/:articleId',
      component: () => import('./views/publish')
    }
    ]
  },
  {
    path: '/login',
    component: Login
  }

  ]
})
