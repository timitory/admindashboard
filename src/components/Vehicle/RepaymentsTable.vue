<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
        <div class="lg:flex lg:justify-between">
            <p class="mt-2 mb-4 font-bold text-lg">This is the Repayment activities associated with the vehicle Cover</p>
            <div class="lg:flex lg:gap-4"> 
                <div class="relative">
                    <input type="text" v-model="searchKeyword" class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z" fill="#2E3A59"></path>
                    </svg>
                </div>
                <div class="items-center flex text-sm mt-4 relative border border-solid">
                    <svg class="cursor-pointer" @click="sorter = ''" v-if="filtered" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="red" d="M8.41417 0.414185L6.99995 1.8284L8.17162 3.00006H4C3.447 3.00006 3 3.44706 3 4.00006V6.59006C3 7.11306 3.213 7.62706 3.583 7.99706L9 13.4141L9 21.0001C9 21.3471 9.18 21.6681 9.475 21.8511C9.635 21.9501 9.817 22.0001 10 22.0001C10.153 22.0001 10.306 21.9651 10.447 21.8951L14.447 19.8951C14.786 19.7251 15 19.3791 15 19.0001L15 13.4141L16.7928 11.6213L19.7279 14.5563L21.1421 13.1421L8.41417 0.414185ZM15.3788 10.2073L13.293 12.2931C13.105 12.4801 13 12.7341 13 13.0001L13 18.3821L11 19.3821V13.0001C11 12.7341 10.895 12.4801 10.707 12.2931L5 6.59006V5.00006L10.1716 5.00006L15.3788 10.2073Z" ></path>
                        <path fill="red" d="M20 3.00006H13.8284L15.8284 5.00006H19.001L19.003 6.58306L18.2072 7.37885L19.6212 8.79285L20.417 7.99706C20.787 7.62706 21 7.11306 21 6.59006V4.00006C21 3.44706 20.553 3.00006 20 3.00006Z" ></path>
                    </svg>
                    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M20 3H4C3.447 3 3 3.447 3 4V6.59C3 7.113 3.213 7.627 3.583 7.997L9 13.414V21C9 21.347 9.18 21.668 9.475 21.851C9.635 21.95 9.817 22 10 22C10.153 22 10.306 21.965 10.447 21.895L14.447 19.895C14.786 19.725 15 19.379 15 19V13.414L20.417 7.997C20.787 7.627 21 7.113 21 6.59V4C21 3.447 20.553 3 20 3ZM13.293 12.293C13.105 12.48 13 12.734 13 13V18.382L11 19.382V13C11 12.734 10.895 12.48 10.707 12.293L5 6.59V5H19.001L19.003 6.583L13.293 12.293Z" fill="#2E3A59"></path>
                    </svg>
                    <button @click="showFilter = !showFilter" class="py-2 px-2">Filter by
                        <font-awesome-icon icon="angle-down" class="ml-2"/>
                    </button>
                    <!-- <div v-if="showFilter" class="filter shadow-lg absolute left-0 bg-white">
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('start')">Start Date</p>
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('end')">End Date</p>
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('repayment')">Repayment Date</p>
                    </div> -->
                </div>
            </div>
        </div>      
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="paginatedPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Customer Name</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Phone Number</th>
              <th class="font-bold">Amount</th>
              <th class="font-bold">Due Date</th>
              <th class="font-bold">Status</th>
              <th class="font-bold">Charge History</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in paginatedPolicies" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{policy.user.firstname}} {{policy.user.lastname}}</td>
              <td>{{policy.user.email}}</td>
              <td>{{policy.user.phone}}</td>
              <td>{{policy.amount}}</td>
              <td>{{policy.end}}</td>
              <td :class="[policy.status == 'Paid' ? 'text-green-500' : 'text-yellow-500']">{{policy.status}}</td>
              <td v-if="policy.charge_history">
               <button @click="viewHistory(policy)" class="text-green-500 underline outline-none focus:outline-none">Charge history</button>
              </td>
              <td v-else>
                <p class="text-opacity-30 text-green-500 underline">Charge History</p>
              </td>
            </tr>
          </tbody>

        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <div class="my-8">
          <t-pagination
          :total-items="totalRows"
          :per-page="perPage"
          :limit="limit"
          :disabled="disabled"
          v-model="currentPage"
          @change="changePage"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"
import axios from "axios"
import baseURL from "@/main"
import TPagination from 'vue-tailwind/dist/t-pagination'
export default {
  components:{
    TPagination
  },
  data(){
    return {
      perPage: 5,
      totalRows: 0,
      disabled: false,
      limit: 5,
      currentPage: 1,
      payments :[
      ],
      val: '',
      sorter: '',
      endDate: '',
      filtered: false,
      searchKeyword: '',
      showFilter: false,
      page: 1,
      // perPage: 20,
      pages: [],
      policies: [],
      unsortedPolicies : []
    }
  },
  computed:{
    paginatedPolicies(){
      return this.paginate(
        this.policies
      )
    },
    // filteredPolicies(){
    //   return  this.paginatedPolicies.filter((policies)=>{
    //     return policies.user.firstname.toLowerCase().includes(this.searchKeyword.toLowerCase()) || policies.user.lastname.toLowerCase().includes(this.searchKeyword.toLowerCase())
    //   })
    // },
    
  },
  watch: {
		policies() {
			this.setPages();
		},
    // sorter(){
    //   if(this.sorter == "start"){
    //     this.filtered = true
    //     this.policies.sort((a, b)=>{
    //     let dateA = new Date(a.start)
    //     let dateB = new Date(b.start)
    //     return (dateB - dateA)
    //     })
          
    //   }else if(this.sorter == 'end'){
    //     this.filtered = true
    //     this.policies.sort((a, b)=>{
    //       let dateA = new Date(a.end)
    //       let dateB = new Date(b.end)
    //       return (dateB - dateA)
    //      })
    //   }
    //   else{
    //     this.filtered = false
    //     this.policies = this.unsortedPolicies
    //   }
    // }
	},
  methods: {
    filter(val){
      this.sorter = val
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
    },
    changePage(num){
      console.log(num)
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/admin/vehicle/repayments`, {params :{page : num}})
      .then(res=>{
        console.log(res.data.data)
        this.totalRows = res.data.data.totalRecord
        this.policies = res.data.data.records
        this.perPage = res.data.data.record_per_page
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    viewHistory(obj){
      this.$store.commit('setRepayment', obj)
      this.$router.push('/app/dashboard/vehicle/repayment/chargehistory')
    }
  },
  mounted(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/admin/vehicle/repayments`)
    .then(res =>{
      console.log(res.data.data)
      this.totalRows = res.data.data.totalRecord
      this.policies = res.data.data.records
      this.perPage = res.data.data.record_per_page
      this.$store.commit('endLoading')
    })
    .catch(err=>{
      this.$store.dispatch('handleError', err)
    })
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
    /* table-layout: fixed; */
  }
  /* th td{
    min-width: 180px
  } */
  thead th:nth-child(1){
    width: 5%; 
  }
  thead th:nth-child(2){
    width: 20%; 
  }
  thead th:nth-child(3){
    width: 20%; 
  }
  thead th:nth-child(4){
    width: 15%; 
  }
  thead th:nth-child(5){
    width: 10%; 
  }
  thead th:nth-child(6){
    width: 10%; 
  }
  thead th:nth-child(7){
    width: 10%; 
  }
  thead th:nth-child(8){
    width: 10%; 
  }
  div.tablecont table{
    width: 100%
  }
}
</style>