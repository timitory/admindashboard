<template>
   <div class="l-modal">
      <div class="loading-modal w-full"  v-on-clickaway="close">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6">
            <div class="pt-6 relative">
                <div class="py-4">
                     <h1 class="font-bold text-xl text-center">Proceed to Remit Premium?</h1>   
                     <div class="grid gap-4">
                        <label for="text" class="">Input the Vehicles' Plate Number: </label>
                        <input type="text" name="text" id="text" v-model="namecheck" class="focus:outline-none rounded border p-2 border-gray-300 border-solid" required>
                    </div>
                     <div class="mt-8 md:flex md:w-3/4 md:mx-auto md:items-center gap-6">
                         <button @click="yes" v-if="this.remittance.vehicle.plate_number == this.namecheck" class="focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2">Yes, Proceed</button>
                         <button  v-else class="focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2 cursor-not-allowed">Yes, Proceed</button>
                         <button @click="no" class="mt-4 md:mt-0 block w-full focus:outline-none rounded border border-solid border-red-500 text-red-500 text-white md:px-3 py-2">No, Cancel</button>
                     </div>
                </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import baseURL from "@/main"
import axios from "axios"
export default {
  props:['remittance'],
  data(){
    return {
      namecheck : '',
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    yes(){
      
      this.$store.commit('startLoading')
      axios.post(`${baseURL}/remittance/doreceipt`, {remittance_id : this.remittance.remittance_id})
      .then(res=>{
        console.log(res.data.data)
        this.remittances = res.data.data
        this.$store.commit('endLoading')
        this.close()
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
        this.close()
      })
      
    },
    no(){
      this.$emit('close')
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
  top: 100px;
  max-width: 420px;
}
input{
  background-color: #e2f5ec;
}
</style>