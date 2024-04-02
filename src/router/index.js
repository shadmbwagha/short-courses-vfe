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
      { path: '/dashboard', component: () => import('../views/Dashboard.vue'), name: 'dashboard', props: true},
      { path: '/modules', component: () => import('../views/Modules.vue') },
      { path: '/register-staff', component: () => import('../views/Register.vue') },
      { path: '/courseForm/:id/:isEdit', component: () => import('../components/CourseForm.vue'), props: true, name: 'moduleForm' },
      { path: '/curricula', component: () => import('../views/Curriculum.vue') },
      { path: '/curriculumForm', component: () => import('../components/CurriculumForm.vue')},
      { path: '/curriculumModule/', component: () => import('../views/RegisterCurriculumModules.vue'), props: true, name: 'registerCurriculumModules' },
      { path: '/curriculumModules/:id', component: () => import('../views/CurriculumModules.vue'), props: true, name: 'curriculumModules' },
      { path: '/students', component: () => import('../views/Student.vue') },
      { path: '/studentForm', component: () => import('../components/StudentForm.vue'), name:"studentForm" },
      { path: '/studentModuleRegistration', component: () => import('../views/RegisterStudentModules.vue'), name:"studentFormRegistration" },
      { path: '/studentPaymentsRegistration', component: () => import('../views/RegisterStudentPayments.vue'), name:"studentPaymentRegistration" },
      { path: '/payments', component: () => import('../views/Payment.vue'), name: 'payments'},
      { path: '/studentpayments/:id', component: () => import('../views/StudentPayment.vue'), props:true, name: 'studentPayments'},
      { path: '/lectures', component: () => import('../views/Lecture.vue'), name: 'lectures'},
      { path: '/lectureForm/:id/:isEdit', component: () => import('../components/LectureForm.vue'), props: true, name: 'lectureForm' },
      { path: '/devp', component: () => import('../views/Maintainance.vue') },
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
