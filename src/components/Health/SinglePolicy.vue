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
                        <p class="w-full text-center text-black">User Details</p>
                    </div>
                    <div class="mt-16">
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Customer</p>
                            <p class="text-black text-sm font-semibold">{{policy.surname}} {{policy.firstname}} {{policy.othername}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Email</p>
                            <p class="text-black text-sm font-semibold">{{policy.email}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Telephone 1</p>
                            <p class="text-black text-sm font-semibold">{{policy.telephone_1}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Telephone 2</p>
                            <p class="text-black text-sm font-semibold">{{policy.telephone_2}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Date of Birth</p>
                            <p class="text-black text-sm font-semibold">{{policy.date_of_birth}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Gender</p>
                            <p class="text-black text-sm font-semibold">{{policy.gender_}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">State of origin</p>
                            <p class="text-black text-sm font-semibold">{{policy.state_of_origin}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">LGA</p>
                            <p class="text-black text-sm font-semibold">{{policy.lga}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">State of residence</p>
                            <p class="text-black text-sm font-semibold">{{policy.state_of_residence}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Preferred Hospital</p>
                            <p class="text-black text-sm font-semibold">{{policy.hospital}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Purchase Date</p>
                            <p class="text-black text-sm font-semibold">{{policy.start}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Payment frequency</p>
                            <p class="text-black text-sm font-semibold">{{policy.payment_frequency}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Passport Photo</p>
                            <a :href="policy.passport" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-blue-500">Passport link</a>
                        </div>
                    </div> 
                    <div class="mt-6" v-if="policy.health_category === 'family'">
                        <p class="my-4 text-black font-bold">Spouse Details</p>    
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Spouse name</p>
                            <p class="text-black text-sm font-semibold">{{policy.spouse_surname}} {{policy.spouse_firstname}} {{policy.spouse_othername}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Spouse gender</p>
                            <p class="text-black text-sm font-semibold">{{policy.spouse_gender}}</p>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <p class="text-black text-sm">Spouse date of birth</p>
                            <p class="text-black text-sm font-semibold">{{policy.spouse_date_of_birth}}</p>
                        </div>
                        
                    </div>
                    <ul class="mt-6" v-if="policy.health_category === 'family' && policy.children_count > 0">
                        <p class="my-4 text-black font-bold">Children Details</p> 
                        <li v-for="(child, index) in policy.children" :key="index" class="pb-2 border-b">
                            <div class="flex justify-between items-center mb-6">
                                <p class="text-black text-sm">Child name</p>
                                <p class="text-black text-sm font-semibold">{{child.surname}} {{child.firstname}} {{child.othername}}</p>
                            </div>
                            <div class="flex justify-between items-center mb-6">
                                <p class="text-black text-sm">Spouse gender</p>
                                <p class="text-black text-sm font-semibold">{{child.gender}}</p>
                            </div>
                            <div class="flex justify-between items-center mb-6">
                                <p class="text-black text-sm">Spouse date of birth</p>
                                <p class="text-black text-sm font-semibold">{{child.date_of_birth}}</p>
                            </div>
                        </li>
                    </ul>
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