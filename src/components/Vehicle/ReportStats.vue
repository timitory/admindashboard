<template>
  <div class="box">
      <div class="md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-3">
          <div class="item">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.active}}</p>
                <p class="text-green-500 mt-2">Active Policies</p>
         </div>
          <div class="item ">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.success}}</p>
                <p class="text-green-500 mt-2">Successful Policies</p>
         </div>
          <div class="item ">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.incomplete}}</p>
                <p class="text-green-500 mt-2">Incomplete Policies</p>
         </div>
         <div class="item">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.pending}}</p>
                <p class="text-green-500 mt-2">Pending Policies</p>
         </div>
          <div class="item ">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.total_claim}}</p>
                <p class="text-green-500 mt-2">Total Claims</p>
         </div>
          <div class="item ">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.settled_claim}}</p>
                <p class="text-green-500 mt-2">Settled Claims</p>
         </div>
         <div class="item ">
                <p class="font-bold text-2xl lg:text-3xl">{{stats.unsettled_claim_count}}</p>
                <p class="text-green-500 mt-2">Unsettled Claims</p>
         </div>
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
@media only screen and (min-width: 768px){
  .box{
    grid-template-columns: minmax(150px, 1fr);
  }
}
/* @media only screen and (min-width: 1024px){
  .item{
    min-width: 180px;
    max-width: 180px
  }
} */
</style>