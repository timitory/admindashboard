<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
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
              <td>{{policy.policy.customer.firstname}} {{policy.policy.customer.lastname}}</td>
              <td>{{policy.policy.customer.email}}</td>
              <td>{{policy.policy.customer.phone}}</td>
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
    <SinglePolicy v-if="showPolicy" :policy="policy" :showmarkpolicy="open" @close="showPolicy = false" />
    <Repayments v-if="showRepayment" :policy="policy" @close="showRepayment = false"/>
    <MarkPolicy v-if="showMarkpolicy" :policy="policy" :close="close"  @close="showMarkpolicy = false" />
  </div>
</template>

<script>
// import {mapState} from "vuex"
// import axios from "axios"
// import baseURL from "@/main"
import SinglePolicy from "@/components/Vehicle/SinglePolicy"
import Repayments from "@/components/Vehicle/ViewRepayment"
import TPagination from 'vue-tailwind/dist/t-pagination'
import MarkPolicy from "./MarkPolicy.vue"
export default {
  components:{
    TPagination, SinglePolicy, Repayments,
    MarkPolicy
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
      // policies: [],
      unsortedPolicies : [],
      showMarkpolicy: false
    }
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
    open() {
            this.showMarkpolicy = true
        },
        close() {
            this.showMarkpolicy = false
        },
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
      this.$emit('changePage', num)
      // this.$store.commit('startLoading')
      // axios.get(`${baseURL}/admin/vehicle/policy`, {params :{page : num}})
      // .then(res=>{
      //   console.log(res.data.data)
      //   this.totalRows = res.data.data.totalRecord
      //   this.policies = res.data.data.records
      //   this.perPage = res.data.data.record_per_page
      //   this.$store.commit('endLoading')
      // })
      // .catch(err=>{
      //   this.$store.dispatch('handleError', err)
      // })
    },
  },
  mounted(){
    
    this.perPage = 10
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