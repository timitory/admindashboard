<template>
  <div class="mt-8 lg:px-10">
    <h1 class="text-2xl lg:text-2xl text-green-500 font-bold">Dashboard: Pet Cover</h1>
    <div class="mt-6">
        <p class="font-bold text-lg lg:text-xl">Hello Admin,</p>
        <p class="mt-2">See below overall information on policies purchased by users.</p>
        <!-- <router-link to="/app/dashboard/vehicle/remittance" class="text-green-500 font-bold underline top-2">View Remittance Schedule</router-link> -->
    </div>
    <router-view></router-view>
    <Policies />
  </div>
</template>

<script>
import Policies from "@/components/Policies"
export default {
  components:{Policies}
}
</script>

<style>

</style>