<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    linechartData: {
      type: Object,
      required: true
    }
  },
  mounted() {
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
            //data: [2, 10, 5, 9, 0, 6, 20, 21, 3, 15, 4, 9],
            data: [this.linechartData.policies.january, this.linechartData.policies.february, 
            this.linechartData.policies.march, this.linechartData.policies.april, 
            this.linechartData.policies.may, this.linechartData.policies.june,
             this.linechartData.policies.july, this.linechartData.policies.august,
             this.linechartData.policies.september, this.linechartData.policies.october, 
             this.linechartData.policies.november, this.linechartData.policies.december],
            // backgroundColor: "transparent",
            backgroundColor: 'rgb(45,206,137, 0.1)',
            borderColor: "#2dce89",
            pointBackgroundColor: "#2dce89",
            tension: 0.3
          }
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