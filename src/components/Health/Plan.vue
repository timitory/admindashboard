<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
       <div class="lg:flex lg:justify-between">
            <p></p>
            <div class="lg:flex lg:gap-4"> 
                
            </div>
        </div>      
      <div class="overflow-x-auto tablecont">
        <table v-if="paginatedData.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Plan Name</th>
              <th class="font-bold">Underwriter</th>
              <th class="font-bold">Annual Cost</th>
              <th class="font-bold">Quartely Cost</th>
              <th class="font-bold">Monthly Cost</th>
              <th class="font-bold">Annual Profit</th>
              <th class="font-bold">Quartely Profit</th>
              <th class="font-bold">Monthly Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, index) in paginatedData" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{price.planName}}</td>
              <td>{{price.underwriter}}</td>
              <td>{{price.pcAnnualCost/100}}</td>
              <td>{{price.pcQuarterlyCost/100}}</td>
              <td>{{price.pcMonthlyCost/100}}</td>
              <td>{{price.pcAnnualProfit/100}}</td>
              <td>{{price.pcQuarterlyProfit/100}}</td>
              <td>{{price.pcMonthlyProfit/100}}</td>
              
            </tr>
          </tbody>
        </table>
       
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
       
        <nav  class="mt-8" v-if="paginatedData.length > 0" aria-label="Page navigation example">
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
import axios from "axios"

import baseURL from "@/main"
export default {
  components:{
  },
  data(){
    return {
      action:'',
      perPage: 10,
      searchDate: '',
      totalRows: 0,
      disabled: false,
      limit: 5,
      currentPage: 1,
      showPolicy: false,
      showRepayment: false,
      prices: [],
      
      showActive: false,
      val: '',
      sorter: '',
      endDate: '',
      searchKeyword: '',
      showFilter: false,
      page: 1,
      pages: [],
      price: [],
      unsortedPolicies : [],
      
    }
  },
  computed:{
    paginatedData(){
      return this.paginate(
        this.prices
      )
    },
  },
  watch: {
		price() {
			this.setPages();
		},
	},
  methods: {
    selectAction(obj){

      if (this.action == 'remit'){
        this.remittance = obj
        this.showActive = true
        this.action = ''
      }
    
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
      let numberOfPages = Math.ceil(this.remittances.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
         this.pages.push(index);
      }
    },
    paginate (remittances) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  remittances.slice(from, to);
    },
    changePage(num){
      console.log(num)
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/remittance/list`, {params :{page : num}})
      .then(res=>{
        console.log(res.data.data)
        // this.totalRows = res.data.data.totalRecord
        this.remittances = res.data.data
       
        this.action = ''
        //this.perPage = res.data.data.record_per_page
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    search(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/remittance/list/search?search=${this.searchKeyword}`)
      .then(res =>{
        console.log(res.data.data)
        this.remittances = res.data.data  
        this.action = ''
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    filteredSearch(search){
      this.$store.commit('startLoading')

      axios.get(`${baseURL}/remittance/list/search?search=${search}`)
      .then(res =>{
        console.log(res.data.data)
        this.remittances = res.data.data  
        this.action = ''
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })

      this.showFilter = false
      this.searchDate = ''
    },
    getRemittance()
    {
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/admin/hmo/prices`)
      .then(res=>{
        console.log(res.data.data)
        // this.totalRows = res.data.data.totalRecord
        this.prices = res.data.data
       
        this.action = ''
        //this.perPage = res.data.data.record_per_page
        this.$store.commit('endLoading')
    })
    .catch(err=>{
      this.$store.dispatch('handleError', err)
    })
    }
  },
  mounted(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/admin/hmo/prices`)
      .then(res=>{
       
        this.prices = res.data.data
       
        this.action = ''
        
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
  thead th:nth-child(11){
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