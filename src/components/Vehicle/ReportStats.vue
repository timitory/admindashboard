<template>
  <div class="">
      <div class="lg:flex  lg:gap-16">
          <div class="item">
                <p class="font-bold text-2xl lg:text-3xl">3,495</p>
                <p class="text-green-500 mt-2">Active Policies</p>
         </div>
          <div class="item mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">3,495</p>
                <p class="text-green-500 mt-2">Inactive Policies</p>
         </div>
          <div class="item mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">150</p>
                <p class="text-green-500 mt-2">Total Claims</p>
         </div>
      </div>
      <div class="mt-4 lg:mt-8 lg:flex lg:gap-16">
          <div class="item">
                <p class="font-bold text-2xl lg:text-3xl">#20,000,000</p>
                <p class="text-green-500 mt-2">Revenue Generated</p>
         </div>
          <div class="item mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">30%</p>
                <p class="text-green-500 mt-2">Retention Rate</p>
         </div>
          <div class="item mt-4 lg:mt-0">
                <p class="font-bold text-2xl lg:text-3xl">20</p>
                <p class="text-green-500 mt-2">Settled Claims</p>
         </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@media only screen and (min-width: 1024px){
  .item{
    min-width: 180px;
    max-width: 180px
  }
}
</style>