<template>
    <div class="l-modal">
        <div class="loading-modal w-full px-4 md:px-0">
            <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
                <div class="pt-6">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                                About Pet Policy
                            </p>

<!--                            <button v-if="policy.policy.receipt_image" type="button"-->
<!--                                class="flex mt-4 items-center py-2 px-2 rounded text-white"-->
<!--                                style="background-color: #131B47; max-width: 180px" @click="openmodal">Mark-->
<!--                                Policy</button>-->
                        </div>
                        <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl"
                            @click="$emit('close')" />
                    </div>
<!--                    <div class="mt-8">-->
<!--                        <p class="font-bold">Policy Number</p>-->
<!--                        <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{ policy.policy_number }}</p>-->
<!--                    </div>-->
                    <ul class="mt-8">
                        <li>
                            <p>Enrollee</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.enrollee.name}}</p>
                        </li>
                        <li>
                            <p>Email</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.enrollee.email }}</p>
                        </li>
                        <li>
                            <p>Identification Number</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.id_no }}</p>
                        </li>
                        <li>
                            <p>Breed Type</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.breed_type }}</p>
                        </li>
                        <li>
                            <p>Age</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.age }}</p>
                        </li>
                        <li>
                            <p>Health Status</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.health_status }}</p>
                        </li>
                        <li>
                            <p>Medication Recieved</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.medication_received }}</p>
                        </li>
                        <li>
                            <p>Acquisition Cost</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.acquisition_cost }}</p>
                        </li>
                        <li>
                            <p>Maintenance Cost</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.metadata.maintenance_cost }}</p>
                        </li>
<!--                        <li>-->
<!--                            <p>Vehicle Color</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_color }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>Year of Make</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.year_of_make }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>Occupation</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.occupation }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>Date of birth</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.date_of_birth }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>State of residence</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.state }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>LGA</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.lga }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>License Number</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.driver_license }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>Flood Cover</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.flood_cover }}</p>-->
<!--                        </li>-->
                    </ul>
                    <div class="mt-4">
                        <p class="font-bold">{{ policy.payment_frequency }} Premium: <span
                                class="text-green-500 text-lg">{{ policy.amount }}</span></p>
                    </div>
                    <div class="mt-4">
                        <p class="font-bold">Total Premium: <span
                                class="text-green-500 text-lg">{{ policy.total_amount }}</span></p>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import axios from "axios"
import baseURL from "@/main"
// import MarkPolicy from './MarkPolicy.vue';
export default {
    props: ['policy', 'showmarkpolicy'],
    data() {
        return {
            existing: '',
        };
    },
    methods: {
        openmodal() {
            this.showmarkpolicy()
        },
        close() {
            this.$emit('close');
            // console.log('closeee')
        },
        
        MarkPolicy(obj) {
            this.$store.commit('startLoading');
            axios.post(`${baseURL}/admin/policy/mark`, { user_vehicle_id: obj.policy.policy_id })
                .then(res => {
                this.$store.commit('setSuccess', { status: true, msg: res.data.message });
                this.getPolicies();
                this.$store.commit('endLoading');
            })
                .catch(err => {
                this.$store.dispatch('handleError', err);
            });
        }
    },
    directives: {
        onClickaway: onClickaway,
    },
    // components: { MarkPolicy }
}
</script>

<style scoped>
.loader {
    position: relative;
    top: 5px;
    max-width: 1000px
}

.img {
    width: 120px
}

li {
    margin-bottom: 20px
}

@media only screen and (min-width: 1024px) {
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    ul li {
        flex: 0 0 25%;
        /* width: 20%;
        margin: 0 2.5% */
        margin: 0 5% 0 0
    }
}</style>