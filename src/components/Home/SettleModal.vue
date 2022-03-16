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
          <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full">Mark as Settled</button>
      </form>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import {Money} from 'v-money'
export default {
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
            amount: ''
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        submit(){
            this.$emit('submit', this.amount)
        }
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style>

</style>