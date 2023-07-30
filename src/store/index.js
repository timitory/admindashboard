import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import baseURL from "@/main"
import router from "../router/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading : false,
    showSuccess: false,
    showError: false,
    errorMsg: 'Error',
    successMsg: 'Success',
    userState: '',
    user: {},
    enrollee: {},
    view: '',
    repayment: {},
    policy: {},
    vehicleQuote: {},
    collapse: false,
    homeCollapse: false,
    activeModal : 0,
    tab : 'vehiclereport',
    reviewinfo: {}
  },
  mutations: {
    startLoading(state){
      state.loading  = true
    },
    endLoading(state){
      state.loading  = false
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

    setTab(state, payload){
      state.tab = payload
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
    setRepayment(state, payload){
      state.repayment = payload
    },
    setReviewInfo(state, payload){
      state.reviewinfo = payload
    },
    setPolicy(state, payload){
      state.policy = payload
    },
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
      if(err.response.data.message == "Invalid or expired JWT" || err.response.data.message == "Missing or malformed JWT"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message == "Admin role required"){
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
