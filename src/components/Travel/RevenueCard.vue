<template>
  <div class="mt-8 md:flex md:gap-6">
        <div class="rounded-lg border border-solid border-gray-500 border-t-0">
            <div class="py-7 px-6 rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/rev.png" alt="" class="w-full h-full">
                  </div>
                  <div class="">
                    <p class="">Total Revenue</p>
                    <p class="mt-2 font-bold text-lg">₦13000</p>
                  </div>
              </div>
              <!-- <hr class="mt-4 border-solid border-gray-300"> -->
          </div>
        </div>

        <div class="rounded-lg border mt-10 lg:mt-0 border-solid border-gray-500 border-t-0">
            <div class="py-7 px-6  rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/rev.png" alt="" class="w-full h-full">
                  </div>
                  
                  <div class="">
                    <p class="">Total PC Revenue</p>
                    <p class="mt-2 font-bold text-lg">{{totalRecords.total_pc_revenue}}</p>
                  </div>
              </div>
              <!-- <hr class="mt-4 border-solid border-gray-300"> -->
          </div>
        </div>

        <div class="rounded-lg border mt-10 lg:mt-0 border-solid border-gray-500 border-t-0">
            <div class="py-7 px-6  rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/rev.png" alt="" class="w-full h-full">
                  </div>
                  <div class="">
                    <p class="">Mayfair Revenue</p>
                    <p class="mt-2 font-bold text-lg">{{totalRecords.total_broker_revenue}}</p>
                  </div>
              </div>
              <!-- <hr class="mt-4 border-solid border-gray-300"> -->
          </div>
        </div>

        <div class="rounded-lg border mt-10 lg:mt-0 border-solid border-gray-500 border-t-0">
            <div class="py-7 px-6  rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/rev.png" alt="" class="w-full h-full">
                  </div>
                  <div class="">
                    <p class="">Underwriter Revenue</p>
                    <p class="mt-2 font-bold text-lg">₦13000</p>
                  </div>
              </div>
              <!-- <hr class="mt-4 border-solid border-gray-300"> -->
          </div>
        </div>
    </div>
</template>

<script>
export default {
props:{
    
    totalRecords: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.imgdiv{
    width: 70px;
    height: 70px;
    border-radius: 50%
}
</style>