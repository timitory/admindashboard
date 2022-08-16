<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    piechartData :Object 
    // piechartData: {
    //   type: Object,
    //   required: true
    // }
  },
  mounted() {
   
    this.renderChart(
      {
        labels: [
          "Comprehensive",
          "Third Party",
          "Chi Prime"
        ],
        datasets: [
          {
            label: "Plans",
            data: [this.piechartData.comprehensive, this.piechartData["third-party"], this.piechartData["chi-prime"]],
            // backgroundColor: "transparent",
            backgroundColor: [
              'rgb(20,28,68)',
              'rgb(56,127,75)',
              'rgb(56,200,200)',
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