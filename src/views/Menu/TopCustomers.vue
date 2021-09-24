<template>
  <div class="mt-8 lg:px-10">
    <h1 class="text-2xl lg:text-2xl text-green-500 font-bold">Dashboard</h1>
    <div class="mt-6">
        <p class="font-bold text-lg lg:text-xl">Hello Admin,</p>
        <p class="mt-2">See below overall information on policies purchased by users.</p>
    </div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white lg:relative" style="box-shadow: 0px 20px 33px #00000029; min-height: 1300px">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="justify-between lg:absolute lg:top-2 lg:right-4 lg:flex lg:gap-4">
        <div class="relative">
            <input type="text" v-model="searchKeyword" class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z" fill="#2E3A59"></path>
            </svg>
        </div>
        <div class="items-center flex text-sm mt-4 relative border border-solid">
            <svg class="cursor-pointer" @click="val = ''" v-if="filtered" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="red" d="M8.41417 0.414185L6.99995 1.8284L8.17162 3.00006H4C3.447 3.00006 3 3.44706 3 4.00006V6.59006C3 7.11306 3.213 7.62706 3.583 7.99706L9 13.4141L9 21.0001C9 21.3471 9.18 21.6681 9.475 21.8511C9.635 21.9501 9.817 22.0001 10 22.0001C10.153 22.0001 10.306 21.9651 10.447 21.8951L14.447 19.8951C14.786 19.7251 15 19.3791 15 19.0001L15 13.4141L16.7928 11.6213L19.7279 14.5563L21.1421 13.1421L8.41417 0.414185ZM15.3788 10.2073L13.293 12.2931C13.105 12.4801 13 12.7341 13 13.0001L13 18.3821L11 19.3821V13.0001C11 12.7341 10.895 12.4801 10.707 12.2931L5 6.59006V5.00006L10.1716 5.00006L15.3788 10.2073Z" ></path>
                <path fill="red" d="M20 3.00006H13.8284L15.8284 5.00006H19.001L19.003 6.58306L18.2072 7.37885L19.6212 8.79285L20.417 7.99706C20.787 7.62706 21 7.11306 21 6.59006V4.00006C21 3.44706 20.553 3.00006 20 3.00006Z" ></path>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M20 3H4C3.447 3 3 3.447 3 4V6.59C3 7.113 3.213 7.627 3.583 7.997L9 13.414V21C9 21.347 9.18 21.668 9.475 21.851C9.635 21.95 9.817 22 10 22C10.153 22 10.306 21.965 10.447 21.895L14.447 19.895C14.786 19.725 15 19.379 15 19V13.414L20.417 7.997C20.787 7.627 21 7.113 21 6.59V4C21 3.447 20.553 3 20 3ZM13.293 12.293C13.105 12.48 13 12.734 13 13V18.382L11 19.382V13C11 12.734 10.895 12.48 10.707 12.293L5 6.59V5H19.001L19.003 6.583L13.293 12.293Z" fill="#2E3A59"></path>
            </svg>
          <button @click="showFilter = !showFilter" class="py-2 px-2">Filter by
            <font-awesome-icon icon="angle-down" class="ml-2"/>
          </button>
          <div v-if="showFilter" class="filter shadow-lg absolute left-0 bg-white">
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Health')">Health</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Vehicle')">Vehicle</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Home')">Home-content</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Gadget')">Gadget</p>
          </div>
        </div>
      </div>
      <div class="mt-4 lg:mt-0 flex items-end">
        <div class="px-6">
            <svg class="lg:mx-auto svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.863 58.977"><g transform="translate(-0.494)">
                <path fill="#00a859" class="a" d="M358.166,249.819l-.606,3.535a.862.862,0,0,0,1.251.909l3.175-1.669,3.175,1.669a.862.862,0,0,0,1.251-.909l-.606-3.535,2.568-2.5a.862.862,0,0,0-.478-1.471l-3.549-.516-1.587-3.216a.862.862,0,0,0-1.547,0l-1.588,3.216-3.549.516a.862.862,0,0,0-.478,1.471Zm2.155-2.849a.862.862,0,0,0,.649-.472l1.015-2.056L363,246.5a.862.862,0,0,0,.649.472l2.269.33-1.642,1.6a.862.862,0,0,0-.248.763l.388,2.26-2.029-1.067a.862.862,0,0,0-.8,0l-2.03,1.067.388-2.26a.862.862,0,0,0-.248-.763l-1.642-1.6Z" transform="translate(-314.048 -213.852)"/>
                <path fill="#00a859" class="a" d="M42.166,174.673l-.606,3.535a.862.862,0,0,0,1.251.909l3.175-1.669,3.175,1.669a.862.862,0,0,0,1.251-.909l-.606-3.535,2.568-2.5A.862.862,0,0,0,51.9,170.7l-3.549-.516-1.587-3.216a.862.862,0,0,0-1.547,0l-1.588,3.216-3.549.516a.862.862,0,0,0-.478,1.471Zm2.155-2.849a.862.862,0,0,0,.649-.472l1.015-2.056L47,171.353a.862.862,0,0,0,.649.472l2.269.33-1.642,1.6a.862.862,0,0,0-.248.763l.388,2.26-2.029-1.067a.863.863,0,0,0-.8,0l-2.03,1.067.388-2.26a.862.862,0,0,0-.248-.763l-1.642-1.6Z" transform="translate(-34.377 -147.346)"/>
                <path fill="#00a859" class="a" d="M184.979,5.72V6.768a5,5,0,0,0,4.135,4.921v2.419a5.052,5.052,0,0,0-4.153,4.112h-1.207a.863.863,0,0,0,0,1.725h12.379a.863.863,0,0,0,0-1.725h-1.242a5.052,5.052,0,0,0-4.053-4.094V11.689a5,5,0,0,0,4.135-4.921V5.711A4.018,4.018,0,0,0,197.58,4.39a4.975,4.975,0,0,0,.972-3.654A.863.863,0,0,0,197.7,0H182.189a.862.862,0,0,0-.853.736,4.975,4.975,0,0,0,.972,3.654A4.038,4.038,0,0,0,184.979,5.72Zm8.149,12.5h-6.4a3.316,3.316,0,0,1,6.4,0Zm3.145-14.956a2.246,2.246,0,0,1-1.3.7V1.725h1.878A2.717,2.717,0,0,1,196.274,3.263ZM186.7,1.725h6.545V4.805a.875.875,0,0,0-.006.1.853.853,0,0,0,.006.1V6.768a3.272,3.272,0,0,1-6.545,0Zm-1.725,0V3.975a2.282,2.282,0,0,1-1.359-.7,2.71,2.71,0,0,1-.583-1.546Z" transform="translate(-160.018)"/>
                <path fill="#00a859" class="a" d="M58.495,237.416H57.163v-11.3a2.219,2.219,0,0,0-2.216-2.217H40.111a2.2,2.2,0,0,0-.611.088v-18.2a2.219,2.219,0,0,0-2.216-2.217H22.448a2.219,2.219,0,0,0-2.216,2.217v9.165a2.209,2.209,0,0,0-.492-.057H4.9a2.219,2.219,0,0,0-2.216,2.216v6.741a.863.863,0,0,0,1.725,0v-6.741a.492.492,0,0,1,.492-.492H19.74a.492.492,0,0,1,.492.492v20.307H4.412V228.1a.863.863,0,0,0-1.725,0v9.312H1.356a.862.862,0,0,0,0,1.725H58.495a.862.862,0,0,0,0-1.725Zm-36.538,0V205.784a.492.492,0,0,1,.491-.492H37.284a.493.493,0,0,1,.491.492v31.632H21.956Zm17.663,0v-11.3a.493.493,0,0,1,.491-.492H54.947a.493.493,0,0,1,.492.492v11.3Z" transform="translate(0 -180.164)"/></g>
            </svg>
            <p class="text-left lg:text-center mt-2 text-xs lg:text-sm font-bold">Top Customers</p>
            <div class="deepblue py-1 px-2 mt-2 text-sm lg:text-base font-bold border-2 border-green-500 border-dashed text-center">3,000</div>
        </div>
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <div class=" lg:w-full">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="filteredPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">Firstname</th>
              <th class="font-bold">Lastname</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Policy Type</th>
              <th class="font-bold">Number of Purchase</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in filteredPolicies" :key="index" class="border border-solid border-gray-300">
              <td>{{policy.firstname}}</td>
              <td>{{policy.lastname}}</td>
              <td>{{policy.email}}</td>
              <td>{{policy.type}}</td>
              <td>{{policy.number}}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8" v-if="filteredPolicies.length > 0" aria-label="Page navigation example">
          <ul class="w-1/2 mx-auto  flex justify-between" style="max-width: 250px">
            <li class="page-item">
              <button type="button" class="inline text-green-500" v-if="page != 1" @click="page--"> Previous </button>
              <button v-else class="inline text-green-500 opacity-20">Previous</button>
            </li>
            <!-- <li class="page-item">
                <button type="button" class="inline text-green-500" v-for="(pageNumber, index) in pages.slice(page-1, page+5)" @click="page = pageNumber" :key="index"> {{pageNumber}} </button>
            </li> -->
            <li class="page-item">
              <button type="button" @click="page++" v-if="page < pages.length" class="inline text-green-500"> Next </button>
              <button v-else class="inline text-green-500 opacity-20">Next</button>
            </li>
          </ul>
        </nav>	
        
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"
// import axios from "axios"
// import baseURL from "@/main"
export default {
  data(){
    return {
      payments :[
      ],
      val: '',
      filtered: false,
      searchKeyword: '',
      showFilter: false,
      page: 1,
      perPage: 20,
      pages: [],
      policies: []
    }
  },
  computed:{
    filteredPayments(){
      return this.paginate( 
        this.payments.filter((obj)=>{
          return obj.policy.includes(this.val)
        })
      )
    },
    paginatedPolicies(){
        return this.paginate(
            this.policies.filter((obj)=>{
                return obj.type.includes(this.val)
            })
        )
    },
    filteredPolicies(){
       return  this.paginatedPolicies.filter((policies)=>{
            return policies.firstname.toLowerCase().includes(this.searchKeyword.toLowerCase()) || policies.lastname.toLowerCase().includes(this.searchKeyword.toLowerCase())
        })
    }
  },
watch: {
    policies() {
        this.setPages();
    },
    val(){
        if(this.val !== ""){
            this.filtered = true
        }else{
            this.filtered = false
        }
    }
},
  methods: {
    filter(val){
      this.val = val
      this.page = 1
      // console.log(this.val)
      this.showFilter = false
    },
    setPages () {
        let numberOfPages = Math.ceil(this.policies.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
            this.pages.push(index);
        }
        console.log(numberOfPages)
	},
    paginate (policies) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  policies.slice(from, to);
    }
  },
  mounted(){
      this.policies = [
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Health, Home", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Melosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Home", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "4"},
        {firstname: "Abiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Home, Vehicle", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "2"},
        {firstname: "Obiwan", lastname: "Telosi", email: 'add@gmail.com',  plan: "Paddy Max", type: "Health", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "10"},
        {firstname: "Obiwan", lastname: "Delosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Health, Vehicle", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Health", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Home, Health", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "25"},
        {firstname: "Ebiwan", lastname: "Pelosi", email: 'add@gmail.com',plan: "Paddy Max", type: "Health", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Relosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Vehicle", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Home", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "15"},
        {firstname: "Ubiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Health", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "18"},
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Vehicle", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: 'add@gmail.com', plan: "Paddy Max", type: "Gadget", status: "Inactive", start: "05-06-2021", end: "05-07-2021", number: "2"},
      ]
    // .then(res=>{
    //   for(let arr in res.data.data){
    //     this.payments = this.payments.concat(res.data.data[arr])
    //   }
    // })
    // .catch(err=>{
    //   this.$store.dispatch('handleError', err)
    // })
  }
}
</script>

<style scoped>
input{
    background-color: #e2f5ec;
}
table{
  
}

th, td {
  text-align: left;
  padding: 8px;
  min-width: 120px
}

.tablecont::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar
{
  margin-top: 20px;
  height: 2px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar-thumb
{
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:#14801B;
}
.filter{
  bottom: -140px
}
.filter p:hover{
  background-color: blue;
  color: white
}
.filter p{
  padding: 5px 10px;
}
.svg{
    width: 25px;
    height: 25px
}
@media only screen and (min-width: 1024px) {
    .svg{
        width: 30px;
        height: 30px
    }
  table{
    table-layout: fixed;
  }
  thead th:nth-child(1){
    width: 20%;
    
  }
  thead th:nth-child(2){
    width: 20%;
    
  }
  thead th:nth-child(3){
    width: 20%;
    
  }
  thead th:nth-child(4){
    width: 20%;
    
  }
  thead th:nth-child(5){
    width: 20%; 
  }
  th, td {
  /* min-width: 80px */
  }
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
}
</style>