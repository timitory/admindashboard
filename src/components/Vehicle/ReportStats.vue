<template>
  <div class="box">
    <div v-if="tab === 'vehiclereport'" class="md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-3">
      <div class="item">
        <p class="font-bold text-2xl lg:text-3xl">{{ stats.active }}</p>
        <p class="text-green-500 mt-2">Active Policies</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{ stats.success }}</p>
        <p class="text-green-500 mt-2">Successful Policies</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{ stats.incomplete }}</p>
        <p class="text-green-500 mt-2">Incomplete Policies</p>
      </div>
      <div class="item">
        <p class="font-bold text-2xl lg:text-3xl">{{ stats.pending }}</p>
        <p class="text-green-500 mt-2">Pending Policies</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{ stats.total_claim }}</p>
        <p class="text-green-500 mt-2">Total Claims</p>
      </div>
    </div>
    <div v-if="tab === 'claimtable'" class="md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-3">
      <div class="item">
        <p class="font-bold text-2xl lg:text-3xl">{{claimstats.accepted_claim}}</p>
        <p class="text-green-500 mt-2">Accepted Claims</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{claimstats.approved_claim}}</p>
        <p class="text-green-500 mt-2">Approved Claims</p>
      </div>
      <div class="item">
        <p class="font-bold text-2xl lg:text-3xl">{{claimstats.pending_claim}}</p>
        <p class="text-green-500 mt-2">Pending Claims</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{claimstats.settled_claim}}</p>
        <p class="text-green-500 mt-2">Settled Claims</p>
      </div>
      <div class="item ">
        <p class="font-bold text-2xl lg:text-3xl">{{claimstats.total_claim}}</p>
        <p class="text-green-500 mt-2">Claims Count</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    stats: {
      type: Object,
      required: true
    },
    claimstats: {
      type: Object,
      required: true
    }
  },
    computed: {
        ...mapState({
            tab: state => state.tab
        })
    },
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .box {
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