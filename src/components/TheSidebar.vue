<template>
  <div id="sidebar" class="border-r-2 shadow ">
    <div class="nav px-3">
      <div class="imgbox bg-gray-300">
      </div>
      <div class="sidebar-list sidebar-show" id="sidenav">
        <ul class="mt-12 gap-12 sidebar-nav flex flex-col items-center" @click="toggleCollapse">
          <li class="nav-item py-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 27">
              <path :fill="[$store.state.view == 'dashboard' ? '#71cea2' : '#fff']" class="a" d="M4.5,19.5h12V4.5H4.5Zm0,12h12v-9H4.5Zm15,0h12v-15h-12Zm0-27v9h12v-9Z" transform="translate(-4.5 -4.5)"/>
            </svg>
          </li>
          <li class="nav-item py-3 cursor-pointer">
            <svg :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50.243 37.356">
              <g transform="translate(-24 -530)">
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="a" d="M0,28.9a3.2,3.2,0,0,0,3.2,3.2H35.177a3.2,3.2,0,0,0,3.2-3.2V17.174H0Zm12.792-4.53a.8.8,0,0,1,.8-.8h9.061a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8H13.591a.8.8,0,0,1-.8-.8Zm-8.528,0a.8.8,0,0,1,.8-.8h4.8a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8h-4.8a.8.8,0,0,1-.8-.8ZM38.375,5.448v3.2H0v-3.2a3.2,3.2,0,0,1,3.2-3.2H35.177A3.2,3.2,0,0,1,38.375,5.448Z" transform="translate(35.867 535.259)"/>
                <g transform="translate(24 530)"><circle class="a" cx="13.931" cy="13.931" r="13.931"/>
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="b" d="M11.724,19.62a6.842,6.842,0,0,0,.952,3.514,6.968,6.968,0,0,0,2.562,2.548,6.782,6.782,0,0,0,3.5.939,6.928,6.928,0,0,0,3.527-.925A6.763,6.763,0,0,0,24.8,23.161a6.964,6.964,0,0,0,.925-3.527,1.145,1.145,0,0,0-.322-.818,1.025,1.025,0,0,0-.791-.335,1.145,1.145,0,0,0-1.14,1.153,4.762,4.762,0,0,1-4.761,4.761A4.478,4.478,0,0,1,15.4,23a4.626,4.626,0,0,1-1.368-3.366,4.955,4.955,0,0,1,1.06-3.1,3.334,3.334,0,0,1,2.468-1.475l-.51.5a1.144,1.144,0,0,0-.322.778,1.183,1.183,0,0,0,.322.8,1.11,1.11,0,0,0,1.623,0L21.139,14.7a.98.98,0,0,0,.322-.832.893.893,0,0,0-.322-.764L18.7,10.594a1.149,1.149,0,0,0-1.609.013,1.094,1.094,0,0,0-.335.8,1.123,1.123,0,0,0,.322.818l.51.483A6.9,6.9,0,0,0,13.4,15.127,6.748,6.748,0,0,0,11.724,19.62Z" transform="translate(-4.793 -5.518)"/>
                </g>
              </g>
            </svg>
            <!-- <img v-if="$store.state.view == 'settings'" src="../assets/images/sidenav/Icon material-settings copy.svg" alt="settings" class="mb-1 inline" style="width: 20px">
            <img v-else src="../assets/images/sidenav/Icon material-settings.svg" alt="settings" class="mb-1 inline" style="width: 20px"> -->
          </li>
          <li class="nav-item py-3 cursor-pointer">
            <svg :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50.243 37.356">
              <g transform="translate(-24 -530)">
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="a" d="M0,28.9a3.2,3.2,0,0,0,3.2,3.2H35.177a3.2,3.2,0,0,0,3.2-3.2V17.174H0Zm12.792-4.53a.8.8,0,0,1,.8-.8h9.061a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8H13.591a.8.8,0,0,1-.8-.8Zm-8.528,0a.8.8,0,0,1,.8-.8h4.8a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8h-4.8a.8.8,0,0,1-.8-.8ZM38.375,5.448v3.2H0v-3.2a3.2,3.2,0,0,1,3.2-3.2H35.177A3.2,3.2,0,0,1,38.375,5.448Z" transform="translate(35.867 535.259)"/>
                <g transform="translate(24 530)"><circle class="a" cx="13.931" cy="13.931" r="13.931"/>
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="b" d="M11.724,19.62a6.842,6.842,0,0,0,.952,3.514,6.968,6.968,0,0,0,2.562,2.548,6.782,6.782,0,0,0,3.5.939,6.928,6.928,0,0,0,3.527-.925A6.763,6.763,0,0,0,24.8,23.161a6.964,6.964,0,0,0,.925-3.527,1.145,1.145,0,0,0-.322-.818,1.025,1.025,0,0,0-.791-.335,1.145,1.145,0,0,0-1.14,1.153,4.762,4.762,0,0,1-4.761,4.761A4.478,4.478,0,0,1,15.4,23a4.626,4.626,0,0,1-1.368-3.366,4.955,4.955,0,0,1,1.06-3.1,3.334,3.334,0,0,1,2.468-1.475l-.51.5a1.144,1.144,0,0,0-.322.778,1.183,1.183,0,0,0,.322.8,1.11,1.11,0,0,0,1.623,0L21.139,14.7a.98.98,0,0,0,.322-.832.893.893,0,0,0-.322-.764L18.7,10.594a1.149,1.149,0,0,0-1.609.013,1.094,1.094,0,0,0-.335.8,1.123,1.123,0,0,0,.322.818l.51.483A6.9,6.9,0,0,0,13.4,15.127,6.748,6.748,0,0,0,11.724,19.62Z" transform="translate(-4.793 -5.518)"/>
                </g>
              </g>
            </svg>
            <!-- <img v-if="$store.state.view == 'settings'" src="../assets/images/sidenav/Icon material-settings copy.svg" alt="settings" class="mb-1 inline" style="width: 20px">
            <img v-else src="../assets/images/sidenav/Icon material-settings.svg" alt="settings" class="mb-1 inline" style="width: 20px"> -->
          </li>
          <li class="nav-item py-3 cursor-pointer">
            <img src="../assets/images/sidenav/Icon metro-switch.svg" alt="" class="mb-1 inline" style="height: 24px">
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade" >
      <div class="navlist px-3 flex flex-col gap-12 mt-12" v-show="$store.state.collapse">
        <p class="text-white text-sm" style="margin-top: 20px">Admin</p>
        <router-link to="/app/dashboard/" class="block py-4 text-sm" :class="[$store.state.view == 'dashboard' ? 'text-green-700': 'text-white']">Dashboard</router-link>
        <router-link to="/app/dashboard/" class="block py-4 text-sm" :class="[$store.state.view == 'settings' ? 'text-green-700': 'text-white']">Messages</router-link>
        <router-link to="/app/dashboard/vehicle/remittance" class="block py-4 text-sm" :class="[$store.state.view == 'settings' ? 'text-green-700': 'text-white']">Remittance</router-link>
        <p @click="logout" class="cursor-pointer block py-4 text-sm text-white">Logout</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {

  data(){
    return {
      // collapse: false
    }
  },
  computed:{
    // name(){
    //   return this.$store.state.user.firstname + " " + this.$store.state.user.lastname
    // }
  },
  methods: {
    toggleCollapse(){
      this.$store.commit('toggleCollapse');
    },
    logout(){
      this.$store.commit('startLoading')
      this.$store.dispatch('logoutUser')
      .then(()=>{
        this.$router.push('/login')
        this.$store.commit('endLoading')
      })
    }
  },
  
}
</script>

<style scoped>
#sidebar{
  height: 100%;
  display: flex;
  background-color: #71CEA2;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: #71CEA2;
  /* border: 1px solid red; */
  position: fixed;
  top: 0
}
.sidebar-list{
  max-height: calc(100% - 50px);
  overflow-y: auto;
}
.sidebar-nav{
  padding: 0; 
}
.navlist{
  height: 100%;
  background-color: #71CEA2;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  left: 0px;
  /* width: 0px; */
  opacity: 1;
  transition: all 0.3s ease
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav{
  height: 100%;
  background-color: #0C4A4D;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1000
}
.imgbox{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-top: 50px;
}

.collapse-box-enter-active, .collapse-box-leave-active{
  transition: opacity .5s
}
.collapse-box-enter, .collapse-box-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Styling for the sidebar scrollbar
#sidenav::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#sidenav::-webkit-scrollbar
{
	width: 5px;
	background-color: #F5F5F5;
}

#sidenav::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #14801B;
} */

</style>