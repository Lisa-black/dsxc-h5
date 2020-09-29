import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/order',
    name: '我要下单',
    component: () => import('@/views/order/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/orderList',
    name: '我的订单',
    component: () => import('@/views/order/list'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/orderDetail',
    name: '订单详情',
    component: () => import('@/views/order/detail'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/404',
    name: 'error',
    component: () => import('@/views/error/index'),
    meta: {
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
