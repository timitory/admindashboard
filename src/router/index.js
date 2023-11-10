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
    beforeEnter: (to, from, next)=>{
      const token = localStorage.getItem('user-token')
      if (to.name !== 'Login'  && !token) next({ name: 'Login' })
      else next()
    },
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
        path: '/app/review',
        name: 'Reviews',
        component: () => import('@/views/Review')
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
        component: () => import('@/views/Menu/ViewPolicy')
      },

      {
        path: '/app/dashboard/health',
        redirect: '/app/dashboard/health/dashboard',
        component: ()=>import('@/views/Health/Health'),
        children : [
          {
            path: '/app/dashboard/health/dashboard',
            component: ()=>import('@/views/Health/Dashboard')
          },
          {
            path: '/app/dashboard/health/repayments',
            component: ()=>import('@/views/Health/Repayments')
          },
          {
            path: '/app/dashboard/health/plans',
            component: ()=>import('@/views/Health/Plan')
          },
          {
            path: '/app/dashboard/health/cancellations',
            component: ()=>import('@/views/Health/CancelRequests')
          },
          {
            path: '/app/dashboard/health/policies',
            component: ()=>import('@/views/Health/AllPolicies')
          },
          {
            path: '/app/dashboard/health/customers',
            component: ()=>import('@/views/Health/Customers')
          },
          {
            path: '/app/dashboard/health/reports',
            component: ()=>import('@/views/Health/Reports')
          },
        ]
      }, 
      {
        path: '/app/dashboard/vehicle',
        redirect: '/app/dashboard/vehicle/dashboard',
        component: ()=>import('@/views/Vehicle/Vehicle'),
        children : [
          {
            path: '/app/dashboard/vehicle/dashboard',
            component: ()=>import('@/views/Vehicle/Dashboard')
          },
          {
            path: '/app/dashboard/vehicle/remittance',
            component: ()=>import('@/views/Vehicle/Remittance')
          },
          {
            path: '/app/dashboard/vehicle/repayments',
            component: ()=>import('@/views/Vehicle/Repayments')
          },
          {
            path: '/app/dashboard/vehicle/cancellations',
            component: ()=>import('@/views/Vehicle/CancelRequests')
          },
          {
            path: '/app/dashboard/vehicle/policies',
            component: ()=>import('@/views/Vehicle/AllPolicies')
          },
          {
            path: '/app/dashboard/vehicle/customers',
            component: ()=>import('@/views/Vehicle/Customers')
          },
          {
            path: '/app/dashboard/vehicle/reports',
            component: ()=>import('@/views/Vehicle/Reports')
          },
          {
            path: '/app/dashboard/vehicle/revenue',
            component: ()=>import('@/views/Vehicle/Revenue')
          },
          {
            path: '/app/dashboard/vehicle/claims',
            component: ()=>import('@/views/Vehicle/Claims')
          },
          {
            path: '/app/dashboard/vehicle/repayment/chargehistory',
            name: 'VehicleChargeHistory',
            component: () => import('@/views/Vehicle/ChargeHistory'),
          },
        ]
      },
      {
        path: '/app/dashboard/travel',
        redirect: '/app/dashboard/travel/dashboard',
        component: ()=>import('@/views/Travel/Travel'),
        children : [
          {
            path: '/app/dashboard/travel/dashboard',
            component: ()=>import('@/views/Travel/Dashboard')
          },
          {
            path: '/app/dashboard/travel/remittance',
            component: ()=>import('@/views/Travel/Remittance')
          },
          {
            path: '/app/dashboard/travel/repayments',
            component: ()=>import('@/views/Travel/Repayments')
          },
          {
            path: '/app/dashboard/travel/cancellations',
            component: ()=>import('@/views/Travel/CancelRequests')
          },
          {
            path: '/app/dashboard/travel/policies',
            component: ()=>import('@/views/Travel/AllPolicies')
          },
          {
            path: '/app/dashboard/travel/customers',
            component: ()=>import('@/views/Travel/Customers')
          },
          {
            path: '/app/dashboard/travel/reports',
            component: ()=>import('@/views/Travel/Reports')
          },
          {
            path: '/app/dashboard/travel/revenue',
            component: ()=>import('@/views/Travel/Revenue')
          },
          {
            path: '/app/dashboard/travel/claims',
            component: ()=>import('@/views/Travel/Claims')
          },
          {
            path: '/app/dashboard/travel/repayment/chargehistory',
            name: 'VehicleChargeHistory',
            component: () => import('@/views/Travel/ChargeHistory'),
          },
        ]
      }, 
      {
        path: '/app/dashboard/pet',
        redirect: '/app/dashboard/pet/dashboard',
        component: ()=>import('@/views/Pet/Pet'),
        children : [
          {
            path: '/app/dashboard/pet/dashboard',
            component: ()=>import('@/views/Pet/Dashboard')
          },
          {
            path: '/app/dashboard/pet/remittance',
            component: ()=>import('@/views/Pet/Remittance')
          },
          {
            path: '/app/dashboard/pet/repayments',
            component: ()=>import('@/views/Pet/Repayments')
          },
          {
            path: '/app/dashboard/pet/cancellations',
            component: ()=>import('@/views/Pet/CancelRequests')
          },
          {
            path: '/app/dashboard/pet/policies',
            component: ()=>import('@/views/Pet/AllPolicies')
          },
          {
            path: '/app/dashboard/pet/customers',
            component: ()=>import('@/views/Pet/Customers')
          },
          {
            path: '/app/dashboard/pet/reports',
            component: ()=>import('@/views/Pet/Reports')
          },
          {
            path: '/app/dashboard/pet/revenue',
            component: ()=>import('@/views/Pet/Revenue')
          },
          {
            path: '/app/dashboard/pet/claims',
            component: ()=>import('@/views/Pet/Claims')
          },
          {
            path: '/app/dashboard/pet/repayment/chargehistory',
            name: 'VehicleChargeHistory',
            component: () => import('@/views/Pet/ChargeHistory'),
          },
        ]
      },
      {
        path: '/app/dashboard/gadget',
        redirect: '/app/dashboard/gadget/dashboard',
        component: ()=>import('@/views/Gadget/Gadget.vue'),
        children : [
          {
            path: '/app/dashboard/gadget/dashboard',
            component: ()=>import('@/views/Gadget/Dashboard')
          },
          {
            path: '/app/dashboard/gadget/remittance',
            component: ()=>import('@/views/Gadget/Remittance')
          },
          {
            path: '/app/dashboard/gadget/repayments',
            component: ()=>import('@/views/Pet/Repayments')
          },
          {
            path: '/app/dashboard/gadget/cancellations',
            component: ()=>import('@/views/Gadget/CancelRequests')
          },
          {
            path: '/app/dashboard/gadget/policies',
            component: ()=>import('@/views/Gadget/AllPolicies')
          },
          {
            path: '/app/dashboard/gadget/customers',
            component: ()=>import('@/views/Gadget/Customers')
          },
          {
            path: '/app/dashboard/gadget/reports',
            component: ()=>import('@/views/Pet/Reports')
          },
          {
            path: '/app/dashboard/gadget/revenue',
            component: ()=>import('@/views/Gadget/Revenue')
          },
          {
            path: '/app/dashboard/gadget/claims',
            component: ()=>import('@/views/Gadget/Claims')
          },
          {
            path: '/app/dashboard/pet/repayment/chargehistory',
            name: 'VehicleChargeHistory',
            component: () => import('@/views/Pet/ChargeHistory'),
          },
        ]
      },
      {
        path: '/app/dashboard/homecontent',
        redirect: '/app/dashboard/homecontent/dashboard',
        component: ()=>import('@/views/Home/Home'),
        children : [
          {
            path: '/app/dashboard/homecontent/dashboard',
            component: ()=>import('@/views/Home/Dashboard')
          },
          {
            path: '/app/dashboard/homecontent/repayments',
            component: ()=>import('@/views/Home/Repayments')
          },
          {
            path: '/app/dashboard/homecontent/cancellations',
            component: ()=>import('@/views/Home/CancelRequests')
          },
          {
            path: '/app/dashboard/homecontent/policies',
            component: ()=>import('@/views/Home/AllPolicies')
          },
          {
            path: '/app/dashboard/homecontent/customers',
            component: ()=>import('@/views/Home/Customers')
          },
          {
            path: '/app/dashboard/homecontent/reports',
            component: ()=>import('@/views/Home/Reports')
          },
          {
            path: '/app/dashboard/homecontent/claims',
            component: ()=>import('@/views/Home/Claims')
          },
          {
            path: '/app/dashboard/homecontent/repayment/chargehistory',
            name: 'HomeChargeHistory',
            component: () => import('@/views/Home/ChargeHistory'),
          },
        ]
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
