<template>
  <div class="row">
    <div class="form-group tw-mx-auto">
      <!-- <label>Set the chart title (reactively)</label> -->
    </div>
    <!-- ================= {{ universityId }} ================= -->
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
      // daysArray: ['00-06', '06-12', '12-18', '18-00'],
      // receivedMessagescountsArray: [2, 2, 1, 0],
      // universisty_id: []
    }
  },
  computed: {
    universityId () {
      return this.$store.state.dashboardLine.timeCategory
    },
    chartOptions () {
      return {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Statistik Pengguna'
        },
        series: [
          {
            name: 'User Login',
            data: this.$store.state.dashboardLine.valueCategory
          }
        ],
        xAxis: {
          categories: this.$store.state.dashboardLine.timeCategory,
          labels: {
            align: 'center',
            formatter () {
              return this.value
            }
          }
        },
        yAxis: {
          labels: {
            formatter () {
              return this.value
            }
          }
        }
      }
    }
  },
  mounted () {
    // const resx = await this.$axios.$get('dashboard/userlogin')
    // for (let i = 0; i < resx.data.length; i++) {
    //   this.daysArray.push(resx.data[i].param)
    //   this.receivedMessagescountsArray.push(parseInt(resx.data[i].user_login))
    // }
  },
  methods: {

  }
}
</script>
