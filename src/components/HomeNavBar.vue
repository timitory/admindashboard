<template>
  <div class="">
    <MobileNav />
    <div class="py-4 hidden lg:block">
      <div class="flex justify-between items-center pl-12 pr-8 border-b border-solid">
        <nav class="py-2">
          <ul class="flex gap-8">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li class="relative" :class="[$route.name == 'Team' || $route.name == 'FAQs' ? 'router-link-active' : '']" @mouseover="showAbout = true" @mouseleave="showAbout = false">
              About us 
              <font-awesome-icon  icon="angle-down" class="ml-2"/>
              <div v-if="showAbout" class="bg-white rounded absolute py-6 px-6 -left-16 top-6 showAbout shadow-md" style="width: 200px">
                <ul>
                  <li>
                    <router-link to="/faq" class="block faq text-sm">
                      My PaddyCover/FAQ
                    </router-link>
                  </li>
                  <li class="mt-6">
                    <router-link to="/team" class="block team text-sm" >
                      Team
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <router-link to="/products">Products</router-link>
            </li>
          </ul>
        </nav>
        <div class=""><img src="@/assets/logo.svg" alt="" class="logo"></div>
        <div class="flex justify-between items-center py-2">
          <router-link to="/login" class="mr-3">Log in</router-link>
          <router-link to="/signup" class="border border-solid text-green-500 border-green-500 py-1 px-4 ml-3 sign rounded-md">Sign up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileNav from "@/components/HomeMobileNav"
export default {
  components:{MobileNav}, 
  data(){
    return {
      showAbout : false
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 1024px){
  .showAbout{
    z-index: 100000
  }
  .logo{
    width: 70px
  }
  .router-link-active{
    color: #00381D;
    font-weight: bold;
    position: relative
  }
  .router-link-active::after{
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00381D;
    /* border: 1px solid red */
  }
  .sign{
    color: #00A859
  }
  .faq::after, .team::after, .sign::after{
    content: "";
    opacity: 0
  }
}
</style>