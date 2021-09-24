<template>
  <div class="pt-6 lg:pl-12 lg:pb-10">
    <section class="mt-8">
      <div class="flex lg:block justify-between">
        <h1 class="text-xl lg:text-2xl text-green-500">Account Setup & Settings</h1>
        <router-link to='/app/dashboard/adduser' class="lg:hidden">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px">
        </router-link>
      </div>
      <div class="mt-4 flex justify-between items-start lg:pr-20">
        <div class="">
          <p class=" text-lg lg:mt-4 font-bold lg:text-xl">Welcome {{name}},</p>
          <p class="lg:mt-2">Below are the necessary steps to get you up to speed, please do fill them accurately.</p>
        </div>
        <router-link to='/app/dashboard/adduser' class="hidden lg:inline">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 50px">
        </router-link>
      </div>
    </section>
    <div class="mt-6">
      <p class="font-bold text-lg lg:text-xl">Bio</p>
      <form @submit.prevent="updatebio">
        <div class="mt-8 lg:flex justify-between formdiv">
          <div class="lg:mr-3 lg:w-full ">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm">First Name</label>
                <input type="text" v-model="firstname" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm">Last Name</label>
                <input type="text" v-model="lastname" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm">Email address</label>
              <input type="email" v-model="email" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4">
              <label class="text-sm">Phone number</label>
              <input type="text" v-model="phone" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
          </div>
          <div class="lg:ml-32 lg:w-full">
            <div class="mt-4 lg:mt-0">
              <label class="text-sm">Home address</label>
              <input type="text" v-model="address" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
          </div>
        </div>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block">Save</button>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full">Save</button>
      </form> 
      <hr class="mt-6">
      <div class="mt-8">
        <p class="font-bold text-lg lg:text-xl">Reset Password</p>
        <form v-if="showPassword" @submit.prevent="resetpassword">
          <div class="mt-8 lg:mt-18 formdiv">
            <div class="mt-4 lg:w-1/3">
              <label class="text-sm">Old password</label>
              <input type="password" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4 lg:w-1/3">
              <label class="text-sm">New password</label>
              <input type="email" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
          </div>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block">Reset password</button>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full">Reset Password</button>
        </form>
        <div v-else>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block" @click="showPassword = true">Change password</button>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full" @click="showPassword = true">Change Password</button>
        </div>
      </div>

      <hr class="mt-6">
      <form @submit.prevent="">
        <div class="mt-8 lg:mt-18">
          <p class="font-bold text-lg lg:text-xl">Card Management</p>
          <p class="mt-2">We would not debit your account until a policy has been issued.</p>
          <div class="lg:flex lg:w-3/4">
            <div class="lg:w-full">
              <div v-for="card in cards" :key="card.id" class="flex justify-between p-4 border border-solid border-gray-200 mt-4">
                <div class="flex w-full">
                  <!-- <img v-if="card.type == 'visa' " src="@/assets/images/payment/visalogo.png" alt="" style="width: 50px">
                  <img v-if="card.type == 'mastercard' " src="@/assets/images/payment/mclogo.png" alt="" style="width: 50px"> -->
                  <p class="font-bold ml-4"><span class="text-2xl">....</span> {{card.number | hide }}</p>
                </div>
                <div class="circle bg-gray-200 cursor-pointer">
                  <font-awesome-icon icon="trash" class="text-red-500" />
                </div>
              </div>
            </div>
            <div class="bg-gray-200 rounded py-20 lg:py-0 lg:ml-3 mt-4 lg:mt-4 lg:w-full text-center flex items-center justify-center">
              <div>
                <p class="text-4xl font-bold">+</p>
                <p class="mt-2">Add new card</p>
              </div>
            </div>
          </div>
        </div>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block">Save</button>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from "@/main"

export default {
  data(){
    return {
      existing: '',
      cards: [
        {number: '123456789098', type: 'mastercard'},
        {number: '123456789099', type: 'visa'}
      ],
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
      showPassword: false
    }
  },
  computed:{
    ...mapState({
      user : state => state.user
    }),
    name(){
      return this.$store.state.user.firstname
    }
  },
  methods:{
    updatebio(){
      this.$store.commit('startLoading')
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        address: this.address
      }
      axios({url: `${baseURL}/profile/update`, data : data, method: 'PATCH'})
      .then(res => {
        console.log(res)
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.$store.commit('setUser', res.data.data)
        if(this.$store.state.addAddress){
          console.log('redirected!!')
          this.$store.commit('addAddress', false)
          this.$router.push('/app/dashboard/buyvehicle/1')
        }
      })
      .catch(err =>{
        console.log(err)
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    }
  },
  mounted(){
    this.$store.commit('changeview', 'settings')
    this.$store.commit('setCollapse', false)
    console.log(this.user)
    this.firstname = this.user.firstname
    this.lastname = this.user.lastname
    this.email = this.user.email
    this.phone = this.user.phone
    this.address = this.user.address
  },
  filters:{
    hide(val){
      return val.slice(8, 12)
    }
  },
}
</script>

<style scoped>
input{
  background-color: #e2f5ec;
}
.filelabel{
  cursor: pointer;
  display: block;
  padding: 10px 10px;
  position: relative;
  background: #131b47;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radiobtn{
  cursor: pointer;
  /* display: block; */
  padding: 8px 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input, .radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.circle{
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  justify-items: center;
}
@media only screen and (min-width: 1024px){
  .formdiv{
    max-width: 80%
  }
}

@media only screen and (min-width: 1280px){
  .formdiv{
    max-width: 70%
  }
}

</style>