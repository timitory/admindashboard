<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 relative shadow-lg bg-white lg:relative lg:pb-8">
        <div class="lg:flex lg:justify-between toggle-claim-h">
            <p class="mt-2 mb-4 font-bold text-lg">Manage vehicle cover claims</p>
            <div class="lg:flex lg:gap-4"> 
              <download-excel :data="policiess" :name="fileName" class="right">
                  <button type="button" class="flex mt-4 items-center py-2 px-2 rounded text-white" style="background-color: #131B47; max-width: 180px">Download CSV</button>
              </download-excel>
              <div class="relative">
                
                <input type="text" v-model="searchKeyword"  @change="search()" class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z" fill="#2E3A59"></path>
                </svg>
              </div>
            </div>
        </div>      
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="filteredClaims.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">Customer</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Underwriter</th>
              <th class="font-bold">Start Date</th>
              <th class="font-bold">Claim Date</th>
              <th class="font-bold">Settled Amount</th>
              <th class="font-bold">Status</th>
              <th class="font-bold">Action</th>
              <th class="font-bold">View</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in filteredClaims" :key="index" class="border border-solid border-gray-300">
              <td>{{policy.user.firstname}} {{policy.user.lastname}}</td>
              <td>{{policy.user.email}}</td>
              <td>{{policy.underwriter.name}}</td>
              <td>{{policy.metadata['start_date']}}</td>
              <td>{{policy.timestamp}}</td>
              <td>
                 {{policy.settled_amount}}
              </td>
             <td> 
               <p v-if="policy.status =='Settled'"  class="text-sm bg-green-500 text-white p-1 rounded text-center">Settled</p>
               <p v-else-if="policy.underwriter_status =='Accept'"  class="text-sm bg-green-500 text-white p-1 rounded text-center">Approved</p>
               <p v-else-if="policy.underwriter_status =='Decline'"  class="text-sm bg-red-500 text-white p-1 rounded text-center">Declined</p>
                <p v-else-if="policy.status =='Accept'"  class="text-sm bg-green-500 text-white p-1 rounded text-center">Accepted</p>
                
                <p v-else-if="policy.status == 'Pending'"  class="text-sm bg-yellow-500 text-white p-1 rounded text-center">{{policy.status}}</p>
                <p v-else  class="text-sm bg-red-500 text-white p-1 rounded text-center">{{policy.status}}</p>
              </td>
              <td>
                <select class="border rounded focus:outline-none" v-model="action" @change="selectAction(policy)">
                  <option disabled value="">Action</option>
                  <option v-if="policy.status != 'Accept' && policy.status != 'Decline' && policy.status != 'Settled'" value="approve">Accept</option>
                  <option v-if="policy.status == 'Pending'" value="decline">Decline</option>
                  <option v-if="policy.status != 'Decline' && policy.status != 'Settled' && policy.underwriter_status == 'Accept'" value="settle">Mark as Settled</option>
                  <option v-if="policy.status != 'Decline' && policy.status == 'Settled'" value="settle">Edit Settled Amount</option>
                </select>
              </td>
              <td>
               <button @click="viewClaim(policy)" class="text-green-500 text-sm underline outline-none focus:outline-none">View More</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <div class="my-8">
          <t-pagination
          :total-items="totalRows"
          :per-page="perPage"
          :limit="limit"
          :disabled="disabled"
          v-model="currentPage"
          @change="changePage"
        />
        </div>
      </div>
    </div>
    <DeclineModal v-if="showDecline" v-on:close="closeDecline" v-on:submit="declineClaim" />
    <SettleModal :claim="claim" v-if="showSettle" v-on:close="closeSettle" v-on:submit="settleClaim" />
    <SingleClaim :showPolicy="showPolicy" v-if="showPolicy" :policy="claim" @close="showPolicy = false" />
    <!-- <AcceptClaim  v-if="showActive"  :policy="claim" @close="showActive = false"/> -->
  </div>
</template>

<script>
// import {mapState} from "vuex"
import axios from "axios"
import baseURL from "@/main"
import DeclineModal from "@/components/Vehicle/DeclineModal"
import SettleModal from "@/components/Vehicle/SettleModal"
// import AcceptClaim from "@/components/Vehicle/ClaimModal"
import TPagination from 'vue-tailwind/dist/t-pagination'
import SingleClaim from "./SingleClaim.vue"
export default {
  components: {DeclineModal, SettleModal, SingleClaim, TPagination},
  data(){
    return {
      perPage: 10,
      totalRows: 0,
      disabled: false,
      limit: 5,
      currentPage: 1,
      searchKeyword: '',
      page: 1,
      pages: [],
      claims: [],
      showDecline: false,
      showSettle: false,
      showActive: false,
      claim: {},
      action: '',
      showPolicy: false,
      policiess: [],
      fileName: 'vehicle_claim',
    }
  },
  computed:{
    paginatedClaims(){
        return this.paginate(
            this.claims
        )
    },
    filteredClaims(){
       return  this.paginatedClaims.filter((claims)=>{
            return claims.user.firstname.toLowerCase().includes(this.searchKeyword.toLowerCase()) || claims.user.lastname.toLowerCase().includes(this.searchKeyword.toLowerCase())
        })
    },
    
  },
  watch: {
		claims() {
			this.setPages();
		},
	},
  methods: {
    viewClaim(obj){
      this.claim = obj
      this.showPolicy = true
    },
    search(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/admin/claims?type=vehicle?search=${this.searchKeyword}`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.claims = res.data.data.claims
        this.totalRows = res.data.data.claims.length
      })
      .catch((err)=> {
        this.$store.dispatch('handleError', err)
      })
    },
    setPages () {
      let numberOfPages = Math.ceil(this.claims.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (claims) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  claims.slice(from, to);
    },
    getClaims(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/admin/claims?type=vehicle`)
      .then((res)=>{
        this.$store.commit('endLoading')
        this.claims = res.data.data.claims
        this.totalRows = res.data.data.claims.length

        this.claims.forEach(this.myFunction)
      })
      .catch((err)=> {
        this.$store.dispatch('handleError', err)
      })
    },
    getClaims2(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/vehicle/claim/report`)
      .then((res)=>{
        console.log(res);
        // this.$store.commit('endLoading')
        // this.claims = res.data.data.claims
        // this.totalRows = res.data.data.claims.length

        // this.claims.forEach(this.myFunction)
      })
      .catch((err)=> {
        this.$store.dispatch('handleError', err)
      })
    },
    myFunction(item) {

      var dat = {
        claim_id:item.id,
        customer: item.user.lastname + " " + item.user.firstname,
        email: item.user.email,
        underwriter: item.underwriter.name,
        claim_date: item.metadata.start,
        settled_amount: item.settled_amount,
        status:item.status,
      };

      this.policiess.push(dat)

    },
    selectAction(obj){
      this.claim = obj
      if(this.action === 'decline'){
        this.showDecline = true
        this.action = ''
      }else if(this.action === 'approve'){
        
        this.approveClaim()
        this.action = ''
      }else if(this.action == 'settle'){
        this.showSettle = true
        this.action = ""
      }
      
    },
    closeDecline(){
      this.showDecline = false
      this.action = ""
    },
    closeSettle(){
      this.showSettle = false
      this.action = ""
      this.getClaims()
    },
    approveClaim(){
      this.action = ""
      this.$store.commit('startLoading')
      let obj = {claim_id: this.claim.id, note: ''}
      axios({url: `${baseURL}/admin/claim/approve`, data: obj, method: 'PATCH'})
      .then((res)=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.getClaims()
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    },
    declineClaim(note){
      this.showDecline = false
      let obj = {claim_id: this.claim.id, note: note}
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/admin/claim/decline`, data: obj, method: 'PATCH'})
      .then((res)=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.getClaims()
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })

    },
    settleClaim(amount){
      this.showSettle = false
      let obj = {claim_id: this.claim.id, amount: amount}
      console.log(obj)
      
    },
    changePage(num){
      console.log(num)
      this.page = num
      // this.$store.commit('startLoading')
      // axios.get(`${baseURL}/admin/vehicle/policy`, {params :{page : num}})
      // .then(res=>{
      //   console.log(res.data.data)
      //   this.totalRows = res.data.data.totalRecord
      //   this.policies = res.data.data.records
      //   this.perPage = res.data.data.record_per_page
      //   this.$store.commit('endLoading')
      // })
      // .catch(err=>{
      //   this.$store.dispatch('handleError', err)
      // })
    },
  },
  mounted(){
      this.getClaims()
      this.getClaims2()
  }
}
</script>

<style scoped>
input{
    background-color: #e2f5ec;
}
/* table{
  
} */

th, td {
  text-align: left;
  padding: 8px;
  min-width: 120px
}

.tablecont::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar
{
  margin-top: 20px;
  height: 2px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar-thumb
{
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:#14801B;
}

.importclaim > div > .toggle-claim-h > div > div {
    display: none !important;
}
.filter{
  bottom: -80px;
  width: 100%
}
.filter p:hover{
  background-color: blue;
  color: white
}
.filter p{
  padding: 5px 10px;
}
.svg{
    width: 25px;
    height: 25px
}
@media only screen and (min-width: 1024px) {
    .svg{
        width: 30px;
        height: 30px
    }
  
  th, td{
      min-width: unset
  }
  thead th:nth-child(8){
    width: 18%;
  }
  thead th:nth-child(1){
    width: 12.5%;
  }
  thead th:nth-child(2){
    width: 12.5%;
  }
  thead th:nth-child(3){
    width: 12.5%;
  }
  thead th:nth-child(4){
    width: 12.5%;
  }
  thead th:nth-child(5){
    width: 12.5%;
  }
  thead th:nth-child(6){
    width: 12.5%;
  }
  thead th:nth-child(7){
    width: 12.5%;
  }
div.tablecont{
    max-width: 100%;
  }
div.tablecont table{
    width: 100%
  }
}
</style>