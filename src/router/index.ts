import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import SigInView from '@/views/SigInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import Cookies  from 'vue-cookies'
import { useCookies } from '@vueuse/integrations/useCookies'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SigInView,
      beforeEnter:(to,from,next) => {
        const cookies = useCookies(['Cookie'])
        if(cookies.get('token')){
          next('/home')
        }else{
          next()
        }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

  ]
})

export default router
