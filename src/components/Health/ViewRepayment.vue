<template>
   <div class="l-modal">
      <div class="loading-modal w-full px-4 md:px-0">
          <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6 relative" v-on-clickaway="close">
                <p class="font-bold text-xl py-4">All Repayments for 's health policy</p>
                <font-awesome-icon icon="times-circle" class="cursor-pointer absolute top-2 right-2 text-red-500 text-base lg:text-xl" @click="$emit('close')" />
                <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
                    <table v-if="policy.repayment" class="w-full mt-8">
                    <thead>
                        <tr>
                        <th class="font-bold">S/N</th>
                        <th class="font-bold">Amount</th>
                        <th class="font-bold">Payment period</th>
                        <th class="font-bold">Status</th>
                        <th class="font-bold">Charge History</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(repayment, index) in policy.repayment" :key="index" class="border border-solid border-gray-300">
                        <td>{{index + 1}}</td>
                        <td>{{repayment.amount}}</td>
                        <td>{{repayment.end}}</td>
                        <td :class="[repayment.status == 'Paid' ? 'text-green-500' : 'text-yellow-500']">{{repayment.status}}</td>
                        <td v-if="repayment.charge_history">
                        <button @click="viewHistory(repayment)" class="text-green-500 underline outline-none focus:outline-none">Charge history</button>
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
                    
                </div>
          </div>
      </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    props:['policy'],
    data(){
        return {
            existing: ''
        }
    },
    methods:{
        close(){
          this.$emit('close')
        // console.log('closeee')
        },
        viewHistory(obj){
            this.$store.commit('setRepayment', obj)
            this.$emit('close')
            this.$router.push('/app/dashboard/vehicle/repayment/chargehistory')
        }
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  max-width: 1000px;
  min-height: 500px
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

@media only screen and (min-width: 1024px) {

  table{
    /* table-layout: fixed; */
  }
  /* th td{
    min-width: 180px
  } */
  thead th:nth-child(1){
    width: 10%; 
  }
  thead th:nth-child(2){
    width: 20%; 
  }
  thead th:nth-child(3){
    width: 30%; 
  }
  thead th:nth-child(4){
    width: 20%; 
  }
  thead th:nth-child(5){
    width: 20%; 
  }
  div.tablecont table{
    width: 100%
  }
}
</style>