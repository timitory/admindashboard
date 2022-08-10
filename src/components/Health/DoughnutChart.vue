<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    piechartData: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "individual_hallmark_beryl",
          "individual_hallmark_zircon",
            "individual_hallmark_ruby",
            "individual_hallmark_topaz",
            "individual_hallmark_emerald",
            "individual_hallmark_diamond",
            // "family_hallmark_beryl",
            // "family_hallmark_zircon",
            // "family_hallmark_ruby",
            // "family_hallmark_topaz",
            // "family_hallmark_emerald",
            // "family_hallmark_diamond",        
          ],
        datasets: [
          {
            label: "Plans",
           // data: [1350, 2500],
            data: [this.piechartData.individual_hallmark_beryl, this.piechartData["individual_hallmark_zircon"],
             this.piechartData["individual_hallmark_ruby"],
             this.piechartData["individual_hallmark_topaz"],
             this.piechartData["individual_hallmark_emerald"],
             this.piechartData["individual_hallmark_diamond"],
            //  this.piechartData["family_hallmark_beryl"],
            //  this.piechartData["family_hallmark_zircon"],
            //  this.piechartData["family_hallmark_ruby"],
            //  this.piechartData["family_hallmark_topaz"],
            //  this.piechartData["family_hallmark_emerald"],
            //  this.piechartData["family_hallmark_diamond"],
             ],
            // backgroundColor: "transparent",
            backgroundColor: [
              'rgb(20,28,68)',
              'rgb(56,127,75)',
              'rgb(255,255,0)',
              'rgb(128,0,0)',
              'rgb(32,178,170)',
              'rgb(0,100,0)',
              // 'rgb(20,28,68)',
              // 'rgb(56,127,75)',
              // 'rgb(20,28,68)',
              // 'rgb(56,127,75)',
              // 'rgb(20,28,68)',
              // 'rgb(56,127,75)',
            ],
            // borderColor: "#2dce89",
            // pointBackgroundColor: "#2dce89",
            hoverOffset: 4
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  }
};
</script>