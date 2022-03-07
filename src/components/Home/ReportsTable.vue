<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
        <div class="lg:flex lg:justify-between lg:items-end">
            <div class="px-6">
                <svg class="lg:mx-auto svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.617 53.124">
                    <path fill="#00a859" class="a" d="M64.7,8.771,68.085,2.3A1.572,1.572,0,0,0,66.692,0H52.3a3.1,3.1,0,0,0-3.045,2.442L48.147,7.431A23.309,23.309,0,1,0,64.7,8.771ZM54.665,51.533A21.722,21.722,0,0,1,47.749,9.222L43.586,27.955a1.734,1.734,0,0,0,2.185,2.04l9.668-2.859-6.391,16.04a1.18,1.18,0,0,0,.482,1.46,1.2,1.2,0,0,0,.634.183,1.185,1.185,0,0,0,.887-.4l3.867-4.335a.8.8,0,0,0-1.187-1.059l-2.379,2.667,5.7-14.31A1.409,1.409,0,0,0,55.346,25.5L45.32,28.469a.144.144,0,0,1-.181-.169l5.67-25.513a1.519,1.519,0,0,1,1.492-1.2H66.662L57.8,18.511a1.623,1.623,0,0,0,1.641,2.364l11.8-1.486-.77.863a.784.784,0,0,0-.1.109L55.852,36.645A.8.8,0,1,0,57.039,37.7l13.8-15.469A17.858,17.858,0,1,1,44.78,14.943a.8.8,0,0,0-.882-1.324,19.444,19.444,0,1,0,28.081,7.334l.739-.828a1.428,1.428,0,0,0-1.244-2.368l-1.413.178a19.456,19.456,0,0,0-5.236-4.7.8.8,0,1,0-.832,1.355A17.859,17.859,0,0,1,68.2,18.169L59.246,19.3a.033.033,0,0,1-.033-.048l4.747-9.067a21.721,21.721,0,0,1-9.294,41.352Z" transform="translate(-31.357)"/>
                </svg>
                <p class="text-left lg:text-center mt-2 text-xs lg:text-sm font-bold">Total Policies</p>
                <div class="deepblue py-1 px-2 mt-2 text-sm lg:text-base font-bold border-2 border-green-500 border-dashed text-center">{{totalRecords}}</div>
            </div>
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
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('2021')">2021</p>
                        <p class="mb-2 cursor-pointer text-sm" @click="filter('2020')">2020</p>
                    </div>
                </div>
                <button class="items-end flex text-sm mt-4 p-2 relative border border-solid bg-green-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 22H5V20H19V22ZM12 18L6 12L7.41 10.59L11 14.17V2H13V14.17L16.59 10.59L18 12L12 18Z" fill="#fff"></path>
                    </svg>
                    <p class="ml-2 text-white">Export</p>
                </button>
            </div>
        </div>      
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="paginatedPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Purchase Date</th>
              <th class="font-bold">Customer</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Status</th>
              <th class="font-bold">Plan</th>
              <th class="font-bold">Repayments</th>
              <th class="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in paginatedPolicies" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{policy.policy.start}}</td>
              <td>{{policy.policy.name}}</td>
              <td>{{policy.policy.email}}</td>
              <td>
                <span v-if="policy.policy.status == 'Success'" class="rounded text-white text-center p-1 bg-green-500">{{policy.policy.status}}</span>
                <span v-else-if="policy.policy.status == 'Active'" class="rounded text-white text-center p-1 bg-green-500">{{policy.policy.status}}</span>
                <span v-else-if="policy.policy.status == 'Pending'" class="rounded text-white text-center p-1 bg-red-500">{{policy.policy.status}}</span>
                <span v-else class="rounded text-white text-center p-1 bg-red-500">{{policy.policy.status}}</span>  
              </td>
              <td>{{policy.policy.plan}}</td>
              <td>
                <button @click="viewRepayment(policy)" class="text-green-500 underline outline-none focus:outline-none">View</button>
              </td>
              <td>
                  <button @click="view(policy)" class="p-2 bg-green-500 text-white rounded text-sm focus:outline-none">View More</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <div class="mt-8">
          <t-pagination
          :total-items="totalRecords"
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
// import axios from "axios"
// import baseURL from "@/main"
import SinglePolicy from "@/components/Home/SinglePolicy"
import Repayments from "@/components/Home/ViewRepayment"
import TPagination from 'vue-tailwind/dist/t-pagination'
export default {
  components:{
    TPagination, SinglePolicy, Repayments
  },
  props:{
    policies: {
      type: Array,
      required: true
    },
    totalRecords: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      disabled: false,
      limit: 5,
      perPage: 10,
      currentPage: 1,
      val: '',
      searchKeyword: '',
      showFilter: false,
      page: 1,
      pages: [],
      showPolicy: false,
      showRepayment: false,
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
      this.$emit('changePage', num)
    },
    view(obj){
      this.policy = obj
      this.showPolicy = true
    },
    viewRepayment(obj){
      this.policy = obj
      this.showRepayment = true
    },
  },
  mounted(){
   console.log(this.policies)
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
  th td{
      min-width: 180px
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
    width: 12.5%;
    
  }
  thead th:nth-child(6){
    width: 12.5%;
    
  }
  thead th:nth-child(7){
    width: 12.5%;
    
  }
  thead th:nth-child(8){
    width: 12.5%;
    
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