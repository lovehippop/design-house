import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './homeRoute'
import designerRoute from './designerRoute'
import journalRoute from './journalRoute'
import mineRoute from './mineRoute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRoute,
    designerRoute,
    journalRoute,
    mineRoute,

    {
      path: '/',
    
      component: () => import('../pages/home')
    }
  ]
})
