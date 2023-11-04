import Addarticle from '@/views/Addarticle.vue'
import De from '@/views/De.vue';
import Home from '@/views/Home.vue';
import Lst from '@/views/Lst.vue';
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/',
          component: Lst
        }
      ]
    },
    {
      path: '/de',
      component: De
    },
    {
      path: '/Addarticle',
      component: Addarticle
    }
  ],
  scrollBehavior() {
    return {left: 0, top: 0}
  }
})

export default router
