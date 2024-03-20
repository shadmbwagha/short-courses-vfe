import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue'), 
    name:'login'
  },
  {
    path: '/body',
    component: Main,
    children: [
      { path: '/dashboard', component: () => import('../views/Dashboard.vue') },
      { path: '/modules', component: () => import('../views/Modules.vue') },
      // { path: '/debt', component: () => import('../views/Debt.vue') },
      // { path: '/debtForm', component: () => import('../components/DebtForm.vue') },
      // { path: '/credits', component: () => import('../views/Credit.vue') },
      // { path: '/creditForm', component: () => import('../components/CreditForm.vue') },
    ],
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'), 
    name: 'register'
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
