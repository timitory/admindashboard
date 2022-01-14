<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
        <div class="lg:flex lg:justify-between">
            <p></p>
            <div class="lg:flex lg:gap-4"> 
                <div class="relative">
                    <input type="text" v-model="searchKeyword" class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z" fill="#2E3A59"></path>
                    </svg>
                </div>
                <div class="items-center flex text-sm mt-4 relative border border-solid">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M20 3H4C3.447 3 3 3.447 3 4V6.59C3 7.113 3.213 7.627 3.583 7.997L9 13.414V21C9 21.347 9.18 21.668 9.475 21.851C9.635 21.95 9.817 22 10 22C10.153 22 10.306 21.965 10.447 21.895L14.447 19.895C14.786 19.725 15 19.379 15 19V13.414L20.417 7.997C20.787 7.627 21 7.113 21 6.59V4C21 3.447 20.553 3 20 3ZM13.293 12.293C13.105 12.48 13 12.734 13 13V18.382L11 19.382V13C11 12.734 10.895 12.48 10.707 12.293L5 6.59V5H19.001L19.003 6.583L13.293 12.293Z" fill="#2E3A59"></path>
                    </svg>
                    <button @click="showFilter = !showFilter" class="py-2 px-2">Filter by
                        <font-awesome-icon icon="angle-down" class="ml-2"/>
                    </button>
                    <div v-if="showFilter" class="filter shadow-lg absolute left-0 bg-white">
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('plan')">By Plan</p>
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('status')">By Status</p>
                    </div>
                </div>
            </div>
        </div>      
      <div class="overflow-x-auto tablecont">
        <table v-if="paginatedPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Purchase Date</th>
              <th class="font-bold">Customer</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Phone Number</th>
              <th class="font-bold">Plan</th>
              <th class="font-bold">Underwriter</th>
              <th class="font-bold">Policy Status</th>
              <th class="font-bold">View Repayments</th>
              <th class="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in paginatedPolicies" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{policy.policy.start}}</td>
              <td>{{policy.policy.enrollee.firstname}} {{policy.policy.enrollee.lastname}}</td>
              <td>{{policy.policy.enrollee.email}}</td>
              <td>{{policy.policy.enrollee.phone}}</td>
              <td>{{policy.policy.vehicle_category}}</td>
              <td>{{policy.policy.underwriter.name}}</td>
              <td>
                <span v-if="policy.policy.status == 'Success'" class="rounded text-white text-center p-1 bg-green-500">{{policy.policy.status}}</span>
                <span v-else-if="policy.policy.status == 'Active'" class="rounded text-white text-center p-1 bg-green-500">{{policy.policy.status}}</span>
                <span v-else-if="policy.policy.status == 'Incomplete'" class="rounded text-white text-center p-1 bg-yellow-500">{{policy.policy.status}}</span>
                <span v-else-if="policy.policy.status == 'Pending'" class="rounded text-white text-center p-1 bg-red-500">{{policy.policy.status}}</span>
                <span v-else class="rounded text-white text-center p-1 bg-red-500">{{policy.policy.status}}</span>
              </td>
              <td>
                <button @click="viewRepayment(policy)" class="text-green-500 underline outline-none focus:outline-none">View</button>
              </td>
              <td>
                  <button @click="view(policy)" class="p-2 bg-green-500 text-white rounded text-sm focus:outline-none">Details</button>
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
    <SinglePolicy v-if="showPolicy" :policy="policy"  @close="showPolicy = false" />
    <Repayments v-if="showRepayment" :policy="policy" @close="showRepayment = false"/>
  </div>
</template>

<script>
// import {mapState} from "vuex"
import axios from "axios"
import baseURL from "@/main"
import SinglePolicy from "@/components/Vehicle/SinglePolicy"
import Repayments from "@/components/Vehicle/ViewRepayment"
import TPagination from 'vue-tailwind/dist/t-pagination'
export default {
  components:{
    TPagination, SinglePolicy, Repayments
  },
  data(){
    return {
      perPage: 10,
      totalRows: 0,
      disabled: false,
      limit: 5,
      currentPage: 1,
      showPolicy: false,
      showRepayment: false,
      policy: {},
      val: '',
      sorter: '',
      endDate: '',
      searchKeyword: '',
      showFilter: false,
      page: 1,
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
  },
  watch: {
		policies() {
			this.setPages();
		},
	},
  methods: {
    filter(val){
      console.log(val)
      this.showFilter = false
    },
    view(obj){
      this.policy = obj
      this.showPolicy = true
    },
    viewRepayment(obj){
      this.policy = obj
      this.showRepayment = true
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
      axios.get(`${baseURL}/admin/vehicle/policy`, {params :{page : num}})
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
  },
  mounted(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/admin/vehicle/policy`)
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
  bottom: -80px;
  width: 100%
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
  th, td{
    min-width: unset
  }
  thead th:nth-child(1){
    width: 5%;
    
  }
  thead th:nth-child(2){
    width: 15%;
    
  }
  thead th:nth-child(3){
    width: 15%;
    
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
  thead th:nth-child(9){
    width: 5%;
    
  }
  thead th:nth-child(10){
    width: 5%;
    
  }
  div.tablecont table{
    width: 100%
  }
}
@media only screen and (min-width: 1400px) {
  .tablecont{
    overflow-x: hidden;
  }
}
</style>