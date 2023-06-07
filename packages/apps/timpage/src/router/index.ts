import * as VueRouter from 'vue-router'
import Menu from '@/components/menu.vue'
import data_serch_routes from './dataSerch/index'

const routes = [
  {
    path: '/',
    component: Menu,
    children: [...data_serch_routes]
  }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
