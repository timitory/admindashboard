<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/vehicle/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg fill="#0c4a4d" xmlns="http://www.w3.org/2000/svg" width="39.5" height="39.5" viewBox="0 0 39.5 39.5"><path class="a" d="M32.435,4.5H16.065L4.5,16.065V32.435L16.065,44H32.435L44,32.435V16.065ZM24.25,35.881A2.853,2.853,0,1,1,27.1,33.028,2.847,2.847,0,0,1,24.25,35.881Zm2.194-9.436H22.056V13.278h4.389Z" transform="translate(-4.5 -4.5)"/>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Revenue and Commission</p>
          </div>
      </div>

    
      <Card />

      
      <Table v-if="showTable" :policies="policies" :totalRecords="totalRecords" v-on:changePage="changePage" />
  </div>
</template>

<script>

import Table from "@/components/Vehicle/RevenueTable"
import Card from "@/components/Vehicle/RevenueCard"
import axios from "axios"
import baseURL from "@/main"
export default {
    components:{
      Table, Card   },
    data(){
        return {
            year: '',
            policies: [],
            showTable: false,
            
            statusId: '',
            plans : [],
            planId: '',
            monthId: null,
            filterYear: null,
            filters: [],
            
            months: [
                {id: 1, name: "Jan"},{id: 2, name: "Feb"}, {id: 3, name: "Mar"}, {id: 4, name: "Apr"}, {id: 5, name: "May"}, {id: 6, name: "Jun"}, {id: 7, name: "Jul"}, {id: 8, name: "Aug"}, {id: 9, name: "Sep"}, {id: 10, name: "Oct"}, {id: 11, name: "Nov"}, {id: 12, name: "Dec"},
            ],
            totalRecords: 0,
            url: ''
        }
    },
   
    methods: {
        
        getPolicies(){
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/admin/revenue`)
            .then(res =>{
            console.log(res.data.data)
            // this.totalRows = res.data.data.totalRecord
            this.policies = res.data.data.records
            this.totalRecords = res.data.data.totalRecord
            
            
            
            this.showTable = true
            
            this.$store.commit('endLoading')
            })
            .catch(err=>{
            this.$store.dispatch('handleError', err)
            })
        },
       
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
                }else if(item == 'plan'){
                    if(url.length == 1){
                        url = url.concat("", `vehicle_category_id=${this.planId}`)
                    }else{
                        url = url.concat("", `&vehicle_category_id=${this.planId}`)
                    }
                }else if(item == 'month'){
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
            axios.get(`${baseURL}/vehicle/report${str}`)
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
        },
        changePage(num){
            this.$store.commit('startLoading')
            this.showChart = false
            // this.showTable = false
            axios.get(`${baseURL}/admin/revenue${this.url}?page=${num}`)
            .then((res)=>{
                this.$store.commit('endLoading')
                
                if(!res.data.data.records){
                    this.policies = []
                }else{
                    this.policies = res.data.data.records
                }
                this.totalRecords = res.data.data.totalRecord
                this.showTable = true
               
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
       this.getPolicies()
       
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