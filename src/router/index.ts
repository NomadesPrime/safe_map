import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Tab3Page from '../views/TabsPage.vue'
import Tab2Page from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/cadastro'
  },
  {
    path: '/Tab2Page',
    name:'tab2',
    component: Tab2Page
  },
  {
    path: '/tabs/tab3',
    name:'tab3',
    component: Tab3Page
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'TabCadastro.vue',
        redirect: '/tabs/cadastro'
      },     
      {
        path: 'cadastro',
        component: () => import('@/views/TabCadastro.vue')
      },

      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
     
 
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
