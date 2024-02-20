<template>
    <div class="l-modal">
        <div class="loading-modal w-full px-4 md:px-0">
            <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
                <div class="pt-6">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                                About Vehicle Policy
                            </p>

                            <button v-if="policy.policy.receipt_image" type="button"
                                class="flex mt-4 items-center py-2 px-2 rounded text-white"
                                style="background-color: #131B47; max-width: 180px" @click="openmodal">Mark
                                Policy</button>
                        </div>
                        <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl"
                            @click="$emit('close')" />
                    </div>
                    <div class="mt-8">
                        <p class="font-bold">Policy Number</p>
                        <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{ policy.policy.policy_number }}</p>
                    </div>
                    <ul class="mt-8">
                        <li>
                            <p>Enrollee</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.customer.firstname }}
                                {{ policy.policy.customer.lastname }}</p>
                        </li>
                        <li>
                            <p>Vehicle make</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_make }}</p>
                        </li>
                        <li>
                            <p>Vehicle model</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_model }}</p>
                        </li>
                        <li>
                            <p>Vehicle value</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_value }}</p>
                        </li>
                        <li>
                            <p>Plate Number</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.plate_number }}</p>
                        </li>
                        <li>
                            <p>Engine Number</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.engine_no }}</p>
                        </li>
                        <li>
                            <p>Chasis No</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.chasis_no }}</p>
                        </li>
                        <li>
                            <p>Vehicle Class</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_class }}</p>
                        </li>
                        <li>
                            <p>Vehicle Usage</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_usage }}</p>
                        </li>
                        <li>
                            <p>Vehicle Color</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.vehicle_color }}</p>
                        </li>
                        <li>
                            <p>Year of Make</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.year_of_make }}</p>
                        </li>
                        <li>
                            <p>Occupation</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.occupation }}</p>
                        </li>
                        <li>
                            <p>Date of birth</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.date_of_birth }}</p>
                        </li>
                        <li>
                            <p>State of residence</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.state }}</p>
                        </li>
                        <li>
                            <p>LGA</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.enrollee.lga }}</p>
                        </li>
                        <li>
                            <p>License Number</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.driver_license }}</p>
                        </li>
                        <li>
                            <p>Flood Cover</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.flood_cover }}</p>
                        </li>
                      <li>
                        <p>Payment Frequency</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.payment_frequency }}</p>
                      </li>
                    </ul>
                    <div class="mt-4">
                        <p class="font-bold">{{ policy.policy.payment_frequency }} Premium: <span
                                class="text-green-500 text-lg">{{ policy.policy.amount }}</span></p>
                    </div>
                    <div class="mt-4">
                        <p class="font-bold">Total Premium: <span
                                class="text-green-500 text-lg">{{ policy.policy.total_amount }}</span></p>
                    </div>
                    <hr class="mt-6">
                    <a :href="policy.policy.certificate" target="_blank" rel="noopener noreferrer"
                        class="mt-6 block text-green-500 underline">View Certificate</a>
                    <a :href="policy.policy.receipt_image" v-if="policy.policy.receipt_image" target="_blank"
                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Transfer Receipt</a>
                    <p v-else class="mt-6">Transfer Receipt not available</p>
                    <a :href="policy.policy.valid_id" v-if="policy.policy.valid_id" target="_blank"
                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View User's ID</a>
                    <p v-else class="mt-6">Means of Id link not available</p>
                    <a :href="policy.policy.plate_number_image" v-if="policy.policy.plate_number_image" target="_blank"
                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Vehicle's Image with
                        Plate Number</a>
                    <p v-else class="mt-6">Vehicle's Image link not available</p>
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