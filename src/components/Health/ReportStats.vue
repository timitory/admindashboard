<template>
  <div class="">
      <div class="lg:flex  lg:gap-16">
          <div class="">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.active}}</p>
                <p class="text-green-500 mt-2">Active Policies</p>
         </div>
          <!-- <div class=" mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.success}}</p>
                <p class="text-green-500 mt-2">Inactive Policies</p>
         </div> -->
         <div class=" mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.success}}</p>
                <p class="text-green-500 mt-2">Successful Policies</p>
         </div>
      </div>
      <div class="mt-4 lg:mt-8 lg:flex lg:gap-16">
          <!-- <div class="">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.incomplete}}</p>
                <p class="text-green-500 mt-2">Revenue Generated</p>
         </div>
          <div class="mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">30%</p>
                <p class="text-green-500 mt-2">Retention Rate</p>
         </div> -->
      </div>
      
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>


</style>