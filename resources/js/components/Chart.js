import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props:['posts'],
  data:()=>({
    chartdata: {
      labels: ['07-05','07-06','07-07','07-08'],
      datasets: [
        {
          label: 'feeling',
          backgroundColor: '#B3A4A4',
          data: ['1','5','3','4'],
        }
       
      ]
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
    console.log("차트",this.posts);
    
  }
}