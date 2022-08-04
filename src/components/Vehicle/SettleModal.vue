<template>
  <div class="l-modal">
      <form @submit.prevent="submit" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4" v-on-clickaway="close">
          <div class="grid gap-2">
             
              <label for="text" class="">Settle Amount: </label>
                <money 
                    v-model="amount" 
                    v-bind="money" 
                    class="block mt-4 border px-4 py-2 w-full rounded outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required
                >
                </money>
                
          </div>
           
         
          <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full"> Mark as Settled</button>
      </form>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import {Money} from 'v-money'
import axios from "axios"
import baseURL from "@/main"
export default {
     props:['claim'],
    components:{
        Money
    },
    data(){
        return {
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false
            },
            amount: '',
            
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        submit(){
            //this.$emit('submit', this.amount)
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/admin/claim/mark`, data: {
                amount : this.amount * 100,
                claim_id: this.claim.id
            }, method: 'PATCH'})
            .then(()=>{
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: 'Marked as settled'})
            
            })
            .catch(err=>{
            this.$store.commit('endLoading')
            this.$store.commit('setError', {status: true, msg: err.response.data.message})
            // if(err.response.data.message == "dependant already exist"){
            //     this.error.email = true
            // }else{
            //     this.$store.commit('setError', {status: true, msg: err.response.data.message})
            // }
            // console.log(err)
            })
        }
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style>

</style>