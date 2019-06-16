<!-- 图表 -->
<template>
  <div>
    <!-- 内容 -->
    <myEcharts
      :echartStyle="H"
      :titleText="title"
      :tooltipFormatter="tooltip"
      :opinion="opinions"
      :seriesName="sum"
      :opinionData="data"
      v-on:currentEchartData="getEchartData"
    ></myEcharts>
  </div>
</template>

<script>
  import myEcharts from "../components/Echarts";

  export default {
    name: "Diagram",
    components: {
      myEcharts
    },
    data() {
      return {
        title: "水果销售统计",
        tooltip: "销售数量",
        opinions: ["香蕉", "苹果", "橘子", "哈密瓜", "荔枝", "西瓜"],
        sum: "销售统计",
        data: [
          { value: 300, name: "香蕉" },
          { value: 400, name: "苹果" },
          { value: 700, name: "橘子" },
          { value: 600, name: "哈密瓜" },
          { value: 800, name: "荔枝" },
          { value: 500, name: "西瓜" }
        ],
        H: {
          height: ""
        }
      };
    },
    created() {
      // 获取屏幕高度
      this.H.height = document.documentElement.clientHeight - 44 + "px";
    },
    methods: {
      getEchartData(val) {
        // console.log(val);
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>