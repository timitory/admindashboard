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
          "Gold",
          "Silver",
          "Bronze",
        ],
        datasets: [
          {
            label: "Plans",
            data: [this.piechartData.gold, this.piechartData.silver, this.piechartData.bronze],
            // backgroundColor: "transparent",
            backgroundColor: [
              'rgb(20,28,68)',
              'rgb(56,127,75)',
              'rgb(154, 31, 79)'
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