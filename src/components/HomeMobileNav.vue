<template>
  <div class="lg:hidden relative pt-6">
      <div class="bg-white px-3 flex justify-between items-center">
        <font-awesome-icon icon="bars" @click="$store.commit('toggleHomeCollapse')" class="text-xl"/>
        <router-link to="/"><img src="@/assets/logo.svg" alt="" style="width: 80px"></router-link>
      </div>
      <div v-if="$store.state.homeCollapse" class="absolute py-4 pb-6 bg-white mobilemenu">
        <div class="px-4 flex justify-between items-center">
          <font-awesome-icon icon="times" class="text-xl" @click="$store.commit('toggleHomeCollapse')"/>
          <router-link to="/"><img src="@/assets/logo.svg" alt="" style="width: 80px"></router-link>
        </div>
        <ul class="mt-5 px-3">
          <li class="text-lg text-center font-semibold">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="text-lg mt-6 py-2 text-center font-semibold">
            <p @click="showAbout = !showAbout">About Us
              <font-awesome-icon icon="angle-down" class="ml-2"/>
            </p>
            <ul v-if="showAbout" class="mt-4">
                <li><router-link to="/faq" class="text-sm">My PaddyCover/FAQ</router-link></li>
                <li class="mt-4"><router-link to="/team" class="text-sm">Team</router-link></li>
            </ul>
          </li>
          <li class="text-lg mt-6 py-2 text-center font-semibold">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="text-lg mt-12 py-2 text-center font-semibold border border-solid border-gray-300 rounded">
            <router-link to="/login" class="text-gray-500">Log in</router-link>
          </li>
          <li class="text-lg mt-6 py-2 text-center font-semibold border border-solid border-green-500 rounded">
            <router-link to="/signup" class="text-green-500">Sign up</router-link>
          </li>
        </ul>
        
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showAbout : false
        }
    }

}
</script>

<style>
.mobilemenu{
  top: 0;
  width: 100%;
  left: 0;
  box-shadow: 0px 9px 45px #00000090;
  z-index: 1002
}
</style>