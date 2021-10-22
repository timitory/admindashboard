<template>
   <div class="l-modal">
      <div class="loading-modal w-full px-4 md:px-0">
          <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
            <div class="pt-6">
              <div class="flex justify-between">
                <div>
                  <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                    About Home Policy
                  </p>
                </div>
                <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
              </div>
              <div class="mt-8">
                <p class="font-bold">Policy Number</p>
                <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{policy.policy.policy_number}}</p>
            </div>
            <ul class="list mt-8">
                <li>
                    <p>Enrollee</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.name}}</p>
                </li>
                <li>
                    <p>Meter Number</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.meterno}}</p>
                </li>
                <li>
                    <p>Plan</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.plan}}</p>
                </li>
                <li>
                    <p>Payment Frequency</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.payment_frequency}}</p>
                </li>
            </ul>
            <p class="my-4 font-bold">Insured Home items:</p>
            <ul class="items">
                <li v-for="(item, index) in policy.policy_item" :key="index">
                    <p>{{item.name}}</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{item.amount}}</p>
                </li>
            </ul>
            <div class="mt-4">
                <p class="font-bold">Premium: <span class="text-green-500 text-lg">{{policy.policy.amount}}</span></p>
            </div>
            <hr class="mt-6"> 
            <a :href="policy.policy.certificate_no" target="_blank" rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Certificate</a>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    props:['policy'],
    data(){
        return {
            existing: ''
        }
    },
    methods:{
        close(){
          this.$emit('close')
        // console.log('closeee')
        }
    },
    directives: {
        onClickaway: onClickaway,
    },
    mounted(){
        console.log(this.policy)
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  max-width: 1000px
}
.img{
  width: 120px
}
li{
    margin-bottom: 20px
}
@media only screen and (min-width: 1024px){
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul li{
        flex: 0 0 25%
        /* width: 20%;
        margin: 0 2.5% */
    }
    .items{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>