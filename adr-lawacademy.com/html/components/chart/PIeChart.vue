<template>
  <div class="row">
    <div class="form-group tw-mx-auto">
      <!-- <label>Set the chart title (reactively)</label> -->
    </div>
    <highchart
      class="chart"
      :options="chartOptions"
      style="width:100%;"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      // daysArray: [],
      // sentMessagescountsArray: [],
      // receivedMessagescountsArray: [],
      // datax: [10, 0, 7, 24],
      // piechart: []
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Status Aktivitas Mahasiswa'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}'
            }
          }
        },
        series: [{
          name: 'Total',
          colorByPoint: true,
          data: this.$store.state.dashboardPie.valueCategory
        }]
      }
    }
  },
  async mounted () {
    // const resx = await this.$axios.$get('dashboard/userpie')
    // for (let i = 0; i < resx.data.length; i++) {
    //   const item = {}
    //   item.name = resx.data[i].status
    //   item.y = parseInt(resx.data[i].total)
    //   this.daysArray.push(item)
    // }
  }
}
</script>
