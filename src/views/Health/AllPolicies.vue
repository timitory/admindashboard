<template>
  <div class="mt-8">
      <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
          <router-link to="/app/dashboard/health/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </router-link>
          <div class="flex gap-4 item-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="37.65" height="42.5" viewBox="0 0 37.65 42.5"><g transform="translate(-17.126)">
                  <path fill="#0c4a4d" class="a" d="M21.657,37.148a14.316,14.316,0,0,1,8.958-13.26l2.677-5.377a18.826,18.826,0,0,0-2.414,36.766l.515-4.581A14.319,14.319,0,0,1,21.657,37.148Z" transform="translate(0 -15.891)"/>
                  <path fill="#0c4a4d" class="a" d="M185.126,40.229A18.858,18.858,0,0,0,171.38,22.1l-.526,4.578a14.294,14.294,0,0,1,.875,26.773l-2.751,5.411A18.853,18.853,0,0,0,185.126,40.229Z" transform="translate(-130.35 -18.972)"/>
                  <path fill="#0c4a4d" class="a" d="M94.781,18.976a1.047,1.047,0,0,0-1.01-1.542H85.159L87.013,1.317a1.2,1.2,0,0,0-.8-1.269A1.153,1.153,0,0,0,85.882,0a1.13,1.13,0,0,0-1.008.629l-11.647,23.4a1.233,1.233,0,0,0,.051,1.152,1.2,1.2,0,0,0,.963.605h8.5L81,41.3a1.074,1.074,0,0,0,.8,1.159,1.121,1.121,0,0,0,.325.041,1.133,1.133,0,0,0,1.01-.62Z" transform="translate(-48.055 0)"/></g>
              </svg>
              <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">All Policies</p>
          </div>
      </div>
      <p class="mt-2 mb-4 font-bold text-lg">This is the breakdown of policies under health cover</p>
      <PoliciesData />
        <PoliciesTable />
  </div>
</template>

<script>
import PoliciesTable from '@/components/Health/PoliciesTable'
import PoliciesData from '@/components/Health/PoliciesData'
export default {
    components:{
        PoliciesTable, PoliciesData
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