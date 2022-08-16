<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/health/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg fill="#0c4a4d" xmlns="http://www.w3.org/2000/svg" width="39.5" height="39.5" viewBox="0 0 39.5 39.5"><path class="a" d="M32.435,4.5H16.065L4.5,16.065V32.435L16.065,44H32.435L44,32.435V16.065ZM24.25,35.881A2.853,2.853,0,1,1,27.1,33.028,2.847,2.847,0,0,1,24.25,35.881Zm2.194-9.436H22.056V13.278h4.389Z" transform="translate(-4.5 -4.5)"/>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Reports</p>
          </div>
      </div>
      <p class="mt-6 mb-4 font-bold text-lg">This report is associated with the Health Cover Policy</p>
       <p class="font-bold">Filter options :</p>
      <form @submit.prevent="filter" >
          <div class="grid lg:grid-cols-2 gap-4" style="max-width: 650px">
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="underwriter" >
                    <p>Underwriter : </p>
                    <select v-model="underwriterId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(underwriter, index) in underwriters" :key="index" :value="underwriter.id">{{underwriter.name}}</option>
                    </select>
                    </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="status" >
                    <p>Status : </p>
                    <select v-model="statusId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(status, index) in statuses" :key="index" :value="status.id">{{status.name}}</option>
                    </select>
                </div>
                <!-- <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="plan" >
                    <p>Plans : </p>
                    <select v-model="planId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(plan, index) in plans" :key="index" :value="plan.id">{{plan.name}}</option>
                    </select>
                </div> -->
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="month" >
                    <p>Months : </p>
                    <select v-model="monthId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(month, index) in months" :key="index" :value="month.id">{{month.name}}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="year"  >
                    <p>Year : </p>
                    <input type="text" v-model="filterYear" class="border px-2 focus:outline-none">
                </div>
            </div>
            <button class="bg-green-500 py-2 px-6 rounded text-white text-sm mt-4">Filter</button> <br>
            
      </form>
      <button class="bg-green-500 py-2 px-6 rounded text-white text-sm mt-4" @click="reset">Reset Filter</button>
      <div class="mt-8 lg:flex lg:gap-24 lg:items-center">
          <Stats :stats="stats" />
          <div class="mt-6">
              <DoughnutChart :piechartData="piechartData" v-if="showChart"/>
          </div>
          
      </div>
      <div class="mt-10 px-2 py-3 rounded relative" style="background-color: rgba(141,216,181, 0.18)">
          <div class="absolute right-10 top-4">
              <select class="w-full" v-model="year">
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                  <option value="">2018</option>
              </select>
          </div>
          <div class="bg-white rounded">
              <LineChart :linechartData="linechartData" v-if="showChart"/>
          </div>
      </div>
      <Table v-if="showTable" :policies="policies" :totalRecords="totalRecords" v-on:changePage="changePage"/>
  </div>
</template>

<script>
import Stats from "@/components/Health/ReportStats"
import DoughnutChart from "@/components/Health/DoughnutChart"
import LineChart from "@/components/Health/LineChart"
import Table from "@/components/Health/ReportTable"
import axios from "axios"
import baseURL from "@/main"
export default {
    components:{
        Stats, DoughnutChart, LineChart, Table
    },
    data(){
        return {
            year : '',
            policies: [],
            stats: {},
            piechartData: {},
            linechartData: {},
            showChart: false,
            showTable: false,
            underwriters: [],
            underwriterId: '',
            statusId: '',
            plans : [],
            planId: '',
            monthId: null,
            filterYear: null,
            filters: [],
            statuses: [
                {id: 1, name: 'Active'},
                {id: 5, name: 'Success'},
                {id: 12, name: 'Pending'},
                {id: 19, name: 'Incomplete'},
            ],
            months: [
                {id: 1, name: "Jan"},{id: 2, name: "Feb"}, {id: 3, name: "Mar"}, {id: 4, name: "Apr"}, {id: 5, name: "May"}, {id: 6, name: "Jun"}, {id: 7, name: "Jul"}, {id: 8, name: "Aug"}, {id: 9, name: "Sep"}, {id: 10, name: "Oct"}, {id: 11, name: "Nov"}, {id: 12, name: "Dec"},
            ],
            totalRecords: 0,
            url: ''
        }
    },
    watch:{
        year(){

        }
    },
    methods: {
        reset(){
            window.location.reload();
            // this.$store.commit('startLoading')
            // this.year = ''
            // this.filterYear = null
            // this.monthId = null
            // this.underwriterId = ''  
            // this.statusId = ''
            // this.planId = ''
            // this.filters = []
            // this.getPolicies()
            // this.getUnderwriters()
            // this.$store.commit('endLoading')
        },
        getPolicies(){
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/health/report`)
            .then(res =>{
            
            // this.totalRows = res.data.data.totalRecord
            this.policies = res.data.data.all_policies
            this.totalRecords = res.data.data.total_records
            
            this.stats = {
                active : res.data.data.active_policy_count,
                // incomplete: res.data.data.incomplete_policy_count,
                // pending: res.data.data.pending_policy_count,
                success: res.data.data.success_policy_count,
                // total_claim: res.data.data.claim_count,
                // settled_claim: res.data.data.settled_claim_count
            }
            this.showChart = true
            this.showTable = true
            this.piechartData = res.data.data.plan_chart
            this.linechartData = res.data.data.monthly_policies
            this.$store.commit('endLoading')
            })
            .catch(err=>{
            this.$store.dispatch('handleError', err)
            })
        },
        getUnderwriters(){
            axios.get(`${baseURL}/underwriter`)
            .then((res)=>{
                // console.log(res.data.data)
                this.underwriters = res.data.data
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        },
        // getPlans(){
        //     axios.get(`${baseURL}/vehicle/categories?uid=${this.underwriterId}`)
        //     .then((res)=>{
        //         this.plans = res.data.data.categories
        //     })
        //     .catch(err=>{
        //     this.$store.dispatch('handleError', err)
        //     })
        // },
        filter(){
            if(this.filters.length == 0)  return this.$store.commit('setError', {status: true, msg: 'check the boxes to apply any filter'})
            let url = '?'
            this.filters.map( (item) => {
                if(item === 'underwriter'){
                    if(url.length == 1){
                        url = url.concat("", `underwriter_id=${this.underwriterId}`)
                    }else{
                        url = url.concat("&", `underwriter_id=${this.underwriterId}`)
                    }
                }else if(item == 'status'){
                    if(url.length == 1){
                        url = url.concat("", `status_id=${this.statusId}`)
                    }else{
                        url = url.concat("", `&status_id=${this.statusId}`)
                    }
                // }else if(item == 'plan'){
                //     if(url.length == 1){
                //         url = url.concat("", `vehicle_category_id=${this.planId}`)
                //     }else{
                //         url = url.concat("", `&vehicle_category_id=${this.planId}`)
                //     }
                }
                else if(item == 'month'){
                    if(url.length == 1){
                        url = url.concat("", `month=${this.monthId}`)
                    }else{
                        url = url.concat("", `&month=${this.monthId}`)
                    }
                }else if(item == 'year'){
                    if(url.length == 1){
                        url = url.concat("", `year=${this.filterYear}`)
                    }else{
                        url = url.concat("", `&year=${this.filterYear}`)
                    }
                }
            })
            this.url = url
            this.getFilteredResults(url)
        },
        getFilteredResults(str){
            this.$store.commit('startLoading')
            this.showChart = false
            this.showTable = false
            axios.get(`${baseURL}/health/report${str}`)
            .then((res)=>{
                this.$store.commit('endLoading')
                console.log(res.data.data)
                if(!res.data.data.all_policies){
                    this.policies = []
                }else{
                    this.policies = res.data.data.all_policies
                }
                this.totalRecords = res.data.data.total_records
                this.stats = {
                    active : res.data.data.active_policy_count,
                    // incomplete: res.data.data.incomplete_policy_count,
                    // pending: res.data.data.pending_policy_count,
                    success: res.data.data.success_policy_count,
                    // total_claim: res.data.data.claim_count,
                    // settled_claim: res.data.data.settled_claim_count
                }
                this.showChart = true
                this.showTable = true
                this.piechartData = res.data.data.policy_type
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        changePage(num){
            this.$store.commit('startLoading')
            this.showChart = false
            // this.showTable = false
            axios.get(`${baseURL}/health/report${this.url}?page=${num}`)
            .then((res)=>{
                this.$store.commit('endLoading')
                console.log(res.data.data)
                if(!res.data.data.all_policies){
                    this.policies = []
                }else{
                    this.policies = res.data.data.all_policies
                }
                this.totalRecords = res.data.data.total_records
                this.stats = {
                    active : res.data.data.active_policy_count,
                    incomplete: res.data.data.incomplete_policy_count,
                    pending: res.data.data.pending_policy_count,
                    success: res.data.data.success_policy_count,
                    total_claim: res.data.data.claim_count,
                    settled_claim: res.data.data.settled_claim_count
                }
                this.showChart = true
                this.showTable = true
                this.piechartData = res.data.data.policy_type
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
       this.getPolicies()
       this.getUnderwriters()
    }
}
</script>

<style scoped>
.svg{
    width: 40px;
    height: 25px
}
@media only screen and (min-width: 1024px){
    .svg{
        width: 55px;
        height: 32px
    }
}
</style>