<template>
  <div class="mt-8 px-6 pt-6 lg:px-10 pb-20 relative bg-white grid gap-4 lg:grid-cols-5" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/" class="text-green-500 font-bold underline absolute absolute top-2 invoicelink">View all invoice</router-link>
 
      <div class="px-6 box mt-10 lg:mt-10 pb-4 border-b border-solid lg:border-b-0 lg:border-r">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="54.392" height="53.986" viewBox="0 0 54.392 53.986">
            <path fill="#00a859" class="a" d="M23.044,8.714a1.807,1.807,0,0,0,1.43-1.767V2.318a1.818,1.818,0,0,0-.653-1.4A1.787,1.787,0,0,0,22.358.529a27.2,27.2,0,0,0,3.424,53.922q.717.036,1.429.036a26.92,26.92,0,0,0,15.556-4.9,1.784,1.784,0,0,0,.754-1.31A1.821,1.821,0,0,0,43,46.831l-3.279-3.277a1.805,1.805,0,0,0-2.268-.233,19.033,19.033,0,1,1-14.4-34.607ZM6.463,29.539A20.839,20.839,0,0,0,38.429,44.846l-.49-.763.5.752,3.292,3.271A25.384,25.384,0,1,1,22.661,2.318L22.65,6.944A20.867,20.867,0,0,0,6.463,29.539Zm0,0" transform="translate(0.002 -0.501)"/>
            <path fill="#00a859" class="a" d="M283.715.527a1.783,1.783,0,0,0-1.464.392,1.817,1.817,0,0,0-.654,1.4V6.945a1.808,1.808,0,0,0,1.431,1.767,19.152,19.152,0,0,1,14.886,18.577,18.912,18.912,0,0,1-2.937,10.135,1.809,1.809,0,0,0,.242,2.257l3.285,3.286a1.819,1.819,0,0,0,1.288.534c.055,0,.111,0,.167-.007a1.784,1.784,0,0,0,1.311-.763A27.2,27.2,0,0,0,283.715.527Zm16.072,41.158L296.5,38.4l.009-.007a20.721,20.721,0,0,0,3.218-11.1A20.97,20.97,0,0,0,283.411,6.945L283.4,2.312a25.386,25.386,0,0,1,16.391,39.373Zm0,0" transform="translate(-251.682 -0.499)"/>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Total Policy Volume</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">{{data.total_policy_count}}</div>
          <!-- <router-link to="/app/dashboard/totalpolicies" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link> -->
      </div>
      <div class="px-6 box pb-4 lg:mt-10 border-b border-solid lg:border-b-0 lg:border-r">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="46.617" height="53.124" viewBox="0 0 46.617 53.124">
            <path fill="#00a859" class="a" d="M64.7,8.771,68.085,2.3A1.572,1.572,0,0,0,66.692,0H52.3a3.1,3.1,0,0,0-3.045,2.442L48.147,7.431A23.309,23.309,0,1,0,64.7,8.771ZM54.665,51.533A21.722,21.722,0,0,1,47.749,9.222L43.586,27.955a1.734,1.734,0,0,0,2.185,2.04l9.668-2.859-6.391,16.04a1.18,1.18,0,0,0,.482,1.46,1.2,1.2,0,0,0,.634.183,1.185,1.185,0,0,0,.887-.4l3.867-4.335a.8.8,0,0,0-1.187-1.059l-2.379,2.667,5.7-14.31A1.409,1.409,0,0,0,55.346,25.5L45.32,28.469a.144.144,0,0,1-.181-.169l5.67-25.513a1.519,1.519,0,0,1,1.492-1.2H66.662L57.8,18.511a1.623,1.623,0,0,0,1.641,2.364l11.8-1.486-.77.863a.784.784,0,0,0-.1.109L55.852,36.645A.8.8,0,1,0,57.039,37.7l13.8-15.469A17.858,17.858,0,1,1,44.78,14.943a.8.8,0,0,0-.882-1.324,19.444,19.444,0,1,0,28.081,7.334l.739-.828a1.428,1.428,0,0,0-1.244-2.368l-1.413.178a19.456,19.456,0,0,0-5.236-4.7.8.8,0,1,0-.832,1.355A17.859,17.859,0,0,1,68.2,18.169L59.246,19.3a.033.033,0,0,1-.033-.048l4.747-9.067a21.721,21.721,0,0,1-9.294,41.352Z" transform="translate(-31.357)"/>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Total Active Policies</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">{{data.active_policy_count}}</div>
          <!-- <router-link to="/app/dashboard/activepolicies" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link> -->
      </div>
      <div class="px-6 box pb-4 border-b border-solid lg:mt-10 lg:border-b-0 lg:border-r">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="54.249" height="53.124" viewBox="0 0 54.249 53.124">
            <path fill="#00a859" class="a" d="M206.339,83.786a.8.8,0,0,0-.795.795V85.7a.795.795,0,1,0,1.589,0V84.581A.8.8,0,0,0,206.339,83.786Z" transform="translate(-183.766 -75.471)"/>
            <path fill="#00a859" class="a" d="M289.255,123.155l.794-.794a.795.795,0,1,0-1.124-1.124l-.794.794a.795.795,0,1,0,1.124,1.124Z" transform="translate(-257.394 -108.746)"/>
            <path fill="#00a859" class="a" d="M323.928,212.443a.795.795,0,1,0,0-1.589H322.8a.795.795,0,1,0,0,1.589Z" transform="translate(-287.891 -189.076)"/>
            <path fill="#00a859" class="a" d="M208.629,331.2v1.123a.795.795,0,1,0,1.589,0V331.2a.795.795,0,1,0-1.589,0Z" transform="translate(-186.524 -295.96)"/>
            <path fill="#00a859" class="a" d="M115.925,295.36a.8.8,0,0,0,1.124,0l.794-.794a.795.795,0,0,0-1.124-1.124l-.794.794A.8.8,0,0,0,115.925,295.36Z" transform="translate(-103.434 -262.705)"/>
            <path fill="#00a859" class="a" d="M80.393,212.443a.795.795,0,1,0,0-1.589H79.27a.795.795,0,1,0,0,1.589Z" transform="translate(-70.16 -189.076)"/>
            <path fill="#00a859" class="a" d="M116.72,123.155a.795.795,0,0,0,1.124-1.124l-.794-.794a.795.795,0,1,0-1.124,1.124Z" transform="translate(-103.434 -108.745)"/>
            <path fill="#00a859" class="a" d="M181.961,149.394l-1.446-1.408a.795.795,0,1,0-1.109,1.139l2.795,2.722a.8.8,0,0,0,1.349-.569v-7.52a.795.795,0,1,0-1.589,0Z" transform="translate(-160.182 -128.377)"/>
            <path fill="#00a859" class="a" d="M45,30.427a22.809,22.809,0,0,0,.144-2.544,22.478,22.478,0,0,0-6.193-15.531A.795.795,0,1,0,37.8,13.446a20.9,20.9,0,0,1,5.757,14.437c0,.677-.034,1.36-.1,2.04a14.458,14.458,0,0,0-3.444-.477c.047-.522.073-1.045.073-1.564a17.512,17.512,0,1,0-34.08,5.686.795.795,0,0,0,1.5-.516A15.925,15.925,0,1,1,38.5,27.883a16.085,16.085,0,0,1-.084,1.623A14.516,14.516,0,0,0,25.264,43.578,15.93,15.93,0,0,1,8.775,35.836a.795.795,0,1,0-1.376.8,17.53,17.53,0,0,0,17.914,8.551,14.389,14.389,0,0,0,.709,3.4A20.984,20.984,0,1,1,22.573,6.9,20.77,20.77,0,0,1,35.535,11.38a.795.795,0,1,0,.983-1.249A22.344,22.344,0,0,0,22.573,5.31a22.573,22.573,0,1,0,4.058,44.781A14.494,14.494,0,0,0,48.088,55.8a.795.795,0,1,0-.915-1.3,12.92,12.92,0,1,1,2.236-2A.795.795,0,1,0,50.6,53.556,14.494,14.494,0,0,0,45,30.427Z" transform="translate(0 -5.31)"/>
            <path fill="#00a859" class="a" d="M357.464,275.993a2.384,2.384,0,1,0-4.768,0v9.489a2.384,2.384,0,0,0,4.768,0Zm-1.589,9.489a.795.795,0,1,1-1.589,0v-9.489a.795.795,0,1,1,1.589,0Z" transform="translate(-315.326 -245.181)"/>
            <path fill="#00a859" class="a" d="M355.08,411.607a2.387,2.387,0,0,0-2.384,2.384V415a2.384,2.384,0,1,0,4.768,0v-1.012A2.387,2.387,0,0,0,355.08,411.607Zm.795,3.4a.795.795,0,1,1-1.589,0v-1.012a.795.795,0,0,1,1.589,0Z" transform="translate(-315.326 -368.558)"/>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Total Inactive Policies</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">{{data.inactive_policy_count}}</div>
          <!-- <router-link to="/app/dashboard/inactivepolicies" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link> -->
      </div>
      <div class="px-6 box mt-10 lg:mt-10 pb-4 border-b border-solid lg:border-b-0 lg:border-r">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="54.392" height="53.986" viewBox="0 0 54.392 53.986">
            <path fill="#00a859" class="a" d="M23.044,8.714a1.807,1.807,0,0,0,1.43-1.767V2.318a1.818,1.818,0,0,0-.653-1.4A1.787,1.787,0,0,0,22.358.529a27.2,27.2,0,0,0,3.424,53.922q.717.036,1.429.036a26.92,26.92,0,0,0,15.556-4.9,1.784,1.784,0,0,0,.754-1.31A1.821,1.821,0,0,0,43,46.831l-3.279-3.277a1.805,1.805,0,0,0-2.268-.233,19.033,19.033,0,1,1-14.4-34.607ZM6.463,29.539A20.839,20.839,0,0,0,38.429,44.846l-.49-.763.5.752,3.292,3.271A25.384,25.384,0,1,1,22.661,2.318L22.65,6.944A20.867,20.867,0,0,0,6.463,29.539Zm0,0" transform="translate(0.002 -0.501)"/>
            <path fill="#00a859" class="a" d="M283.715.527a1.783,1.783,0,0,0-1.464.392,1.817,1.817,0,0,0-.654,1.4V6.945a1.808,1.808,0,0,0,1.431,1.767,19.152,19.152,0,0,1,14.886,18.577,18.912,18.912,0,0,1-2.937,10.135,1.809,1.809,0,0,0,.242,2.257l3.285,3.286a1.819,1.819,0,0,0,1.288.534c.055,0,.111,0,.167-.007a1.784,1.784,0,0,0,1.311-.763A27.2,27.2,0,0,0,283.715.527Zm16.072,41.158L296.5,38.4l.009-.007a20.721,20.721,0,0,0,3.218-11.1A20.97,20.97,0,0,0,283.411,6.945L283.4,2.312a25.386,25.386,0,0,1,16.391,39.373Zm0,0" transform="translate(-251.682 -0.499)"/>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Total Cancelled Policy</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">{{data.cancelled_policy_count}}</div>
          <!-- <router-link to="/app/dashboard/totalpolicies" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link> -->
      </div>
      <a href="/app/dashboard/registeredusers">
      <div class="px-6 box pb-4 border-b border-solid lg:mt-10 lg:border-b-0 lg:border-r">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="48.198" height="40.038" viewBox="0 0 48.198 40.038"><g transform="translate(0 -2.942)">
            <path fill="#00a859" class="a" d="M34.371,34.827V30.718A8.218,8.218,0,0,0,26.153,22.5H9.718A8.218,8.218,0,0,0,1.5,30.718v4.109" transform="translate(0 6.653)"/>
            <path fill="#00a859" class="a" d="M23.936,12.718A8.218,8.218,0,1,1,15.718,4.5a8.218,8.218,0,0,1,8.218,8.218Z" transform="translate(2.218)"/>
            <path fill="#00a859" class="a" d="M36.163,34.755V30.646A8.218,8.218,0,0,0,30,22.7" transform="translate(10.534 6.725)"/>
            <path fill="#00a859" class="a" d="M24,4.7a8.218,8.218,0,0,1,0,15.922" transform="translate(8.317 0.072)"/></g>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Total Registered Users</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">{{data.user_count}}</div>
          <!-- <router-link to="/" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link> -->
      </div>
      </a>
      <!-- <div class="px-6 box pb-4 border-b border-solid lg:mt-10 lg:border-b-0">
          <svg class="mx-auto svg" xmlns="http://www.w3.org/2000/svg" width="58.863" height="58.977" viewBox="0 0 58.863 58.977"><g transform="translate(-0.494)">
            <path fill="#00a859" class="a" d="M358.166,249.819l-.606,3.535a.862.862,0,0,0,1.251.909l3.175-1.669,3.175,1.669a.862.862,0,0,0,1.251-.909l-.606-3.535,2.568-2.5a.862.862,0,0,0-.478-1.471l-3.549-.516-1.587-3.216a.862.862,0,0,0-1.547,0l-1.588,3.216-3.549.516a.862.862,0,0,0-.478,1.471Zm2.155-2.849a.862.862,0,0,0,.649-.472l1.015-2.056L363,246.5a.862.862,0,0,0,.649.472l2.269.33-1.642,1.6a.862.862,0,0,0-.248.763l.388,2.26-2.029-1.067a.862.862,0,0,0-.8,0l-2.03,1.067.388-2.26a.862.862,0,0,0-.248-.763l-1.642-1.6Z" transform="translate(-314.048 -213.852)"/>
            <path fill="#00a859" class="a" d="M42.166,174.673l-.606,3.535a.862.862,0,0,0,1.251.909l3.175-1.669,3.175,1.669a.862.862,0,0,0,1.251-.909l-.606-3.535,2.568-2.5A.862.862,0,0,0,51.9,170.7l-3.549-.516-1.587-3.216a.862.862,0,0,0-1.547,0l-1.588,3.216-3.549.516a.862.862,0,0,0-.478,1.471Zm2.155-2.849a.862.862,0,0,0,.649-.472l1.015-2.056L47,171.353a.862.862,0,0,0,.649.472l2.269.33-1.642,1.6a.862.862,0,0,0-.248.763l.388,2.26-2.029-1.067a.863.863,0,0,0-.8,0l-2.03,1.067.388-2.26a.862.862,0,0,0-.248-.763l-1.642-1.6Z" transform="translate(-34.377 -147.346)"/>
            <path fill="#00a859" class="a" d="M184.979,5.72V6.768a5,5,0,0,0,4.135,4.921v2.419a5.052,5.052,0,0,0-4.153,4.112h-1.207a.863.863,0,0,0,0,1.725h12.379a.863.863,0,0,0,0-1.725h-1.242a5.052,5.052,0,0,0-4.053-4.094V11.689a5,5,0,0,0,4.135-4.921V5.711A4.018,4.018,0,0,0,197.58,4.39a4.975,4.975,0,0,0,.972-3.654A.863.863,0,0,0,197.7,0H182.189a.862.862,0,0,0-.853.736,4.975,4.975,0,0,0,.972,3.654A4.038,4.038,0,0,0,184.979,5.72Zm8.149,12.5h-6.4a3.316,3.316,0,0,1,6.4,0Zm3.145-14.956a2.246,2.246,0,0,1-1.3.7V1.725h1.878A2.717,2.717,0,0,1,196.274,3.263ZM186.7,1.725h6.545V4.805a.875.875,0,0,0-.006.1.853.853,0,0,0,.006.1V6.768a3.272,3.272,0,0,1-6.545,0Zm-1.725,0V3.975a2.282,2.282,0,0,1-1.359-.7,2.71,2.71,0,0,1-.583-1.546Z" transform="translate(-160.018)"/>
            <path fill="#00a859" class="a" d="M58.495,237.416H57.163v-11.3a2.219,2.219,0,0,0-2.216-2.217H40.111a2.2,2.2,0,0,0-.611.088v-18.2a2.219,2.219,0,0,0-2.216-2.217H22.448a2.219,2.219,0,0,0-2.216,2.217v9.165a2.209,2.209,0,0,0-.492-.057H4.9a2.219,2.219,0,0,0-2.216,2.216v6.741a.863.863,0,0,0,1.725,0v-6.741a.492.492,0,0,1,.492-.492H19.74a.492.492,0,0,1,.492.492v20.307H4.412V228.1a.863.863,0,0,0-1.725,0v9.312H1.356a.862.862,0,0,0,0,1.725H58.495a.862.862,0,0,0,0-1.725Zm-36.538,0V205.784a.492.492,0,0,1,.491-.492H37.284a.493.493,0,0,1,.491.492v31.632H21.956Zm17.663,0v-11.3a.493.493,0,0,1,.491-.492H54.947a.493.493,0,0,1,.492.492v11.3Z" transform="translate(0 -180.164)"/></g>
          </svg>
          <p class="text-center mt-4 text-lg font-bold">Top Customers</p>
          <div class="deepblue py-3 px-2 mt-4 text-xl font-bold border-2 border-green-500 border-dashed text-center">80,000</div>
          <router-link to="/app/dashboard/topcustomers" class="block text-center text-green-500 mt-4 font-bold">View Details</router-link>
      </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
export default {
  data(){
    return {
      data: {}
    }
  },
  created(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/admin/dashboard`)
    .then(res=>{
      console.log(res.data.data)
      this.data = res.data.data
      this.$store.commit('endLoading')
    })
    .catch(err=>{
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
  }
}
</script>

<style scoped>
.box{
    margin-bottom: 40px
}
@media only screen and (min-width: 1024px){
    .invoicelink{
        right: 1rem;
    }
    .box svg{
        height: 60px
    }
    .box{
        width: 100%
    }
}
</style>