<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/vehicle/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="36.272" height="36.272" viewBox="0 0 36.272 36.272">
                <path fill="#0c4a4d" class="a" d="M18.207,0A18.207,18.207,0,0,0,0,18.065,18.329,18.329,0,0,0,18.207,36.272,18.136,18.136,0,0,0,18.207,0Zm8.942,24a2.126,2.126,0,0,1-3.007,3.007L18.207,21.07l-6.078,5.938A2.126,2.126,0,0,1,9.123,24l5.937-5.937L9.123,12.128a2.126,2.126,0,0,1,3.007-3.007l6.078,5.938,5.935-5.938a2.126,2.126,0,1,1,3.007,3.007l-5.937,5.937Z"/>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Managed Failed Transactions</p>
          </div>
      </div>
        <FailedTransactions />
  </div>
</template>

<script>
import FailedTransactions from '@/components/Vehicle/FailedTransactionsTable'
export default {
    components:{
        FailedTransactions
    }
}
</script>

<style scoped>
.svg{
    width: 40px;
    height: 25px
}
@media only screen and (min-width: 1024px){
    .svg{
        width: 55px;
        height: 32px
    }
}
</style>