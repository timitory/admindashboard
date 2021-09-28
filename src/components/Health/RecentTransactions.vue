<template>
  <div class="mt-8">
    <div class="mt-6">
        <p class="mt-2 font-bold text-lg">Recent Transaction for Health Cover</p>
    </div>
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative pb-8" style="box-shadow: 0px 20px 33px #00000029;">
      <!-- <div class="justify-between lg:absolute lg:top-2 lg:right-4 lg:flex lg:gap-4"> 
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
      </div> -->
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="filteredPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">Firstname</th>
              <th class="font-bold">Lastname</th>
              <th class="font-bold">Plan</th>
              <th class="font-bold">Amount</th>
              <th class="font-bold">Date</th>
              <th class="font-bold">Reference</th>
              <th class="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in filteredPolicies" :key="index" class="border border-solid border-gray-300">
              <td>{{policy.firstname}}</td>
              <td>{{policy.lastname}}</td>
              <td>{{policy.plan}}</td>
              <td>{{policy.amount}}</td>
              <td>{{policy.start}}</td>
              <td>Reliance_payback_16340678…</td>
              <td>
                  <router-link :to="{name: 'ViewPolicy', query: policy}" class="text-green-500 underline">Verify Payment</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8"  aria-label="Page navigation example">
          <ul class="w-1/2 mx-auto  flex justify-between" style="max-width: 250px">
            <li class="page-item">
              <button type="button" class="inline text-green-500" v-if="page != 1" @click="page--"> Previous </button>
              <button v-else class="inline text-green-500 opacity-20">Previous</button>
            </li>
            <!-- <li class="page-item">
              <button type="button" class="inline" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber.id" @click="page = pageNumber"> {{pageNumber}} </button>
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
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", amount: '#50,000', status: "Active", start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Melosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Home", status: "Active", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "4"},
        {firstname: "Abiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Home", status: "Inactive",amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "2"},
        {firstname: "Obiwan", lastname: "Telosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Active",amount: '#50,000',  start: "05-06-2021", end: "05-07-2021", number: "10"},
        {firstname: "Obiwan", lastname: "Delosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", start: "05-06-2021",amount: '#50,000',  end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Home", status: "Active", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "25"},
        {firstname: "Ebiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Relosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Vehicle", status: "Active",amount: '#50,000',  start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Home", status: "Active",amount: '#50,000',  start: "05-06-2021", end: "05-07-2021", number: "15"},
        {firstname: "Ubiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "18"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Vehicle", status: "Active", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Gadget", status: "Active",  amount: '#50,000',start: "05-06-2021", end: "05-07-2021", number: "2"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "5"},
        {firstname: "Ebiwan", lastname: "Telosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Vehicle", status: "Active",amount: '#50,000',  start: "05-06-2021", end: "05-07-2021", number: "4"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Active", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "20"},
        {firstname: "Abiwan", lastname: "Nelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Health", status: "Inactive", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "10"},
        {firstname: "Obiwan", lastname: "Pelosi", email: "obiwan@gmail.com", plan: "Paddy Max", type: "Vehicle", status: "Active", amount: '#50,000', start: "05-06-2021", end: "05-07-2021", number: "3"},
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
    width: 13%;
    
  }
  thead th:nth-child(2){
    width: 13%;
    
  }
  thead th:nth-child(3){
    width: 13%;
    
  }
  thead th:nth-child(4){
    width: 13%;
    
  }
  thead th:nth-child(5){
    width: 13%; 
  }
  thead th:nth-child(6){
    width: 20%; 
  }
  thead th:nth-child(7){
    width: 13%; 
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