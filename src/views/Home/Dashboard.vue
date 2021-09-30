<template>
  <div>
      <Cards/>
      <Recent />
  </div>
</template>

<script>
import Cards from "@/components/Home/Cards"
import Recent from "@/components/Home/RecentTransactions"
export default {
    components:{
        Cards, Recent
    }
}
</script>

<style>

</style>