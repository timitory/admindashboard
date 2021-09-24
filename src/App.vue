<template>
  <div id="app" :class="[$store.state.showSuccess || $store.state.showError ? 'overflow-y-hidden overflow-x-hidden': '']">
    <router-view/>
    <Loading v-if="$store.state.loading" />
    <Success v-if="$store.state.showSuccess" />
    <Error v-if="$store.state.showError" />
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import Success from '@/components/SuccessModal'
import Error from '@/components/FailureModal'
export default {
  components:{
    Loading, Success, Error
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

:root{
  --greentext: #38bb7d;
  --deepgreentext: #00A859;
  --deepbluetext: #131b47;
}
.nunito{
  font-family: "Nunito", sans-serif
}
#app {
  font-family: 'Nunito', Montserrat, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  height: 100%;
}
.deepblue{
  color: #131b47
}
.l-modal{
    display: block;
    position: fixed;
    z-index: 110;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.3);
  }
  .loading-modal{
    min-height: 350px; 
    
  }

</style>
