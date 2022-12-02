/*
 * @Author: renjintao jintao2001@126.com
 * @Date: 2022-09-23 14:55:14
 * @LastEditors: renjintao jintao2001@126.com
 * @LastEditTime: 2022-09-23 15:11:18
 * @FilePath: \vue3demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
 
createApp(App).use(store).use(router).use(ElementPlus).use(less).mount('#app')