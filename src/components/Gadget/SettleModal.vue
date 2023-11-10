<template>
  <div class="l-modal">
      <form @submit.prevent="submit" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4" v-on-clickaway="close">
          <div class="grid gap-2">
             
              <label for="text" class="">Settle Amount: </label>
                <money 
                    v-model="data.amount" 
                    v-bind="money" 
                    class="block mt-4 border px-4 py-2 w-full rounded outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required
                >
                </money>
                
          </div>
          <div class="grid gap-4">
                <label for="text" class="">Upload reciept: </label>
                <input id="receipt" type="file" ref="receipt" v-on:change="idUpload"
                    class="focus:outline-none rounded border p-2 border-gray-300 border-solid" required>
            </div>
          <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full"> Mark as Settled</button>
      </form>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import {Money} from 'v-money'
// import axios from "axios"
// import baseURL from "@/main"
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
            data: {
                amount: '',
                reciept: ''
            }
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        submit(){
            //this.$emit('submit', this.amount)
            this.$emit('submit', this.data)
        },
        idUpload() {
            this.idImageName = this.$refs.receipt.files[0].name
            // this.error.signature = false
            let fileToLoad = this.$refs.receipt.files[0];
            let fileReader = new FileReader();
            let vm = this.data
            fileReader.onload = function (fileLoadedEvent) {
                vm.reciept = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style>

</style>