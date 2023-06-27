import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import SigInView from '@/views/SigInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
      meta: { requiresAuth: true },
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      name: 'signIn',
      component: SigInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const cookies = useCookies(['Cookie'])
  const isAuthenticated = !!cookies.get('token')

  if (to.matched.some(route => route.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'signIn' })
  } else {
    next()
  }
})

export default router
