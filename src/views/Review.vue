<template>
    <div class="mt-8">
        <div class="lg:px-10">
            <section class="mt-8">
                <h1 class="text-2xl  lg:text-2xl text-green-500 font-bold">Review & Comments</h1>
                <div class="mt-6  lg:flex justify-between">
                    <div>
                        <p class="mt-2">Showing all reviews</p>

                    </div>
                </div>
            </section>
        </div>
        <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
            <div class="lg:flex lg:justify-between">
                <p></p>
                <div class="lg:flex lg:gap-4">
                    <div class="relative">
                        <input type="text" 
                            class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
                                fill="#2E3A59"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto tablecont">
                <table v-if="paginatedPolicies.length > 0" class="w-full mt-8">
                    <thead>
                        <tr>
                            <th class="font-bold">S/N</th>
                            <th class="font-bold">Rating</th>
                            <th class="font-bold">Customer Name</th>
                            <th class="font-bold">Email</th>
                            <th class="font-bold">Date</th>
                            <th class="font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(policy, index) in paginatedPolicies" :key="index"
                            class="border border-solid border-gray-300">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <StarRating value="4"></StarRating>
                            </td>
                            <td>{{ policy.policy.surname }} {{ policy.policy.firstname }}</td>
                            <td>{{ policy.policy.amount }}</td>
                            <td>{{ policy.policy.plan }}</td>
                            <td  style="text-transform:capitalize" ><button @click="open(policy.policy.firstname, policy.policy.surname, policy.policy.amount, policy.policy.amount)">View</button></td>
                        </tr>
                    </tbody>
                </table>
                <div v-else class="w-full text-center py-4">
                    <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
                    <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
                </div>
                <div class="my-8">
                    <t-pagination :total-items="totalRows" :per-page="perPage" :limit="limit" :disabled="disabled"
                        v-model="currentPage" @change="changePage" />
                </div>
            </div>
            <RatingModal v-if="showPolicy" v-on:close="close"  />
        </div>
        
    </div>
    
</template>
  
<script>
import axios from "axios"
import baseURL from "@/main"
import TPagination from 'vue-tailwind/dist/t-pagination'
import StarRating from '../components/Star-rating.vue'
import RatingModal from "../components/RatingModal"


export default {
    components: { TPagination, StarRating, RatingModal },
    data() {
        return {
            perPage: 10,
            totalRows: 0,
            disabled: false,
            limit: 5,
            currentPage: 1,
            page: 1,
            pages: [],
            policies: [],
            showRepayment: false,
            showPolicy: false,
            showReviewModal: false,
            info: {}
        }
    },
    computed: {
    //     ...mapState({
    //         reviewinfo: state => state.reviewinfo,
    // }),
        paginatedPolicies() {
            return this.paginate(
                this.policies
            )
        },

    },
    watch: {
        policies() {
            this.setPages();
        },

    },
    methods: {
        open(firstname,surname,rate, desc) {
            this.showReviewModal = true
            this.info = {
                firstname : firstname,
                surname : surname,
                rate : rate,
                description: desc
            }
            this.$store.commit('setReviewInfo' , this.info)
            this.showPolicy = true
            // console.log('chek', this.info);
        },
        close() {
            this.showPolicy = false
            console.log('unchek');
            // this.$router.push(`/app/dashboard/managehealth`)
        },
        viewRepayment(obj) {
            this.policy = obj
            this.showRepayment = true
        },
        viewPolicy(obj) {
            this.policy = obj
            this.showPolicy = true
        },
        setPages() {
            let numberOfPages = Math.ceil(this.policies.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(policies) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return policies.slice(from, to);
        },
        search() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/admin/health/search?search=${this.searchKeyword}`)
                .then(res => {
                    this.totalRows = res.data.data.totalRecord
                    this.policies = res.data.data.records
                    this.perPage = res.data.data.record_per_page
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        getPolicies() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/admin/health`)
                .then(res => {
                    this.totalRows = res.data.data.totalRecord
                    this.policies = res.data.data.records
                    this.perPage = res.data.data.record_per_page
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        changePage(num) {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/admin/health`, { params: { page: num } })
                .then(res => {
                    this.totalRows = res.data.data.totalRecord
                    this.policies = res.data.data.records
                    this.perPage = res.data.data.record_per_page
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
    },
    mounted() {
        this.getPolicies()
    }
}
</script>

<style scoped>
input {
    background-color: #e2f5ec;
}


th,
td {
    text-align: left;
    padding: 8px;
    min-width: 120px
}

.tablecont::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar {
    margin-top: 20px;
    height: 2px;
    background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar-thumb {
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #14801B;
}

.filter {
    bottom: -80px;
    width: 100%
}

.filter p:hover {
    background-color: blue;
    color: white
}

.filter p {
    padding: 5px 10px;
}

.svg {
    width: 25px;
    height: 25px
}

@media only screen and (min-width: 1024px) {
    .svg {
        width: 30px;
        height: 30px
    }

    th td {
        min-width: unset
    }

    thead th:nth-child(1) {
        width: 5%;
    }

    thead th:nth-child(2) {
        width: 15%;
    }

    thead th:nth-child(3) {
        width: 13%;
    }

    thead th:nth-child(4) {
        width: 15%;
    }

    thead th:nth-child(5) {
        width: 15%;
    }

    thead th:nth-child(6) {
        width: 10%;
    }

    thead th:nth-child(7) {
        width: 10%;
    }

    thead th:nth-child(8) {
        width: 14%;
    }

    thead th:nth-child(9) {
        width: 13%;
    }

    thead th:nth-child(10) {
        width: 10%;
    }

    thead th:nth-child(11) {
        width: 10%;
    }

    div.tablecont table {
        width: 100%
    }
}</style>