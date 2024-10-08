<template>
  <div class="lg:px-10">
    <section class="mt-8">
      <h1 class="text-2xl  lg:text-2xl text-green-500 font-bold">Dashboard</h1>
      <div class="mt-6  lg:flex justify-between">
        <div>
          <p class="font-bold text-lg lg:text-xl">Hello Admin,</p>
          <p class="mt-2">See below overall information on policies purchased by users.</p>
          
        </div>
        <button @click="showFormModal = true" class="flex mt-4 items-center py-2 px-2 space-x-1 rounded text-white" style="background-color: #131B47; max-width: 180px">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19H2C2 15.6863 4.68629 13 8 13C11.3137 13 14 15.6863 14 19H12C12 16.7909 10.2091 15 8 15C5.79086 15 4 16.7909 4 19ZM19 16H17V13H14V11H17V8H19V11H22V13H19V16ZM8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C11.9972 10.208 10.208 11.9972 8 12ZM8 6C6.9074 6.00111 6.01789 6.87885 6.00223 7.97134C5.98658 9.06383 6.85057 9.9667 7.94269 9.99912C9.03481 10.0315 9.95083 9.1815 10 8.09V8.49V8C10 6.89543 9.10457 6 8 6Z" fill="#fff"></path>          </svg>
          <p class="text-sm">Add New Third Party</p>
        </button>
      </div>
    </section>
    <div v-if="showFormModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
        <h2 class="text-lg font-semibold text-gray-700">Add New Third Party</h2>
        <form @submit.prevent="registerThirdParty" class="space-y-4">
          <div class="">
            <label class="text-sm font-bold">Name</label>
            <input v-model="name" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
        </div>
          <div class="">
            <label class="text-sm font-bold">Email</label>
            <input v-model="email" type="email" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            <p v-if="error.email" class="text-red-500 text-sm mt-2">Please enter a valid Email</p>

        </div>
        <div class="">
          <label class="text-sm font-bold">Phone Number</label>
          <input type="tel" name="name" :value="phone" @input="(e) => validatePhoneNumber(e.target.value)"  class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
          <p v-if="error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
      </div>
      <div class="">
        <label class="text-sm font-bold">Password</label>
        <input v-model="password" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
    </div>
          <div class="flex justify-end space-x-4 mt-4">
            <button @click="showFormModal = false" type="button" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 text-center">
        <p class="text-gray-700">Third party successfully registered!</p>
        <button @click="showSuccessModal = false" class="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Close</button>
      </div>
    </div>
    <Dashboard />
    <Policies />
  </div>
</template>

<script>
import Dashboard from "@/components/DashboardCard";
import Policies from "@/components/Policies";
import axios from "axios";
import baseURL from "@/main"

export default {
  components: {
    Dashboard,
    Policies
  },
  data() {
    return {
      showFormModal: false,
      showSuccessModal: false,
      name: "",
      email: "",
      phone: "",
      password:'',
      error:{
        phone:false,
        email:false,
        password:false,

      }
    };
  },
  methods: {
    async registerThirdParty() {
      const thirdPartyData = { name: this.name, email: this.email, phone: this.phone,password:this.password };
      
      try {
        const response = await axios.post(`${baseURL}/company/signup`
        , thirdPartyData);
        if (response.status === 201) {
          this.showFormModal = false;
          this.showSuccessModal = true;
        }
      } catch (error) {
        console.error("Error registering third party:", error);
      }
    },
    validatePhoneNumber(phoneNumber) {
      this.phone = phoneNumber
      const digitsOnly = phoneNumber.replace(/\D/g, '');

      const expectedLength = 11; // Adjust this based on the country or format
      if (digitsOnly.length === expectedLength){
        this.phone = phoneNumber
        this.error.phone = ""
      }else {
        this.error.phone=true
        return
        // this.error.phone = "Invalid Phone Number"
      }
      return digitsOnly.length === expectedLength;
    },
  },
  watch: {
        // phone(){
        //     if(/^\d{11}$/.test(this.telephone_2)){
        //         this.error.phone2 = false;
        //     }else{
        //         this.error.phone2 = true;
        //     }
        // },
        email(){
          const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(this.email)) {
        this.error.email=true
        this.error.email = 'Invalid email address';
       
      }
      else{
        this.error.email=false
        this.error.email=''
      }
        }
        
        
    },
  mounted() {
    this.$store.commit('changeview', 'dashboard');
    this.$store.commit('setCollapse', false);
  }
};
</script>


<style>

</style>