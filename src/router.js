import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/',
      name: 'Product',
      component: () => import('./views/products/List.vue'),
    },
    {
      path: '/products/sub1',
      component: () => import('./views/products/sub1/List.vue'),
    },
    {
      path: '/products/sub2',
      component: () => import('./views/products/sub2/List.vue'),
    },
    {
      path: '/products/sub3',
      component: () => import('./views/products/sub3/List.vue'),
    },
    {
      path: '/brand/',
      component: () => import('./views/brand/Brand.vue')
    },
    {
      path: '/brand/sub1',
      component: () => import('./views/brand/sub1/Brand.vue')
    },
    {
      path: '/brand/sub2',
      component: () => import('./views/brand/sub2/Brand.vue')
    },
    {
      path: '/shops/',
      component: () => import('./views/shops/Shops.vue')
    },
    {
      path: '/shops/sub1',
      component: () => import('./views/shops/sub1/Shops.vue')
    },
    {
      path: '/spa/',
      component: () => import('./views/spa/Spa.vue')
    },
    {
      path: '/spa/sub1',
      component: () => import('./views/spa/sub1/Spa.vue')
    },
    {
      path: '/event/',
      component: () => import('./views/event/List.vue')
    },
    {
      path: '/event/sub1',
      component: () => import('./views/event/sub1/List.vue')
    }  
  ]
})
