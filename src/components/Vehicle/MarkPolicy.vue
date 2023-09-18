<template>
    <div class="l-modal">
        <form @submit.prevent="MarkPolicy(policy)" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4">
            <div class="grid gap-4">
                <label class="">Numbers of Repayment </label>
                <select v-model="repayment_made"
                    class="block mt-4 border px-4 py-2 w-full rounded outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option disabled>0</option>
                    <option v-for="list,index in lists" :key="index" >{{ list }}</option>
                </select>
            </div>
            <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full"> Mark as
                Settled</button>
        </form>
    </div>
</template>
  
<script>
import { directive as onClickaway } from 'vue-clickaway';
//   import {Money} from 'v-money'
import axios from "axios"
import baseURL from "@/main"
export default {
    components: {
        //   Money
    },
    props: ['policy', 'close'],
    data() {
        return {
            lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            repayment_made: 0
        }
    },
    methods: {
        MarkPolicy(obj) {
            this.close()
            this.$store.commit('startLoading');
            let data = {
                user_vehicle_id: obj.policy.policy_id,
                repayment_made: JSON.parse(this.repayment_made)
            }
            axios.post(`${baseURL}/admin/policy/mark`, data)
                .then(res => {
                    console.log(res);
                this.$store.commit('setSuccess', { status: true, msg: res.data.message });
                
                // this.getPolicies();
                this.$store.commit('endLoading');
            })
                .catch(err => {
                this.$store.dispatch('handleError', err);
            });
        }
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>
  
<style></style>