<template>
  <div class="l-modal">
      <form @submit.prevent="submit" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4" v-on-clickaway="close">
          <div class="grid gap-4">
              <label for="text" class="">Reason: </label>
              <p>{{ reason.reason }}</p>
              <!-- <input type="text" name="text" id="text" v-model="note" class="focus:outline-none rounded border p-2 border-gray-300 border-solid" required> -->
          </div>
          <!-- <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full">Decline Claim</button> -->
      </form>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    props:['reason'],
    methods:{
        close(){
            this.$emit('close')
        }
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style>

</style>