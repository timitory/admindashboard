<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8" style="min-height: 500px">
        <font-awesome-icon @click="back" icon="times-circle" class="cursor-pointer absolute left-4 top-2 text-green-600 " />
        <div class="lg:flex lg:justify-between">
            <p class="mt-2 mb-4 font-bold text-lg">Charge History for {{repayment.user.firstname}} {{repayment.user.lastname}}</p>
            <div class="lg:flex lg:gap-4"> 
            </div>
        </div>      
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="repayment.charge_history.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Message</th>
              <th class="font-bold">Status</th>
              <th class="font-bold">Charge Time</th>
              <th class="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(charge, index) in repayment.charge_history" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{charge.message}}</td>
              <td :class="[charge.status == 'Success' ? 'text-green-500' : 'text-red-500']">{{charge.status}}</td>
              <td>{{charge.timestamp}}</td>
              <td >
                <button class="bg-green-500 py-2 px-3 text-white rounded">Retry Payment</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
// import axios from "axios"
// import baseURL from "@/main"
export default {
  data(){
    return {
      
    }
  },
  props:['query'],
  computed:{
   ...mapState({
     repayment : state => state.repayment
   })
  },
  watch: {
	
	},
  methods: {
    back(){
      this.$router.go(-1)
    },
    
  },
  mounted(){
    console.log(this.repayment)
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
  th td{
    min-width: 180px
  }
  thead th:nth-child(1){
    width: 13%;
    
  }
  div.tablecont table{
    width: 100%
  }
}
</style>