import { createRouter, createWebHashHistory } from 'vue-router'

import routes from "./RouterList.js";


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
