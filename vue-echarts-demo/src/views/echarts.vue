<template>
  <div>
    <div id="myChart"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        this.$axios
          .get("http://127.0.0.1:3000/get_data")
          .then(function(res) {
            console.log(res);
            // 绘制图表
            myChart.setOption({
              title: { text: res.data.title },
              tooltip: {},
              xAxis: {
                data: res.data.xAxisData
              },
              yAxis: {},
              series: [
                {
                  name: "销量",
                  type: "bar",
                  data: res.data.seriesData
                }
              ]
            });
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    mounted() {
      this.drawLine();
    }
  };
</script>

<style lang="scss" scoped>
  #myChart {
    height: 500px;
    width: 800px;
  }
</style>
