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
    //console.log(this.lineChartData.policies)
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
            label: "Policy type",
            
            // data: ["2", "10", "5", "9", "0", "6", "20", "21", "3", "15", "4", "9"],
            data: [this.lineChartData.policies.january, this.lineChartData.policies.february, 
            this.lineChartData.policies.march, this.lineChartData.policies.april, 
            this.lineChartData.policies.may, this.lineChartData.policies.june,
             this.lineChartData.policies.july, this.lineChartData.policies.august,
             this.lineChartData.policies.september, this.lineChartData.policies.october, 
             this.lineChartData.policies.november, this.lineChartData.policies.december],
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
                suggestedMax: 40
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