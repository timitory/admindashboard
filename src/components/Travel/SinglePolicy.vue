<template>
    <div class="l-modal">
        <div class="loading-modal w-full px-4 md:px-0">
            <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
                <div class="pt-6">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                                About Travel Policy
                            </p>

<!--                            <button v-if="policy.policy.receipt_image" type="button"-->
<!--                                class="flex mt-4 items-center py-2 px-2 rounded text-white"-->
<!--                                style="background-color: #131B47; max-width: 180px" @click="openmodal">Mark-->
<!--                                Policy</button>-->
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
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.lastname + " " +  policy.policy.metadata.firstname}}</p>
                        </li>
                        <li>
                            <p>Email</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.email }}</p>
                        </li>
                        <li>
                            <p>Phone</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.phone }}</p>
                        </li>
                        <li>
                            <p>Address</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.Address }}</p>
                        </li>
                        <li>
                            <p>Nationality</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.Nationality }}</p>
                        </li>
                        <li>
                            <p>Occupation</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.Occupation }}</p>
                        </li>
                        <li>
                            <p>Passport No</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.PassportNumber }}</p>
                        </li>
                        <li>
                            <p>ZipCode</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.ZipCode }}</p>
                        </li>
                        <li>
                            <p>Marital Status</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.MaritalStatusID }}</p>
                        </li>
                        <li>
                            <p>Cover Begins</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.StartDate }}</p>
                        </li>
                        <li>
                            <p>Cover End</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.EndDate }}</p>
                        </li>
                        <li>
                            <p>Next of kin Name</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.NextOfKinName }}</p>
                        </li>
                        <li>
                            <p>Next of kin Phone</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.NextOfKinPhone }}</p>
                        </li>
                        <li>
                            <p>Next of kin Address</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.NextOfKinAddress }}</p>
                        </li>
                        <li>
                            <p>Next of kin Relationship</p>
                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.NextOfKinRelationship }}</p>
                        </li>
<!--                        <li>-->
<!--                            <p>License Number</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.metadata.email }}</p>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <p>Flood Cover</p>-->
<!--                            <p class="mt-2 lg:mt-4 font-bold mb-6">{{ policy.policy.flood_cover }}</p>-->
<!--                        </li>-->
                    </ul>
<!--                    <div class="mt-4">-->
<!--                        <p class="font-bold">{{ policy.policy.payment_frequency }} Premium: <span-->
<!--                                class="text-green-500 text-lg">{{ policy.policy.premium }}</span></p>-->
<!--                    </div>-->
                    <div class="mt-4">
                        <p class="font-bold">Total Premium: <span
                                class="text-green-500 text-lg">{{ policy.policy.premium }}</span></p>
                    </div>
<!--                    <hr class="mt-6">-->
<!--                    <a :href="policy.policy.certificate" target="_blank" rel="noopener noreferrer"-->
<!--                        class="mt-6 block text-green-500 underline">View Certificate</a>-->
<!--                    <a :href="policy.policy.receipt_image" v-if="policy.policy.receipt_image" target="_blank"-->
<!--                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Transfer Receipt</a>-->
<!--                    <p v-else class="mt-6">Transfer Receipt not available</p>-->
<!--                    <a :href="policy.policy.valid_id" v-if="policy.policy.valid_id" target="_blank"-->
<!--                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View User's ID</a>-->
<!--                    <p v-else class="mt-6">Means of Id link not available</p>-->
<!--                    <a :href="policy.policy.plate_number_image" v-if="policy.policy.plate_number_image" target="_blank"-->
<!--                        rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Vehicle's Image with-->
<!--                        Plate Number</a>-->
<!--                    <p v-else class="mt-6">Vehicle's Image link not available</p>-->
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