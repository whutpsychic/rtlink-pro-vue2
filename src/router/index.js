import Vue from 'vue'
import VueRouter from 'vue-router'
import Document from '../pages/document/main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    // ------------- redirect -------------
    {
      path: '/',
      redirect: '/document',
    },
    {
      path: '/document',
      redirect: '/document/quick-start',
    },
    // ------------- 404 -------------
    // ------------- paths -------------
    {
      path: '/document',
      component: Document,
      children: [
        // 快速开始
        {
          path: 'quick-start',
          component: () => import('../views/quick-start/main.vue')
        },
        // 公式编辑器
        {
          path: 'formula-editor',
          component: () => import('../views/formula-editor/main.vue')
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
