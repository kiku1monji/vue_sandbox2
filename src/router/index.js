import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import UserSetting from '@/components/user/Setting'
import UserAccount from '@/components/user/Account'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:id',
      component: User,
      props: true,
      children: [
        {
          path: 'setting',
          name: 'setting',
          component: UserSetting
        },
        {
          path: 'account',
          name: 'account',
          component: UserAccount
        }
      ]
    },
    {
      path: '/game',
      component: Game
    }
  ]
})
