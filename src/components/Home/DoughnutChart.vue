<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
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
            data: [1350, 2500, 2000],
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