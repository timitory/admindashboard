<template>
    <div class="l-modal">
       <div class="loading-modal w-full">
           <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
             <div class="pt-6 relative">
                 <span class="text-lg font-bold absolute top-2 right-0 text-red-500 cursor-pointer" @click="close" style="right: -10px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#FF0000"></path>
                     </svg>
                 </span>
                 <div>
                    <p class="planname">
                        {{ info.planName }}
                    </p>
                    <div class="chiAnnualCost">
                        <p class="py-1.5">
                            Chi Annual Price:
                        </p>
                        <p class="py-1.0">
                            
                            ₦{{ info.chiAnnualCost }}
                        </p>
                    </div>
                    <form @submit.prevent="Updateprice">
                        <div class="annualmarkup">
                            <label>Annual Markup Price</label>
                            <!-- <money v-model="pc_annual_cost" v-bind="money" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required></money> -->
                            <input v-model="pc_annual_cost" type="text" class="rounded block mt-2 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                        </div>
                        <div class="py-2">
                            <button class="block w-full lg:w-auto bg-green-500 text-white px-12 py-2 rounded focus:outline-none">
                                Update Price
                            </button>
                        </div>
                    </form>
                 </div>
             </div>
           </div>
       </div>
     </div>
 </template>
 
 <script>
//  import {Money} from 'v-money'
 import { mixin as clickaway } from 'vue-clickaway';
 import axios from 'axios'
import baseURL from "@/main"
 export default {
   mixins: [ clickaway ],
   data(){
     return {
        money: {
            thousands: ',',
            prefix: '₦ ',
            precision: 0,
            masked: false
        },
        pc_annual_cost: '',
        plan_id: this.info.id
     }
   },
   props: [
    'info',
    'close'
   ],
   methods:{
    Updateprice(){
      // console.log(data)
      const data = {
        pc_annual_cost: JSON.parse(this.pc_annual_cost),
        plan_id: this.plan_id
      }
      console.log(data);
      
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/admin/health/price/set`, data, method:'POST' })
      .then(res=>{
          console.log(res)
          this.$store.commit('endLoading')
          this.$router.go(0)
          //console.log(res.data.data.user_vehicle_id)
          //this.$router.push('/app/dashboard/managevehicle')
      })
      .catch(err=>{
          // console.log(err)
          this.$store.dispatch('handleError', err)
      })
      
    },
     
   }
   
 }
 </script>
 
 <style scoped>
 .loader{
   position: relative;
   top: 100px;
   max-width: 420px;
   max-height: 80vh;
   overflow-y: auto;
 }
 input{
   background-color: #e2f5ec;
 }
 .loader::-webkit-scrollbar {
   width: 5px;
 }
 
 /* Track */
 .loader::-webkit-scrollbar-track {
   background: #f1f1f1;
 }
 
 /* Handle */
 .loader::-webkit-scrollbar-thumb {
   background: #888;
 }
 
 /* Handle on hover */
 .loader::-webkit-scrollbar-thumb:hover {
   background: #555;
 }

 .planname {
    font-weight: 700;
 }

 .chiAnnualCost > p:nth-child(1) {
    font-size: 15px;
    font-weight: 700;
 }

 .annualmarkup {
    padding: 1rem 0rem;
 }

 .annualmarkup > label {
    font-size: 15px;
    font-weight: 700;
 }
 @media only screen and (min-width: 768px){
     .loader{
         max-width: 600px;
         top: 50px
     }
 }
 </style>