<template>
  <div class="lg:pt-6 lg:pl-12">
    <section class="mt-8">
      <div class="flex lg:block justify-between">
        <h1 class="text-xl lg:text-2xl text-green-500">Dashboard</h1>
        <router-link to='/app/dashboard/adduser' class="lg:hidden">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px">
        </router-link>
      </div>
      <div class="mt-4 lg:flex justify-between items-start lg:pr-20">
        <div class="">
          <p class="lg:mt-4 font-bold lg:text-xl">Add new user</p>
          <p class="lg:mt-2">By adding others under you, they can benefit from various policies.</p>
        </div>
        <router-link to='/app/dashboard/adduser' class="hidden lg:inline">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 50px">
        </router-link>
      </div>
    </section>
    <div class="mt-6 lg:w-1/2">
      <form @submit.prevent="validateForm">
        <div class="flex justify-between">
          <p class="text-sm mt-4 cursor-pointer">
            <font-awesome-icon icon="user-plus" class="text-green-500" />
            Add Dependant
          </p>
        </div>
        <div class="mt-8 ">
          <div class="lg:mr-3 lg:w-full">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm text-left">First Name</label>
                <input type="text" v-model="dependant.firstname" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm text-left">Last Name</label>
                <input type="text" v-model="dependant.lastname" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
            </div>
            <div class="lg:mt-4 lg:flex">
              <div class="mt-4 lg:mt-0 lg:w-full lg:mr-3">
                <label class="text-sm text-left">Email address</label>
                <input type="email" v-model="dependant.email" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <p v-if="error.email" class="text-red-500 text-sm mt-2">You already added a dependant with this email</p>
              </div>
              
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm text-left">Phone number</label>
                <input type="numeric" v-model="dependant.phone" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <p v-if="error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
              </div>
            </div>
          </div>
          <div class="mt-4 lg:w-full">
            <div class="">
              <label class="text-sm">Home address</label>
              <input type="text" v-model="dependant.address" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
            </div>
            <button style="background: #131b47" class="hidden lg:inline-block w-1/3 mt-12 text-white px-12 py-2 rounded focus:outline-none">Add </button>
            <button style="background: #131b47" class="block lg:hidden w-full mt-12 text-white px-12 py-2 rounded focus:outline-none">Add </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import baseURL from "@/main"
import axios from "axios"

export default {
  data(){
    return {
      dependant: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: ""
      },
      error:{
        phone: false,
        email: false
      }
    }
  },
  computed:{
    phone(){
      return this.dependant.phone
    },
    email(){
      return this.dependant.email
    }
  },
  watch:{
    phone(){
      if(/^\d{11}$/.test(this.dependant.phone)){
        this.error.phone = false;
      }else{
        this.error.phone = true;
      }
    },
    email(){
      if(this.email.length > 1){
        this.error.email = false
      }
    }
  },
  methods: {
    validateForm(){
      if(Object.values(this.error).includes(true)){
        return
      }else{
        this.$store.commit('startLoading')
        axios({url: `${baseURL}/dependant/add`, data: this.dependant, method: 'POST'})
        .then(()=>{
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: 'Dependant added successfully'})
          // this.$router.push('/app/dashboard')
          this.dependant = {}
          this.error.phone = false
        })
        .catch(err=>{
          this.$store.commit('endLoading')
          if(err.response.data.message == "dependant already exist"){
            this.error.email = true
          }else{
            this.$store.commit('setError', {status: true, msg: err.response.data.message})
          }
          // console.log(err)
        })
      }
    }
  },
  
}
</script>

<style scoped>
input{
  background-color: #e2f5ec;
}

</style>