<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/homecontent/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg fill="#0c4a4d" xmlns="http://www.w3.org/2000/svg" width="39.5" height="39.5" viewBox="0 0 39.5 39.5"><path class="a" d="M32.435,4.5H16.065L4.5,16.065V32.435L16.065,44H32.435L44,32.435V16.065ZM24.25,35.881A2.853,2.853,0,1,1,27.1,33.028,2.847,2.847,0,0,1,24.25,35.881Zm2.194-9.436H22.056V13.278h4.389Z" transform="translate(-4.5 -4.5)"/>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Reports</p>
          </div>
      </div>
      <p class="mt-6 mb-4 font-bold text-lg">This report is associated with the HomeContent Cover Policy</p>
      <div class="mt-8 lg:flex lg:gap-24 lg:items-center">
          <Stats />
          <div class="mt-6">
              <DoughnutChart />
          </div>
          
      </div>
      <div class="mt-10 px-2 py-3 rounded" style="background-color: rgba(141,216,181, 0.18)">
          <div class="bg-white rounded">
              <LineChart />
          </div>
      </div>
      <Table :perPage="perPage" :totalRows="totalRows" :policies="policies" />
  </div>
</template>

<script>
import Stats from "@/components/Home/ReportStats"
import DoughnutChart from "@/components/Home/DoughnutChart"
import LineChart from "@/components/Home/LineChart"
import Table from "@/components/Home/ReportsTable"
import axios from "axios"
import baseURL from "@/main"
export default {
    components:{
        Stats, DoughnutChart, LineChart, Table
    },
     data(){
        return {
            year: '',
            perPage: 10,
            totalRows: 0,
            policies: []
        }
    },
    watch:{
        year(){

        }
    },
    mounted(){
        this.$store.commit('startLoading')
        axios.get(`${baseURL}/admin/homecontent/policy`)
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