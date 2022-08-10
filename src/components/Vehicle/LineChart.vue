<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    lineChartData: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // console.log(this.lineChartData)
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Policy rate",
            // data: [2, 10, 5, 9, 0, 6, 20, 21, 3, 15, 4, 9],
            data: [this.lineChartData["january"], this.lineChartData["february"], this.lineChartData["march"], this.lineChartData["april"], this.lineChartData["may"], this.lineChartData["june"], this.lineChartData["july"], this.lineChartData["august"], this.lineChartData["september"], this.lineChartData["october"], this.lineChartData["november"], this.lineChartData["december"]],
            // backgroundColor: "transparent",
            backgroundColor: 'rgb(45,206,137, 0.1)',
            borderColor: "#2dce89",
            pointBackgroundColor: "#2dce89",
            tension: 0.3
          },
          
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales : {
          yAxes: [{
            gridLines: {
                color: "#fff",
                suggestedMin: 0,
                suggestedMax: 20
            }
          }],
          xAxes: [{
            gridLines: {
              color: "#fff"
            }
          }]
        }
      }
    );
  }
};
</script>