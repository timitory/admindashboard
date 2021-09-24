<template>
  <div class="py-4">
    <div class=" px-3 flex justify-between">
      <font-awesome-icon icon="bars" @click="$store.commit('toggleCollapse')" class="text-xl"/>
      <router-link to="/"><img src="@/assets/logo.svg" alt="" class="logo"></router-link>
    </div>
    <div v-if="$store.state.collapse" class="appmenu absolute" style="background-color:  #00A859">
      <div class="p-4" style="background-color: #1CB16B; border-radius: 0 0 30px 30px">
        <font-awesome-icon icon="times" class="text-white text-2xl" @click="$store.commit('toggleCollapse')" />
        <div class="text-center py-12">
          <div class="imgbox bg-gray-300 mx-auto"></div>
          <p class="text-center mt-6 text-white text-lg font-bold">{{name}}</p>
        </div>
      </div>
      <div class="py-16" style="background-color:  #00A859">
        <ul>
          <li class="text-left pl-8 mb-12 flex items-center">
            <img v-if="$store.state.view == 'dashboard'" src="../assets/images/sidenav/Icon material-dashboard copy.svg" alt="Dashboardicon" class=" inline" style="width:20px">
            <img v-else src="../assets/images/sidenav/Icon material-dashboard.svg" alt="Dashboardicon" class="inline" style="width:20px">
            <router-link to="/app/dashboard/menu" class="ml-4 text-lg" :class="[$store.state.view == 'dashboard' ? 'text-blue-900': 'text-white']">
              Dashboard
            </router-link>
          </li>
          <li class="text-left pl-8 mb-12 flex items-center">
            <img v-if="$store.state.view == 'settings'" src="../assets/images/sidenav/Icon material-settings copy.svg" alt="Dashboardicon" class=" inline" style="width:20px">
            <img v-else src="../assets/images/sidenav/Icon material-settings.svg" alt="Dashboardicon" class="inline" style="width:20px">
            <router-link to="/app/dashboard/settings" class="ml-4 text-lg" :class="[$store.state.view == 'settings' ? 'text-blue-900': 'text-white']">
              Account & Settings
            </router-link>
          </li>
          <li class="text-left pl-8 mb-12 flex items-center">
            <img src="../assets/images/sidenav/Icon metro-switch.svg" alt="Dashboardicon" class="inline" style="width:20px">
            <p @click="logout" class="ml-4 text-lg text-white" >
              Logout
            </p>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    name(){
      return this.$store.state.user.firstname + " " + this.$store.state.user.lastname
    }
  },
  methods:{
    logout(){
      this.$store.commit('startLoading')
      this.$store.dispatch('logoutUser')
      .then(()=>{
        this.$router.push('/login')
        this.$store.commit('endLoading')
      })
    }
  }
}
</script>

<style scoped>
.imgbox{
  width: 80px;
  height: 80px;
  border-radius: 100%;
  /* margin-top: 50px; */
}
.appmenu{
  top: 0;
  width: 100%;
  left: 0;
  z-index: 1002
}
.logo{
  width: 70px
}
</style>