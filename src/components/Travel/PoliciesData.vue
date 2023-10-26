<template>
  <div class="mt-8 md:flex md:gap-6">
      <div class="rounded-lg border border-solid border-gray-500 border-t-0">
          <div class="py-4 px-6 flex items-center gap-6 rounded-lg bg-green-500 ">
              <div class="imgdiv border border-solid border-blue-800">
                  <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
              </div>
              <div class="text-white">
                  <p class="">Vehicle: Third Party</p>
                  <p class="mt-2 font-bold text-lg">13000 users</p>
              </div>
          </div>
          <div class="py-4 px-6  rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
                  </div>
                  <div class="">
                    <p class="">Active Third-Party Plans</p>
                    <p class="mt-2 font-bold text-lg">13000 users</p>
                  </div>
              </div>
              <hr class="mt-4 border-solid border-gray-300">
          </div>
          <div class="py-4 px-6 flex items-center gap-6 rounded-lg bg-white">
              <div class="imgdiv border border-solid border-gray-500">
                  <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
              </div>
              <div class="">
                  <p class="">Inactive Third-Party Plans</p>
                  <p class="mt-2 font-bold text-lg">13000 users</p>
              </div>
          </div>
      </div>
      <div class="rounded-lg border mt-10 lg:mt-0 border-solid border-gray-500 border-t-0">
          <div class="py-4 px-6 flex items-center gap-6 rounded-lg " style="background-color: #131b47">
              <div class="imgdiv border border-solid border-green-500">
                  <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
              </div>
              <div class="text-white">
                  <p class="">Vehicle Cover: Comprehensive</p>
                  <p class="mt-2 font-bold text-lg">13000 users</p>
              </div>
          </div>
          <div class="py-4 px-6  rounded-lg bg-white">
              <div class="flex items-center gap-6">
                  <div class="imgdiv border border-solid border-gray-500">
                    <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
                  </div>
                  <div class="">
                    <p class="">Active Comprehensive Plans</p>
                    <p class="mt-2 font-bold text-lg">13000 users</p>
                  </div>
              </div>
              <hr class="mt-4 border-solid border-gray-300">
          </div>
          <div class="py-4 px-6 flex items-center gap-6 rounded-lg bg-white">
              <div class="imgdiv border border-solid border-gray-500">
                  <img src="@/assets/images/dashboard/Group 65.png" alt="" class="w-full h-full">
              </div>
              <div class="">
                  <p class="">Inactive Comprehensive Plans</p>
                  <p class="mt-2 font-bold text-lg">13000 users</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.imgdiv{
    width: 70px;
    height: 70px;
    border-radius: 50%
}
</style>