<template>
    <div class="l-modal">
       <div class="loading-modal w-full px-4 md:px-0">
           <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
             <div class="pt-6">
               <div class="flex justify-between">
                 <div>
                    <download-excel :data="policiess" :name="fileName" class="right">
        <button type="button" class="flex mt-4 items-center py-2 px-2 rounded text-white" style="background-color: #131B47; max-width: 180px">Download CSV</button>
    </download-excel>
                   <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                     About Claim
                   </p>
                 </div>
                 <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
               </div>
                 <div class="mt-8">
                 <p class="font-bold">Accident Date</p>
                 <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{policy.metadata.AccidentDate}}</p>
                 </div>
                 <ul class="mt-8">
                     <li>
                         <p>Accident Description</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentDescription}}</p>
                     </li>
                     <li>
                         <p>Accident Details</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentDetails}}</p>
                     </li>
                     <li>
                         <p>Accident Place</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentPlace}}</p>
                     </li>
                     <li>
                         <p>Accident Time</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentTime}}</p>
                     </li>
                     <li>
                         <p>Accident Weather Condition</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentWeatherCondition}}</p>
                     </li>
                     <li>
                         <p>Claim Notice</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ClaimNotice}}</p>
                     </li>
                     <li>
                         <p>Cost Of Repairs</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.CostOfRepairs}}</p>
                     </li>
                     <li>
                         <p>Damaged Parts</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DamagedParts}}</p>
                     </li>
                     <li>
                         <p>Driver Employment</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmployment}}</p>
                     </li>
                     <li>
                         <p>Driver Employment Capacity</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentCapacity}}</p>
                     </li>
                     <li>
                         <p>Driver Employment Length</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentLength}}</p>
                     </li>
                     <li>
                         <p>Driver Previous Accident Details</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverPreviousAccidentDetails}}</p>
                     </li>
                     <li>
                         <p>Driver Prosecuted</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverProsecuted}}</p>
                     </li>
                     <li>
                         <p>Driver Prosecuted Details</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverProsecutedDetails}}</p>
                     </li>
                     <li>
                         <p>Driver Warning</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverWarning}}</p>
                     </li>
                     <li>
                         <p>Estimate Attachment</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.EstimateAttachment}}</p>
                     </li>


                     <li>
                         <p>Headlamps</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.Headlamps}}</p>
                     </li>
                     <li>
                         <p>Other Driver Warning</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.OtherDriverWarning}}</p>
                     </li>
                     <li>
                         <p>Other Vehicle Insurance</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.OtherVehicleInsurance}}</p>
                     </li>
                     <li>
                         <p>Police Action</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceAction}}</p>
                     </li>
                     <li>
                         <p>Police Report</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReport}}</p>
                     </li>
                     <li>
                         <p>Police Report Officer Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportOfficerName}}</p>
                     </li>
                     <li>
                         <p>Police Report Officer Number</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportOfficerNumber}}</p>
                     </li>
                     <li>
                         <p>Police Report Station</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportStation}}</p>
                     </li>
                     <li>
                         <p>Repairer Address</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerAddress}}</p>
                     </li>
                     <li>
                         <p>Repairer Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerName}}</p>
                     </li>
                     <li>
                         <p>Repairer Phone</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerPhone}}</p>
                     </li>
                     <li>
                         <p>Road Width</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RoadWidth}}</p>
                     </li>
                     <li>
                         <p>ThirdParty Address</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyAddress}}</p>
                     </li>
                     <li>
                         <p>ThirdParty Injury</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyInjury}}</p>
                     </li>
                     <li>
                         <p>ThirdParty Inspection Address</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyInspectionAddress}}</p>
                     </li>
                     <li>
                         <p>ThirdParty Make</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyMake}}</p>
                     </li>


                     
                     <li>
                         <p>ThirdParty Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyName}}</p>
                     </li>
                     <li>
                         <p>ThirdParty Property</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyProperty}}</p>
                     </li>
                     <li>
                         <p>Third Party RegNo</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyRegNo}}</p>
                     </li>
                     <li>
                         <p>Vehicle Location</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VehicleLocation}}</p>
                     </li>
                     <li>
                         <p>Vehicle Speed</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VehicleSpeed}}</p>
                     </li>
                     <li>
                         <p>Victim Hospital</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VictimHospital}}</p>
                     </li>
                     <li>
                         <p>Victim Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VictimName}}</p>
                     </li>
                     <li>
                         <p>Witness Address</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.WitnessAddress}}</p>
                     </li>
                     <li>
                         <p>Witness Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.WitnessName}}</p>
                     </li>
                     <li>
                         <p>Affected Center Image</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.affected_center_image}}</p>
                     </li>
                     <li>
                         <p>Driver Address</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_address}}</p>
                     </li>
                     <li>
                         <p>Driver Age</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_age}}</p>
                     </li>
                     <li>
                         <p>Driver Date Of Expiry</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_dateofexpiry}}</p>
                     </li>
                     <li>
                         <p>Driver License</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_license}}</p>
                     </li>
                     <li>
                         <p>Driver Name</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_name}}</p>
                     </li>
                     <li>
                         <p>Driver Previous Accident</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_previous_accident}}</p>
                     </li>

        
                     
                     
                     <li>
                         <p>Policy Number</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.policy_number}}</p>
                     </li>
                     <li>
                         <p>Start</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.start}}</p>
                     </li>
                     <li>
                         <p>Settled Amount</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.settled_amount}}</p>
                     </li>
                     <li>
                         <p>Purpose of Use of Vehicle</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.purpose_of_use}}</p>
                     </li>
                    
                     <li>
                         <p>Driver Years of Experience</p>
                         <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.driver_years_exp}}</p>
                     </li>
                 </ul>
                 <div class="mt-4">
                     <p class="font-bold">Plate Number: <span class="text-green-500 text-lg">{{policy.metadata.plate_number}}</span></p>
                 </div>
                 <hr class="mt-6"> 
                 <a :href="policy.metadata.invoice_image" v-if="policy.metadata.invoice_image" target="_blank" rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Invoice</a>
                 <p v-else class="mt-6">Invoice's Image link not uploaded yet</p>
                 <a :href="policy.metadata.plate_number_image" v-if="policy.metadata.plate_number_image" target="_blank" rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Vehicle's Image with Plate Number 1</a>
                 <p v-else class="mt-6">Vehicle's Image link not available</p>
                 <a :href="policy.metadata.plate_number_image2" v-if="policy.metadata.plate_number_image2" target="_blank" rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View Vehicle's Image with Plate Number</a>
                 <p v-else class="mt-6">Vehicle's Image2 link not available</p>
             </div>
           </div>
       </div>
     </div>
 </template>
 
 <script>
 import { directive as onClickaway } from 'vue-clickaway';
 
 export default {
     props:['policy'],
     data(){
         return {
             existing: '',
             policiess: [],
             fileName: this.policy.user.firstname +'_'+ this.policy.user.lastname + '_claim',
         }
     },
     methods:{
         close(){
           this.$emit('close')
         // console.log('closeee')
         },
        
     },
     mounted(){
        var dat = {
           
				PlateNumber:                   this.policy.metadata.plate_number,
				PolicyNumber:                  this.policy.metadata.policy_number,
				StartDate:                     this.policy.metadata.start,
			
				Source:                        this.policy.metadata.source,
				
				PurposeOfUseAtAccident:        this.policy.metadata.purpose_of_use,
				PurposeOfUseAtAccidentExtra:   this.policy.metadata.purpose_of_useextra,
				DriverName:                    this.policy.metadata.driver_name,
				DriverAge:                     this.policy.metadata.driver_age,
				DriverYearsExperience:         this.policy.metadata.driver_years_exp,
				DriverAddress:                 this.policy.metadata.driver_address,
				DriverLicenseNumber:           this.policy.metadata.driver_license,
				DriverDateOfExpiry:            this.policy.metadata.driver_dateofexpiry,
				DriverPreviousAccident:        this.policy.metadata.driver_previous_accident,
				DriverPreviousAccidentDetails: this.policy.metadata.DriverPreviousAccidentDetails,
				DriverProsecuted:              this.policy.metadata.DriverProsecuted,
				DriverProsecutedDetails:       this.policy.metadata.DriverProsecutedDetails,
				DriverEmployment:              this.policy.metadata.DriverEmployment,
				DriverEmploymentCapacity:      this.policy.metadata.DriverEmploymentCapacity,
				DriverEmploymentLength:        this.policy.metadata.DriverEmploymentLength,
				AccidentDate:                  this.policy.metadata.AccidentDate,
				AccidentTime:                  this.policy.metadata.AccidentTime,
				AccidentPlace:                 this.policy.metadata.AccidentPlace,
				AccidentWeatherCondition:      this.policy.metadata.AccidentWeatherCondition,
				AccidentDetails:               this.policy.metadata.AccidentDetails,
				Headlamps:                     this.policy.metadata.Headlamps,
				RoadWidth:                     this.policy.metadata.RoadWidth,
				VehicleSpeed:                  this.policy.metadata.VehicleSpeed,
				DriverWarning:                 this.policy.metadata.DriverWarning,
				OtherDriverWarning:            this.policy.metadata.OtherDriverWarning,
				AccidentDescription:           this.policy.metadata.AccidentDescription,
				WitnessName:                   this.policy.metadata.WitnessName,
				WitnessAddress:                this.policy.metadata.WitnessAddress,
				DamagedParts:                  this.policy.metadata.DamagedParts,
				VehicleLocation:               this.policy.metadata.VehicleLocation,
				CostOfRepairs:               this.policy.metadata.CostOfRepairs,
				RepairerName:                  this.policy.metadata.RepairerName,
				RepairerAddress:               this.policy.metadata.RepairerAddress,
				RepairerPhone:                 this.policy.metadata.RepairerPhone,
				EstimateAttachment:            this.policy.metadata.EstimateAttachment,
				OtherVehicleInsurance:         this.policy.metadata.OtherVehicleInsurance,
				ThirdPartyName:                this.policy.metadata.ThirdPartyName,
				ThirdPartyAddress:             this.policy.metadata.ThirdPartyAddress,
				ThirdPartyProperty:            this.policy.metadata.ThirdPartyProperty,
				ThirdPartyInjury:              this.policy.metadata.ThirdPartyInjury,
				ThirdPartyMake:                this.policy.metadata.ThirdPartyMake,
				ThirdPartyRegNo:               this.policy.metadata.ThirdPartyRegNo,
				ThirdPartyInspectionAddress:   this.policy.metadata.ThirdPartyInspectionAddress,
				PoliceReport:                  this.policy.metadata.PoliceReport,
				PoliceReportStation:           this.policy.metadata.PoliceReportStation,
				PoliceReportOfficerName:       this.policy.metadata.PoliceReportOfficerName,
				PoliceReportOfficerNumber:     this.policy.metadata.PoliceReportOfficerNumber,
				PoliceAction:                  this.policy.metadata.PoliceAction, 
				ClaimNotice:                   this.policy.metadata.ClaimNotice, 
				VictimName:                    this.policy.metadata.VictimName,  
				VictimHospital:                this.policy.metadata.VictimHospital,
            };

            this.policiess.push(dat)

     },
     directives: {
         onClickaway: onClickaway,
     }
 }
 </script>
 
 <style scoped>
 .loader{
   position: relative;
   top: 5px;
   max-width: 1000px
 }
 .img{
   width: 120px
 }
 li{
     margin-bottom: 20px
 }
 @media only screen and (min-width: 1024px){
     ul{
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
     }
     ul li{
         flex: 0 0 25%;
         /* width: 20%;
         margin: 0 2.5% */
         margin: 0  5% 0 0
     }
 }
 </style>