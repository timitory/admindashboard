<template>
   <transition name="slide">
        <div class="l-modal" v-if="showPolicy">
            <div class="relative w-full h-full">
                <div class="bg-white claim shadow pt-6 pb-3 absolute px-4 overflow-y-auto" v-on-clickaway="close">
                    <div class="flex items-center ">
                        <button @click="close">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3779 6.96094L6.37793 18.9609" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.37793 6.96094L18.3779 18.9609" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p class="w-full text-center text-black">Claim Details</p>
                    </div>
                    <div class="mt-16">
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Customer</p>
                            <p class="text-black text-sm font-semibold">{{policy.user.lastname}} {{policy.user.firstname}} </p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Email</p>
                            <p class="text-black text-sm font-semibold">{{policy.user.email}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Telephone 1</p>
                            <p class="text-black text-sm font-semibold">{{policy.user.phone}}</p>
                        </div>
                       
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Policy Number</p>
                            <p class="text-black text-sm font-semibold">{{policy.metadata.policy_number}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Plate Number</p>
                            <p class="text-black text-sm font-semibold">{{policy.metadata.plate_number}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Claim Status</p>
                            <p class="text-black text-sm font-semibold">{{policy.status}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Reference</p>
                            <p class="text-black text-sm font-semibold">{{policy.reference}}</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    props:{
        policy: {
            type: Object,
            required: true
        },
        showPolicy : {
            type: Boolean,
            required: true
        },
    },
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
.slide-enter-active{
  animation-name: slide-up;
  animation-duration: .5s;
}
.slide-leave-active{
  animation: slide-up .5s reverse;
  /* transition: opacity .1s ease-out; */
}
@keyframes slide-up {
  0%{
    transform: translateY(400px);
  }
  100%{
    transform: translateY(0);
  }
}
.claim{
    width: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    top: 50px;
    bottom: 0;
    left: 0
}
@media only screen and (min-width: 1024px){
    @keyframes slide-up {
        0%{
            transform: translateX(400px);
        }
        100%{
            transform: translateY(0);
        }
    }
    .claim{
        width: 413px;
        border-radius: 0;
        top: 0;
        right: 0;
        left: auto;
        height: 100%;
    }
}

</style>