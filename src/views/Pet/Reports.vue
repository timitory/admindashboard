<template>
    <div class="mt-8">
        <div class="bg-white rounded px-8 py-8 lg:py-12 relative" style="border: 0.20000000298023224px solid #707070;">
            <router-link to="/app/dashboard/vehicle/dashboard" class="absolute left-4 top-2">
                <font-awesome-icon icon="times-circle" class="text-green-600 " />
            </router-link>
            <div class="flex gap-4 item-end">
                <svg class="report-svg-h" fill="#0c4a4d" xmlns="http://www.w3.org/2000/svg" width="39.5" height="39.5" viewBox="0 0 39.5 39.5">
                    <path class="a"
                        d="M32.435,4.5H16.065L4.5,16.065V32.435L16.065,44H32.435L44,32.435V16.065ZM24.25,35.881A2.853,2.853,0,1,1,27.1,33.028,2.847,2.847,0,0,1,24.25,35.881Zm2.194-9.436H22.056V13.278h4.389Z"
                        transform="translate(-4.5 -4.5)" />
                </svg>
                <div>
                    <p style="color: #0c4a4d" class="font-bold text-xl lg:text-3xl">Reports</p>
                    <p class="">This report is associated with the Vehicle Cover Policy</p>
                </div>
            </div>
        </div>
        <div class="vehicle-tab-container-h">
                <a class="vechicle-tab" @click="reportTab" :class="tab == 'vehiclereport' ? 'report-active' : ''">Policy</a>
                <a class="vechicle-tab" @click="claimTable" :class="tab == 'claimtable' ? 'report-active' : ''">Claims</a>
            </div>
        <!-- <p class="mt-6 mb-4 font-bold text-lg">This report is associated with the Vehicle Cover Policy</p> -->
        <p class="font-bold">Filter options :</p>
        <form v-if="tab === 'vehiclereport'" @submit.prevent="getFilteredResults">
            <div class="grid gap-4" style="max-width: 650px">
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="underwriter"> -->
                    <p>Underwriter : </p>
                    <select v-model="params.underwriter_id"  class="border" >
                        <option disabled selected value=undefined>Choose Underwriter</option>
                        <!-- <option>yes1</option> -->
                        <option v-for="(underwriter, index) in underwriters" :key="index" :value="underwriter.id">
                            {{ underwriter.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h ">
                    <!-- <input type="checkbox" v-model="filters" value="status"> -->
                    <p>Status : </p>
                    <select v-model="params.status_id"  class="border">
                        <option value=undefined selected disabled>Choose Status</option>
                        <option v-for="(status, index) in statuses" :key="index" :value="status.id">{{ status.name }}
                        </option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="plan"> -->
                    <p>Plans : </p>
                    <select v-model="params.vehicle_category_id"  class="border">
                        <option value=undefined selected disabled>Select Plan</option>
                        <option v-for="(plan, index) in plans" :key="index" :value="plan.id">{{ plan.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="month"> -->
                    <p>Months : </p>
                    <select v-model="params.month"  class="border">
                        <option value=undefined selected disabled>Select Month</option>
                        <option v-for="(month, index) in months" :key="index" :value="month.id">{{ month.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="year"> -->
                    <p>Year : </p>
                    <input v-model="params.year" type="text"  placeholder="Input year"  class="border px-2 focus:outline-none">
                </div>
            </div>
            <div class="flex">
                <button class="bg-green-500 py-2 px-6 mr-5 rounded text-white text-sm mt-4">Filter</button> <br>
        <button class="bg-red-500 py-2 px-6 rounded text-white text-sm mt-4" @click="reset">Reset Filter</button>

            </div>
        </form>
        <form v-else-if="tab === 'claimtable'" @submit.prevent="getClaimFilteredResults">
            <div class="grid gap-4" style="max-width: 650px">
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="underwriter"> -->
                    <p>Underwriter : </p>
                    <select v-model="claimsparams.underwriter_id"  class="border" >
                        <option disabled selected value=undefined>Choose Underwriter</option>
                        <!-- <option>yes2</option> -->
                        <option v-for="(underwriter, index) in underwriters" :key="index" :value="underwriter.id">
                            {{ underwriter.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h ">
                    <!-- <input type="checkbox" v-model="filters" value="status"> -->
                    <p>Status : </p>
                    <select v-model="claimsparams.status_id"  class="border">
                        <option value=undefined selected disabled>Choose Status</option>
                        <option v-for="(status, index) in statuses" :key="index" :value="status.id">{{ status.name }}
                        </option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="month"> -->
                    <p>Months : </p>
                    <select v-model="claimsparams.month" class="border">
                        <option value=undefined selected disabled>Select Month</option>
                        <option v-for="(month, index) in months" :key="index" :value="month.id">{{ month.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4 filter-h">
                    <!-- <input type="checkbox" v-model="filters" value="year"> -->
                    <p>Year : </p>
                    <input v-model="claimsparams.year" type="text" placeholder="Input year" class="border px-2 focus:outline-none">
                </div>
            </div>
            <div class="flex">
                <button class="bg-green-500 py-2 px-6 mr-5 rounded text-white text-sm mt-4">Filter</button> <br>
        <button class="bg-red-500 py-2 px-6 rounded text-white text-sm mt-4" @click="reset">Reset Filter</button>

            </div>
        </form>
        <form @submit.prevent="filter">
            <!-- lg:grid-cols-5 -->
            <!-- <div class="grid gap-4" style="max-width: 650px">
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="underwriter">
                    <p>Underwriter : </p>
                    <select v-model="underwriterId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(underwriter, index) in underwriters" :key="index" :value="underwriter.id">
                            {{ underwriter.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="status">
                    <p>Status : </p>
                    <select v-model="statusId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(status, index) in statuses" :key="index" :value="status.id">{{ status.name }}
                        </option>
                    </select>
                </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="plan">
                    <p>Plans : </p>
                    <select v-model="planId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(plan, index) in plans" :key="index" :value="plan.id">{{ plan.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="month">
                    <p>Months : </p>
                    <select v-model="monthId" class="border">
                        <option value="">Choose one</option>
                        <option v-for="(month, index) in months" :key="index" :value="month.id">{{ month.name }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-4">
                    <input type="checkbox" v-model="filters" value="year">
                    <p>Year : </p>
                    <input type="text" v-model="filterYear" class="border px-2 focus:outline-none">
                </div>
            </div>
            <div class="flex">
                <button class="bg-green-500 py-2 px-6 mr-5 rounded text-white text-sm mt-4">Filter</button> <br>

            </div> -->

        </form>
        <!-- <button class="bg-green-500 py-2 px-6 rounded text-white text-sm mt-4" @click="reset">Reset Filter</button> -->


        <div class="mt-8 lg:grid lg:gap-16 lg:items-center lg:grid-cols-2">
            <Stats :stats="stats" :claimstats="claimstats" />
            <!-- <Stats v-else-if="tab === 'claimtable'" :stats="stats" /> -->
            <div class="mt-6" v-if="showChart">
                <DoughnutChart :piechartData="piechartData" />
            </div>

        </div>
        <!-- <div class="mt-10 px-2 py-3 relative rounded" style="background-color: rgba(141,216,181, 0.18)">
            <div class="absolute right-10 top-4">
                <select class="w-full" v-model="year">
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                </select>
            </div>
            <div class="bg-white rounded">
                <LineChart :lineChartData="lineChartData" v-if="showChart" />
            </div>
        </div> -->
        
            <div>
                <Table v-if="tab === 'vehiclereport'" :policies="policies" :totalRecords="totalRecords"
                    v-on:changePage="changePage" />
                <ClaimTable v-else-if="tab === 'claimtable'" class="importclaim" :claims="claims" :totalRecords="claimstotalRecord"
                    v-on:changePage="claimchangePage"  />
            </div>

    </div>
</template>

<script>
import Stats from "@/components/Vehicle/ReportStats"
import DoughnutChart from "@/components/Vehicle/DoughnutChart"
// import LineChart from "@/components/Vehicle/LineChart"
import Table from "@/components/Vehicle/ReportsTable"
import ClaimTable from "@/components/Vehicle/ReportClaim"
import { mapState } from 'vuex'
import axios from "axios"
import baseURL from "@/main"
export default {
    components: {
        Stats, DoughnutChart, Table, ClaimTable,
    },
    data() {
        return {
            year: '',
            // perPage: 10,
            // totalRows: 0,
            policies: [],
            claimpolicies: [],
            claims: [],
            stats: {},
            claimstats: {},
            piechartData: {},
            lineChartData: {},
            showChart: false,
            showTable: false,
            underwriters: [],
            underwriterId: '',
            statusId: '',
            plans: [],
            planId: '',
            monthId: null,
            filterYear: null,
            filters: [],
            statuses: [
                { id: 1, name: 'Active' },
                { id: 5, name: 'Success' },
                { id: 12, name: 'Pending' },
                { id: 19, name: 'Incomplete' },
                { id: 22, name: 'Cancelled' },
                { id: 20, name: 'Settled' },
                { id: 0, name: 'Unsettled' },
            ],
            months: [
                { id: 1, name: "Jan" }, { id: 2, name: "Feb" }, { id: 3, name: "Mar" }, { id: 4, name: "Apr" }, { id: 5, name: "May" }, { id: 6, name: "Jun" }, { id: 7, name: "Jul" }, { id: 8, name: "Aug" }, { id: 9, name: "Sep" }, { id: 10, name: "Oct" }, { id: 11, name: "Nov" }, { id: 12, name: "Dec" },
            ],
            totalRecords: 0,
            claimstotalRecord: 0,
            url: '',
            params: {},
            claimsparams: {}
        }
    },
    watch: {
        underwriterId() {
            if (this.underwriterId !== "") {
                this.getPlans()
            }
        },

    },
    computed: {
        ...mapState({
            tab: state => state.tab
        })
    },
    methods: {
        reset() {
            this.$store.commit('startLoading')

            this.planId = ''
            this.underwriterId = ''
            this.statusId = ''
            this.getFilteredResults("")
            this.piechartData = {}
            this.filters = []
            this.claimsparams={}
            this.params={}

            this.getPolicies()
            this.getUnderwriters()
            this.getClaims()
            this.$store.commit('endLoading')


        },
        getPolicies() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/vehicle/report`)
                .then(res => {
                    // console.log(res.data.data)
                    // this.totalRows = res.data.data.totalRecord
                    this.policies = res.data.data.all_policies
                    this.totalRecords = res.data.data.total_records
                    // console.log(this.policies)
                    this.stats = {
                        active: res.data.data.active_policy_count,
                        incomplete: res.data.data.incomplete_policy_count,
                        pending: res.data.data.pending_policy_count,
                        success: res.data.data.success_policy_count,
                        total_claim: res.data.data.claim_count,
                        settled_claim: res.data.data.settled_claim_count,
                        unsettled_claim_count: res.data.data.unsettled_claim_count
                    }
                    this.showChart = true
                    this.showTable = true
                    this.piechartData = res.data.data.policy_type
                    this.lineChartData = res.data.data.monthly_policies

                    //console.log(this.lineChartData)
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        getUnderwriters() {
            axios.get(`${baseURL}/underwriter`)
                .then((res) => {
                    // console.log(res.data.data)
                    this.underwriters = res.data.data
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        getPlans() {
            axios.get(`${baseURL}/vehicle/categories?uid=${this.underwriterId}`)
                .then((res) => {
                    this.plans = res.data.data.categories
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        filter() {
            if (this.filters.length == 0) return this.$store.commit('setError', { status: true, msg: 'check the boxes to apply any filter' })
            let url = '?'
            this.filters.map((item) => {
                if (item === 'underwriter') {
                    if (url.length == 1) {
                        url = url.concat("", `underwriter_id=${this.underwriterId}`)
                    } else {
                        url = url.concat("&", `underwriter_id=${this.underwriterId}`)
                    }
                } else if (item == 'status') {
                    if (url.length == 1) {
                        url = url.concat("", `status_id=${this.statusId}`)
                    } else {
                        url = url.concat("", `&status_id=${this.statusId}`)
                    }
                } else if (item == 'plan') {
                    if (url.length == 1) {
                        url = url.concat("", `vehicle_category_id=${this.planId}`)
                    } else {
                        url = url.concat("", `&vehicle_category_id=${this.planId}`)
                    }
                } else if (item == 'month') {
                    if (url.length == 1) {
                        url = url.concat("", `month=${this.monthId}`)
                    } else {
                        url = url.concat("", `&month=${this.monthId}`)
                    }
                } else if (item == 'year') {
                    if (url.length == 1) {
                        url = url.concat("", `year=${this.filterYear}`)
                    } else {
                        url = url.concat("", `&year=${this.filterYear}`)
                    }
                }
            })
            this.url = url
            this.getFilteredResults(url)
        },
        getFilteredResults() {
            this.$store.commit('startLoading')
            this.showChart = false
            this.showTable = false
            axios.get(`${baseURL}/vehicle/report`, 
            {
                params: this.params
            })
                .then((res) => {
                    this.$store.commit('endLoading')
                    // console.log(res.data.data)
                    if (!res.data.data.all_policies) {
                        this.policies = []
                    } else {
                        this.policies = res.data.data.all_policies
                    }
                    this.totalRecords = res.data.data.total_records
                    this.stats = {
                        active: res.data.data.active_policy_count,
                        incomplete: res.data.data.incomplete_policy_count,
                        pending: res.data.data.pending_policy_count,
                        success: res.data.data.success_policy_count,
                        total_claim: res.data.data.claim_count,
                        settled_claim: res.data.data.settled_claim_count
                    }
                    this.showChart = true
                    this.showTable = true
                    this.piechartData = res.data.data.policy_type
                })
                .catch((err) => {
                    this.$store.dispatch('handleError', err)
                })
        },
        getClaimFilteredResults() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/vehicle/claim/report`, 
            {
                params: this.claimsparams
            })
                .then((res) => {
                    this.$store.commit('endLoading')
                    // console.log(res.data.data)
                    // if (!res.data.data.all_claims) {
                    //     this.claims = []
                    // } else {
                    //     this.claims = res.data.data.all_claims
                    // }
                    this.claims = res.data.data.all_claims
                    this.claimstotalRecord = res.data.data.total_records
                    this.claimstats = {
                        accepted_claim : res.data.data.accepted_claim_count,
                        approved_claim : res.data.data.approved_claim_count,
                        total_claim : res.data.data.claim_count,
                        pending_claim : res.data.data.pending_claim_count,
                        settled_claim : res.data.data.settled_claim_count,
                    }
                    this.claims.forEach(this.myFunction)
                    this.$store.commit('endLoading')
                })
                .catch((err) => {
                    this.$store.dispatch('handleError', err)
                })
        },
        changePage(num) {
            this.$store.commit('startLoading')
            this.showChart = false
            // this.showTable = false
            axios.get(`${baseURL}/vehicle/report${this.url}?page=${num}`)
                .then((res) => {
                    this.$store.commit('endLoading')
                    // console.log(res.data.data)
                    if (!res.data.data.all_policies) {
                        this.policies = []
                    } else {
                        this.policies = res.data.data.all_policies
                    }
                    this.totalRecords = res.data.data.total_records
                    this.stats = {
                        active: res.data.data.active_policy_count,
                        incomplete: res.data.data.incomplete_policy_count,
                        pending: res.data.data.pending_policy_count,
                        success: res.data.data.success_policy_count,
                        total_claim: res.data.data.claim_count,
                        settled_claim: res.data.data.settled_claim_count
                    }
                    this.showChart = true
                    this.showTable = true
                    this.piechartData = res.data.data.policy_type
                })
                .catch((err) => {
                    this.$store.dispatch('handleError', err)
                })
        },
        claimchangePage(num) {
            // console.log(num)
            // this.page = num
            let getclaimparamlength =Object.keys(this.claimsparams).length;
            this.$store.commit('startLoading')
            if(getclaimparamlength !== 0) {
                let page = {
                    page: num
                }
                let params = {
                    ...this.claimsparams, ...page
                }
                axios.get(`${baseURL}/vehicle/claim/report`, { 
                    params: params
                })
                .then(res => {
                    // console.log(res.data.data)
                    this.claims = res.data.data.all_claims
                    this.claimstotalRecord = res.data.data.total_records
                    this.claimstats = {
                        accepted_claim : res.data.data.accepted_claim_count,
                        approved_claim : res.data.data.approved_claim_count,
                        total_claim : res.data.data.claim_count,
                        pending_claim : res.data.data.pending_claim_count,
                        settled_claim : res.data.data.settled_claim_count,
                    }
                    this.claims.forEach(this.myFunction)
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
            } else {
                axios.get(`${baseURL}/vehicle/claim/report`, { params: { page: num } })
                .then(res => {
                    // console.log(res.data.data)
                    this.claims = res.data.data.all_claims
                    this.claimstotalRecord = res.data.data.total_records
                    this.claimstats = {
                        accepted_claim : res.data.data.accepted_claim_count,
                        approved_claim : res.data.data.approved_claim_count,
                        total_claim : res.data.data.claim_count,
                        pending_claim : res.data.data.pending_claim_count,
                        settled_claim : res.data.data.settled_claim_count,
                    }
                    this.claims.forEach(this.myFunction)
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
            }
            
        },
        getClaims() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/vehicle/claim/report`)
                .then((res) => {
                    // console.log(res);
                    this.$store.commit('endLoading')
                    this.claims = res.data.data.all_claims
                    this.claimstotalRecord = res.data.data.total_records
                    this.claimstats = {
                        accepted_claim : res.data.data.accepted_claim_count,
                        approved_claim : res.data.data.approved_claim_count,
                        total_claim : res.data.data.claim_count,
                        pending_claim : res.data.data.pending_claim_count,
                        settled_claim : res.data.data.settled_claim_count,
                    }
                    this.claims.forEach(this.myFunction)
                })
                .catch((err) => {
                    this.$store.dispatch('handleError', err)
                })
        },
        myFunction(item) {

            var dat = {
                claim_id: item.id,
                customer: item.user === null ? "" : item.user.lastname + " " + item.user.firstname,
                email: item.user === null ? "" : item.user.email,
                underwriter: item.underwriter === null ? "" : item.underwriter.name,
                //   claim_date: item.metadata.start,
                settled_amount: item.settled_amount,
                status: item.status,
            };

            this.claimpolicies.push(dat)

        },
        reportTab() {
            this.$store.commit('setTab', 'vehiclereport')
        },
        claimTable() {
            this.$store.commit('setTab', 'claimtable')
        }
    },
    mounted() {
        this.getPolicies()
        this.getUnderwriters()
        this.getClaims()
    }
}
</script>

<style scoped>
.svg {
    width: 40px;
    height: 25px
}

.vechicle-tab {
    font-size: 18px;
    cursor: pointer;
    padding: 10px 15px;
}

.report-active {
    /* background-color: rgba(16, 185, 129, 1); */
    color: black;
    font-weight: 700;
    /* padding: 10px 15px; */
    border-bottom: 4px solid rgb(12, 74, 77);
    /* border-radius: 0.25rem; */
}

.filter-h > select, .filter-h > input {
    width: 35%;
    height: 35px;
}

.report-svg-h {
    align-self: center;
}

.vehicle-tab-container-h {
    display: flex;
    gap: 2rem;
    margin: 1rem;
    justify-content: center;
    border-bottom: 1px solid #e7e7e9;
}

@media only screen and (min-width: 1024px) {
    .svg {
        width: 55px;
        height: 32px
    }
}</style>