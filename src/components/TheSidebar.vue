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
            <svg :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.467 8.467" width="30" height="30">
              <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" d="M 4.625 3.7441406 C 2.6167499 3.7441406 1 5.3608887 1 7.3691406 L 1 20.095703 C 1 22.103955 2.6167499 23.720703 4.625 23.720703 L 7.9550781 23.720703 L 7.9550781 26.347656 C 7.9550781 26.347656 7.9058165 29.785895 11.990234 27.427734 C 14.103776 26.207514 15.768281 25.247103 18.412109 23.720703 L 27.375 23.720703 C 29.38325 23.720703 31 22.103955 31 20.095703 L 31 7.3691406 C 31 5.3608887 29.38325 3.7441406 27.375 3.7441406 L 4.625 3.7441406 z M 15.814453 9.1601562 C 16.011311 9.159854 17.313183 11.315987 17.472656 11.431641 C 17.632097 11.547143 20.08733 12.109788 20.148438 12.296875 C 20.209559 12.484037 18.56054 14.388707 18.5 14.576172 C 18.439298 14.763485 18.662971 17.27264 18.503906 17.388672 C 18.344826 17.504628 16.023063 16.523211 15.826172 16.523438 C 15.629314 16.523777 13.311817 17.512138 13.152344 17.396484 C 12.992795 17.281058 13.209544 14.771071 13.148438 14.583984 C 13.087315 14.396822 11.431673 12.498011 11.492188 12.310547 C 11.552729 12.123271 14.00695 11.553531 14.166016 11.4375 C 14.325098 11.321506 15.617562 9.1604208 15.814453 9.1601562 z M 6.7753906 10.453125 C 6.9110035 10.452936 7.8081092 11.939783 7.9179688 12.019531 C 8.0278055 12.09909 9.7196224 12.486352 9.7617188 12.615234 C 9.8038249 12.744154 8.6667071 14.056287 8.625 14.185547 C 8.5831814 14.314618 8.7365292 16.043299 8.6269531 16.123047 C 8.5173646 16.202946 6.918839 15.527193 6.7832031 15.527344 C 6.6475899 15.527608 5.0512658 16.208654 4.9414062 16.128906 C 4.8314943 16.049385 4.9815495 14.320288 4.9394531 14.191406 C 4.8973465 14.062487 3.7571399 12.75426 3.7988281 12.625 C 3.8405356 12.495967 5.5290958 12.103185 5.6386719 12.023438 C 5.7482623 11.943538 6.6397547 10.453314 6.7753906 10.453125 z M 24.900391 10.453125 C 25.036003 10.452936 25.933109 11.939783 26.042969 12.019531 C 26.152806 12.09909 27.844622 12.486352 27.886719 12.615234 C 27.928825 12.744154 26.791707 14.056287 26.75 14.185547 C 26.708181 14.314618 26.861529 16.043299 26.751953 16.123047 C 26.642365 16.202946 25.043839 15.527193 24.908203 15.527344 C 24.77259 15.527608 23.176266 16.208654 23.066406 16.128906 C 22.956494 16.049385 23.10655 14.320288 23.064453 14.191406 C 23.022347 14.062487 21.88214 12.75426 21.923828 12.625 C 21.965536 12.495967 23.654096 12.103185 23.763672 12.023438 C 23.873262 11.943538 24.764755 10.453314 24.900391 10.453125 z " transform="scale(.26458)"  class="color000 svgShape">
              </path>
            </svg>
            <!-- <svg :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50.243 37.356">
              <g transform="translate(-24 -530)">
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="a" d="M0,28.9a3.2,3.2,0,0,0,3.2,3.2H35.177a3.2,3.2,0,0,0,3.2-3.2V17.174H0Zm12.792-4.53a.8.8,0,0,1,.8-.8h9.061a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8H13.591a.8.8,0,0,1-.8-.8Zm-8.528,0a.8.8,0,0,1,.8-.8h4.8a.8.8,0,0,1,.8.8v2.665a.8.8,0,0,1-.8.8h-4.8a.8.8,0,0,1-.8-.8ZM38.375,5.448v3.2H0v-3.2a3.2,3.2,0,0,1,3.2-3.2H35.177A3.2,3.2,0,0,1,38.375,5.448Z" transform="translate(35.867 535.259)"/>
                <g transform="translate(24 530)"><circle class="a" cx="13.931" cy="13.931" r="13.931"/>
                <path :fill="[$store.state.view == 'settings' ? '#71cea2' : '#fff']" class="b" d="M11.724,19.62a6.842,6.842,0,0,0,.952,3.514,6.968,6.968,0,0,0,2.562,2.548,6.782,6.782,0,0,0,3.5.939,6.928,6.928,0,0,0,3.527-.925A6.763,6.763,0,0,0,24.8,23.161a6.964,6.964,0,0,0,.925-3.527,1.145,1.145,0,0,0-.322-.818,1.025,1.025,0,0,0-.791-.335,1.145,1.145,0,0,0-1.14,1.153,4.762,4.762,0,0,1-4.761,4.761A4.478,4.478,0,0,1,15.4,23a4.626,4.626,0,0,1-1.368-3.366,4.955,4.955,0,0,1,1.06-3.1,3.334,3.334,0,0,1,2.468-1.475l-.51.5a1.144,1.144,0,0,0-.322.778,1.183,1.183,0,0,0,.322.8,1.11,1.11,0,0,0,1.623,0L21.139,14.7a.98.98,0,0,0,.322-.832.893.893,0,0,0-.322-.764L18.7,10.594a1.149,1.149,0,0,0-1.609.013,1.094,1.094,0,0,0-.335.8,1.123,1.123,0,0,0,.322.818l.51.483A6.9,6.9,0,0,0,13.4,15.127,6.748,6.748,0,0,0,11.724,19.62Z" transform="translate(-4.793 -5.518)"/>
                </g>
              </g>
            </svg> -->
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
        <router-link to="/app/review" class="block py-4 text-sm" :class="[$store.state.view == 'settings' ? 'text-green-700': 'text-white']">Review</router-link>
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