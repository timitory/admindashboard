<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/health/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 50.243 37.356"><g transform="translate(-24 -530)">
                  <path fill="#0c4a4d" class="a" d="M0,28.9a3.2,3.2,0,0,0,3.2,3.2H35.177a3.2,3.2,0,0,0,3.2-3.2V17.174H0Zm12.792-4.53a.8.8,0,0,1,.8-.8h9.061a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8H13.591a.8.8,0,0,1-.8-.8Zm-8.528,0a.8.8,0,0,1,.8-.8h4.8a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8h-4.8a.8.8,0,0,1-.8-.8ZM38.375,5.448v3.2H0v-3.2a3.2,3.2,0,0,1,3.2-3.2H35.177A3.2,3.2,0,0,1,38.375,5.448Z" transform="translate(35.867 535.259)"/><g transform="translate(24 530)"><circle fill="#0c4a4d" class="a" cx="13.931" cy="13.931" r="13.931"/>
                  <path fill="#fff" class="b" d="M11.724,19.62a6.842,6.842,0,0,0,.952,3.514,6.968,6.968,0,0,0,2.562,2.548,6.782,6.782,0,0,0,3.5.939,6.928,6.928,0,0,0,3.527-.925A6.763,6.763,0,0,0,24.8,23.161a6.964,6.964,0,0,0,.925-3.527,1.145,1.145,0,0,0-.322-.818,1.025,1.025,0,0,0-.791-.335,1.145,1.145,0,0,0-1.14,1.153,4.762,4.762,0,0,1-4.761,4.761A4.478,4.478,0,0,1,15.4,23a4.626,4.626,0,0,1-1.368-3.366,4.955,4.955,0,0,1,1.06-3.1,3.334,3.334,0,0,1,2.468-1.475l-.51.5a1.144,1.144,0,0,0-.322.778,1.183,1.183,0,0,0,.322.8,1.11,1.11,0,0,0,1.623,0L21.139,14.7a.98.98,0,0,0,.322-.832.893.893,0,0,0-.322-.764L18.7,10.594a1.149,1.149,0,0,0-1.609.013,1.094,1.094,0,0,0-.335.8,1.123,1.123,0,0,0,.322.818l.51.483A6.9,6.9,0,0,0,13.4,15.127,6.748,6.748,0,0,0,11.724,19.62Z" transform="translate(-4.793 -5.518)"/></g></g>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Repayments</p>
          </div>
      </div>
        <Repayment />
  </div>
</template>

<script>
import Repayment from '@/components/Health/RepaymentsTable'
export default {
    components:{
        Repayment
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