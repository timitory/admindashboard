<template>
  <div class="relative">
    <section class="bg-white px-6 lg:pr-12 lg:pl-0">
      <div class="lg:flex lg:justify-between lg:pt-12 lg:items-start flexcont">
        <div class=" mt-20 lg:mt-0 w-full lg:block ">
          <div class="relative">
            <img src="@/assets/images/landingpage/Welcome circle.svg" alt="">
            <img src='../assets/images/landingpage/Image 4.png' alt="" class="img img1 absolute" style="">
            <img src='../assets/images/landingpage/Image 5.png' alt="" class="img img2 absolute" style="">
            <img src='../assets/images/landingpage/Image 7.png' alt="" class="img img3 absolute" style=""> 
            <div class="innertext text-center">
              <img src="@/assets/images/landingpage/Welcome Text.svg" alt="" class="welcome">
              <p class="text-center text-green-500 md:text-2xl">ADMIN ACCESS</p>
            </div>
          </div>
        </div>
        <form @submit.prevent="validateForm" class="w-full lg:ml-40 mt-12 lg:mt-0">
          <h1 class="greent text-3xl lg:text-5xl font-extrabold" style="font-family: 'Montserrat'">Log in</h1>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Email Address</label>
            <input type="email" v-model="user.email" class="mt-2 blue-bg w-full py-2 px-3 rounded outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
          </div>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Password</label>
            <div class="mt-2 blue-bg w-full rounded relative">
              <input type="password" v-model="user.password" ref="password" class="w-full py-2 px-3 rounded blue-bg outline-none ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
              <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
            </div>
          </div>
          <!-- <div class="mt-4 flex items-center">
            <label class="text-sm">Remember me</label>
            <input type="checkbox" v-model="remember" class="ml-2">
          </div> -->
          <p class="text-red-500 mt-4">{{errorMsg}}</p>
          <button class="mt-6 rounded focus:outline-none bg-green-500 py-2 w-full lg:w-4/5 text-white">Proceed</button>
          <!-- <div class="mt-4">
            <p class="text-sm">Don't have an account? <router-link to="/signup" class="greent font-bold">Register</router-link></p>
            <router-link to="/forgotpassword" class="greent mt-8 md:mt-0 text-sm">Forgot password?</router-link>
          </div> -->
        </form>
      </div>
    </section>
    <Footer class="bottom-0"/>
  </div>
</template>
<script>
import Footer from "@/components/WaveFooter"
// import baseURL from "@/main"
// import axios from "axios"

export default {
  components: {
    Footer
  },
  data(){
    return {
      showEye: true,
      user: {
        email: "",
        password: "",
      },
      // remember: false,
      errorMsg: ""
    }
  },
  methods:{
    validateForm(){
      // this.$router.push('/app')
      this.$store.commit('startLoading')
      this.$store.dispatch('loginUser', this.user)
      .then(res=>{
        console.log(res)
        this.$store.commit('endLoading')
        this.$router.push('/app')
      })
      .catch(err=>{
        // this.errorMsg = err.data.message
        // if(err.data.message == 'Please verify account first'){
        //   this.$router.push('/verifyotp')
        //   this.$store.commit('setError', {status: true, msg: err.data.message})
        // }
        this.$store.commit('endLoading')
        console.log(err)
        // this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.showEye = true
    }
  },
  created(){
    this.$store.commit('endLoading')
    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
      
    }
  }
}
</script>

<style scoped>
.greent{
  color: #2CB675
}
.blue-bg{
  background-color: #E2F5EC;
}
.img{
  z-index: 100
}
.img1{
  width: 170px; top: -40px; left: 70px
}
.img2{
  width: 150px; top: 100px; left: -40px 
}
.img3{
  width: 150px; top: 100px; right: -40px
}
.innertext{
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  margin: auto;    
}
.welcome{
  width: 70%;
  margin: 0 auto
}
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
  display: inline;
  -ms-display: none
}
@media only screen and (min-width: 768px){
  .img1{
    width: 300px; top: -60px; left: 0; right: 0; margin: 0 auto
  }
  .img2{
    width: 300px; top: 0; bottom:0; margin: auto; 
  }
  .img3{
    width: 300px; top: 0; bottom:0; margin: auto; 
  }
  .innertext{
    bottom: 120px
  }
}
@media only screen and (min-width: 1024px){
  .flexcont{
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 30px
  }
  
  .img{
    z-index: 100
  }
  
  .img1{
    width: 270px; top: -60px; 
  }
  .img2{
    width: 220px; top: 100px; left: -50px; margin: 0
  }
  .img3{
    width: 220px; top: 100px; right: -60px; margin: 0
  }
  .innertext{
    bottom: 120px
  }
}
</style>