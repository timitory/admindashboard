<template>
  <div>
      <Cards/>
      <Recent />
  </div>
</template>

<script>
import Cards from "@/components/Health/Cards"
import Recent from "@/components/Health/RecentTransactions"
export default {
    components:{
        Cards, Recent
    }
}
</script>

<style>

</style>