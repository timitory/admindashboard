import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import baseURL from "@/main"
import router from "vue-router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading : false,
    showSuccess: false,
    showError: false,
    addAddress : false,
    errorMsg: 'Error',
    successMsg: 'Success',
    userState: '',
    user: {},
    health_plan_id: '',
    vehicle_category_id: '',
    home_plan_id: '',
    enrollee: {},
    beneficiaries: [],
    beneficiary: {},
    beneficiaryCount: '',
    dependants: [],
    view: '',
    vehicleQuote: {},
    collapse: false,
    homeCollapse: false,
    activeModal : 0
  },
  mutations: {
    startLoading(state){
      state.loading  = true
    },
    endLoading(state){
      state.loading  = false
    },
    setBeneficiaries(state, payload){
      state.beneficiaries = payload
    },
    setBeneficiary(state, payload){
      state.beneficiary = payload
    },
    setBeneficiaryCount(state, payload){
      state.beneficiaryCount = payload 
    },
    setHealthPlanId(state, payload){
      state.health_plan_id = payload
    },
    setHomePlanId(state, payload){
      state.home_plan_id = payload
    },
    setVehicleCategoryId(state, payload){
      state.vehicle_category_id = payload
    },
    setDependants(state, payload){
      state.dependants = payload
      // console.log(state.dependants)
    },
    setEnrollee(state, payload){
      state.enrollee = payload
      // console.log(state.enrollee)
    },
    changeview(state, val){
      state.view = val
    },
    toggleCollapse(state){
      state.collapse = !state.collapse
    },
    toggleHomeCollapse(state){
      state.homeCollapse = !state.homeCollapse
    },
    setCollapse(state, value){
      state.collapse = value
    },
    setHomeCollapse(state, value){
      state.homeCollapse = value
    },
    //Set a notice for an active modal to disable scrolling
    setActiveModal(state, val){
      state.activeModal = val
    },
    setSuccess(state, payload){
      state.showSuccess = payload.status
      state.successMsg = payload.msg
      // console.log(state.successMsg)
    },

    setError(state, payload){
      state.showError = payload.status
      state.errorMsg = payload.msg
    },
    setUser(state, obj){
      state.user = obj
    },
    loginUser(state){
      state.userState = 'logged in'
    },
    logoutUser(state){
      state.userState = ''
    },
    saveQuote(state, payload){
      state.vehicleQuote = payload
    },
    // to keep track of where the user is coming from in order to redirect them back after adding address
    addAddress(state, val){
      state.addAddress = val
      console.log(state.addAddress)
    }
  },
  actions: {
    registerUser({commit}, user){
      return new Promise((resolve, reject)=> {
        commit('startLoading')
        axios({url: `${baseURL}/signup`, data: user, method: 'POST'})
        .then((res)=> {
          commit('endLoading')
          resolve(res)
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    loginUser({commit}, user){
      return new Promise((resolve, reject)=> {
        axios({url: `${baseURL}/login`, data: user, method: 'POST'})
        .then((res)=>{
          console.log(res.data.data.email)
          const email = res.data.data.email
          console.log(email)
          if(email === "admin@pc.ng"){
            commit('loginUser')
            commit('setUser', res.data.data)
            // Store the token in localstorage
            const token = res.data.data.token
            localStorage.setItem('user-token', token) 
            // Set the authorization header for future API calls
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            resolve(res)
          }
          else{
            reject({response:{
              data:{
                message: "Invalid credentials"
              }
            }})
          }
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    logoutUser({commit}){
      return new Promise((resolve)=>{
        setTimeout(()=> {
          commit('logoutUser')
          localStorage.removeItem('user-token')
          // remove the axios default header
          delete axios.defaults.headers.common['Authorization']
          resolve()
        }, 2000)
      })
    },
    getDependants({commit}){
      return new Promise((resolve, reject)=>{
        axios.get(`${baseURL}/dependants`)
        .then(res=>{
          commit('setDependants', res.data.data)
          resolve()
        })
        .catch(err=>{
          reject(err.response)
        })
      })
    },
    handleError({commit, dispatch}, err){
      console.log(err.response.data.message)
      if(err.response.data.message == "Invalid or expired JWT"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message == "Missing or malformed JWT" || err.response.data.message == "Admin role required"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message){
        commit('endLoading')
        commit('setError', {status: true, msg: err.response.data.message})
      }else{
        commit('endLoading')
        commit('setError', {status: true, msg: "An error occured"})
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
