<template>
    <div class="l-modal" @click="close">
        <div class="loading-modal w-full">
            <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6">
                <div class="pt-6 relative">
                    <div class="">
                        <!-- <img src="../../assets/images/ratingimage.svg" alt="" class=" mx-auto w-3/5 img" > -->
                        <p class="pt-4 font-bold">{{ info.name  }}</p>
                        <p class="pt-4 font-bold">{{ info.email  }}</p>
                        <StarRating class="pt-4" :value="info.rate" ></StarRating>
                        <p class="pt-6 font-bold">Description</p>
                        <p class="pt-4 pb-8">{{ info.description  }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import store from '../store';
import StarRating from './Star-rating.vue'
import { mapState } from 'vuex'
export default {
    components: {
  StarRating
},
props: {
    // close
},
data() {
    return {
      value: this.value,
      info: store.state.reviewinfo
    };
  },
  computed: {
    ...mapState({
        reviewinfo: state => state.reviewinfo
    })
  },
    methods: {
        close() {
            this.$emit('close')
            // console.log(info);
            // this.$router.push(`/app/dashboard/managehealth`)
        },
    }

}
</script>
 
<style scoped>
.loader {
    position: relative;
    top: 100px;
    max-width: 600px;
    background-color: #f7f7f7;
}

input {
    background-color: #e2f5ec;
}</style>