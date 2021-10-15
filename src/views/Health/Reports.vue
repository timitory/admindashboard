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
      <div class="mt-8 lg:flex lg:gap-24 lg:items-center">
          <Stats />
          <div class="mt-6">
              <DoughnutChart />
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
              <LineChart />
          </div>
      </div>
      <Table />
  </div>
</template>

<script>
import Stats from "@/components/Health/ReportStats"
import DoughnutChart from "@/components/Health/DoughnutChart"
import LineChart from "@/components/Health/LineChart"
import Table from "@/components/Health/ReportTable"
export default {
    components:{
        Stats, DoughnutChart, LineChart, Table
    },
    data(){
        return {
            year : ''
        }
    },
    watch:{
        year(){

        }
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