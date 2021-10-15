<template>
   <div class="l-modal">
      <div class="loading-modal w-full px-4 md:px-0">
          <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
            <div class="pt-6">
              <div class="flex justify-between">
                <div>
                  <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                    User:  <span class="font-bold text-green-500">{{policy.user.firstname}} {{policy.user.lastname}}</span>
                  </p>
                </div>
                <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
              </div>
              <div class="mt-8">
                <p class="font-bold">Policy Number</p>
                <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{policy.policy_number}}</p>
            </div>
            <ul class="mt-8">
                <li>
                    <p>User Email</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.user.email}}</p>
                </li>
                <li>
                    <p>User Phone</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.user.phone}}</p>
                </li>
                <li>
                    <p>Vehicle Plates</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.plate_number}}</p>
                </li>
                <li>
                    <p>Vehicle value</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.vehicle_value}}</p>
                </li>
                <li>
                    <p>Policy Type</p>
                    <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.vehicle_category}}</p>
                </li>
            </ul>
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