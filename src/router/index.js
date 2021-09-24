import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/app',
    name: 'Dashboard',
    redirect: '/app/dashboard',
    component: () => import('../views/Dashboard.vue'),
    // beforeEnter: (to, from, next)=>{
    //   const token = localStorage.getItem('user-token')
    //   if (to.name !== 'Login'  && !token) next({ name: 'Login' })
    //   else next()
    // },
    children: [
      {
        path: '/app/dashboard',
        // redirect: '/app/dashboard/menu',
        component: () => import ('@/views/Menu/Menu.vue'),
        // beforeEnter: (to, from, next)=>{
        //   const token = localStorage.getItem('user-token')
        //   if (to.name !== 'Login'  && !token) next({ name: 'Login' })
        //   else next()
        // },
        
      },
      {
        path: '/app/dashboard/totalpolicies',
        name: 'Total Policies',
        component: () => import('@/views/Menu/TotalPolicies')
      },  
      {
        path: '/app/dashboard/activepolicies',
        name: 'Active Policies',
        component: () => import('@/views/Menu/ActivePolicies')
      },  
      {
        path: '/app/dashboard/inactivepolicies',
        name: 'Inactive Policies',
        component: () => import('@/views/Menu/InactivePolicies')
      },  
      {
        path: '/app/dashboard/registeredusers',
        name: 'Registered Users',
        component: () => import('@/views/Menu/RegisteredUsers')
      },  
      {
        path: '/app/dashboard/topcustomers',
        name: 'TopCustomers',
        component: () => import('@/views/Menu/TopCustomers')
      },  
      {
        path: '/app/dashboard/viewpolicy',
        name: 'ViewPolicy',
        props: (route) => ({
          user: {},
          ...route.params
        }),
        component: () => import('@/views/Menu/ViewPolicy')
      },  
      {
        path:'/app/dashboard/settings',
        name: 'AccountSettings',
        component: () => import('../views/AccountSettings')
      },
      {
        path:'/app/dashboard/adduser',
        name: 'AddUser',
        component: () => import('../views/AddUser')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  
  {
    path: '*',
    name: 'catchAll',
    component: () => import('../views/Login.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.hash) {
    window.scrollTo(0, 0);
  }
  next();
})
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('user-token')
//   if (to.name !== 'Login'  && !token) next({ name: 'Login' })
//   else next()
// })

export default router
