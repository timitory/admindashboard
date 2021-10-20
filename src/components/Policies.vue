<template>
  <div class="mt-10">
      <p><span class="font-bold">Quicks links: </span>access relevant information associated with each policy type</p>
      <div class="mt-6 lg:flex lg:gap-4">
        <router-link class="link flex rounded py-4 justify-center items-center" to="/app/dashboard/health">
          <img src="@/assets/images/dashboard/Image 9.png" alt="" class="">
          <p class="ml-4 font-bold">Health Cover</p>
        </router-link>
        <router-link class="link flex rounded py-4 justify-center items-center" to="/app/dashboard/vehicle">
          <img src="@/assets/images/dashboard/Group 65.png" alt="" class="">
          <p class="ml-4 font-bold">Vehicle Cover</p>
        </router-link>
        <router-link class="link flex rounded py-4 justify-center items-center" to="/app/dashboard/homecontent">
          <img src="@/assets/images/dashboard/Image 10.png" alt="" class="">
          <p class="ml-4 font-bold">Home Cover</p>
        </router-link>
        <router-link class="link flex rounded py-4 justify-center items-center" to="/app">
          <img src="@/assets/images/dashboard/Image 11.png" alt="" class="">
          <p class="ml-4 font-bold">Gadget Cover</p>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.link{
  box-shadow: 0px 20px 33px #00000029;
  margin-bottom: 40px;
}
.link img{
  width: 70px;
  height: 70px
}
@media only screen and (min-width: 1024px){
  .link{
    width: 100%
  }
}
</style>