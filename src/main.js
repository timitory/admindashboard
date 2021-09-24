import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignLeft, faAngleLeft, faEye, faCheck, faEyeSlash, faTimes, faBars, faPlusSquare, faCircle, faAngleDown, faTrash, faPlayCircle, faPlus, faUserPlus, faTimesCircle, faTags, faArrowRight, faArrowLeft, faCalendarAlt, faGlobeAfrica, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAlignLeft, faAngleLeft, faEye, faCheck, faEyeSlash, faTimes, faBars, faPlusSquare, faCircle, faAngleDown, faTrash, faPlayCircle, faPlus, faUserPlus, faTimesCircle, faTags, faArrowRight, faArrowLeft, faCalendarAlt, faGlobeAfrica, faFacebook, faTwitter, faLinkedin, faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//set baseURL
const baseURL = "https://stage.paddycover.com/v1"

//After login, on page refresh, set authorization header
const token = localStorage.getItem('user-token')
if(token){
  store.state.userState = 'logged in'
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


export default baseURL