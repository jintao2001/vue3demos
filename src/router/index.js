/*
 * @Author: renjintao jintao2001@126.com
 * @Date: 2022-09-23 15:12:02
 * @LastEditors: renjintao jintao2001@126.com
 * @LastEditTime: 2022-09-23 15:12:04
 * @FilePath: \vue3demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import guide from '../views/guide.vue'
 
 
const routes = [
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/guide',
    name: 'guide',
    component: guide
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
export default router