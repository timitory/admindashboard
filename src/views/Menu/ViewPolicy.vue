<template>
  <div class="mt-8 lg:px-10">
    <h1 class="text-2xl lg:text-2xl text-green-500 font-bold">Dashboard</h1>
    <div class="mt-6">
        <p class="font-bold text-lg lg:text-xl">Hello Admin,</p>
        <p class="mt-2">See below overall information on policies purchased by users.</p>
    </div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white lg:relative" style="box-shadow: 0px 20px 33px #00000029;">
      <font-awesome-icon @click="back" icon="times-circle" class="cursor-pointer absolute left-4 top-2 text-green-600 " />
      <div class="mt-4 flex items-end">
            <div class="px-6">
                <p class="font-bold">Transaction Details</p>
                <p class="mt-2">Transaction ID: #122343344546</p>
            </div>
            <div class="ml-3 w-full lg:flex justify-between items-center">
            <div class=" lg:w-full">
                <hr class="mt-2">
                <hr class="mt-2">
                <hr class="mt-2 border-green-500 bg-green-500 border-2">
            </div>
            </div>
      </div>
      <hr class="mt-6">
      <div class="mt-8">
          <p >Email Address</p>
          <p class="mt-2 lg:mt-4text-green-500 font-bold">{{policy.email}}</p>
      </div>
      <ul class="mt-8">
          <li>
              <p>First name</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.firstname}}</p>
          </li>
          <li>
              <p>Last name</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.lastname}}</p>
          </li>
          <li>
              <p>Policy Number</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">XXXPP3456</p>
          </li>
          <li>
              <p>Total Purchase</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.number}}</p>
          </li>
          <li>
              <p>Policy Type</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.type}}</p>
          </li>
          <li>
              <p>Policy Plan</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.plan}}</p>
          </li>
          <li>
              <p>Policy Cost</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">#50,0000</p>
          </li>
          <li>
              <p>Start-End Date</p>
              <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.start}} - {{policy.end}}</p>
          </li>
      </ul>
      <hr class="mt-6"> 
      <p class="mt-6 text-green-500 underline">Download Invoice</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            policy: {}
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.policy = this.$route.query
        console.log(this.policy)
    }
}
</script>

<style scoped>
li{
    margin-bottom: 20px
}
@media only screen and (min-width: 1024px){
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul li{
        flex: 0 0 25%
        /* width: 20%;
        margin: 0 2.5% */
    }
}
</style>