<template>
  <div>
    <el-select v-model="svalue" placeholder="请选择" filterable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "sltopn",
    data() {
      return {
        options: [
          {
            value: 0,
            label: "全部"
          },
          {
            value: 1,
            label: "待付款"
          },
          {
            value: 2,
            label: "已付款"
          },
          {
            value: 3,
            label: "已发货"
          },
          {
            value: 4,
            label: "已签收"
          },
          {
            value: 5,
            label: "已取消"
          }
        ],
        svalue: ""
      };
    },
    methods: {
      //转换下拉框下的字段
      _dataTransform(data) {
        let _data = [];
        for (let i = 0; i < data.length; i++) {
          _data[i] = {};
          _data[i].label = data[i][this.fileType.label];
          _data[i].value = data[i][this.fileType.value];
        }
        return _data;
      }
    },
    watch: {
      //判断下拉框的值是否有改变
      svalue(val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
        if (val != oldVal) {
          this.$emit("input", this.svalue);
        }
      }
    },
    props: {
      url: {
        type: String
      }, //导入的url地址
      urlName: {
        type: String
      }, //跨域请求标志
      metName: {
        type: String
      }, //方法名
      dtName: {
        type: String
      }, //条件参数
      value: {
        type: String
      }, //接受外部v-model传入的值
      fileType: {
        type: Object
      } //定义请求回来的json数据格式
    },
    mounted() {
      //初始话下拉框的值
      this.svalue = this.value;
      //远程请求回来的数据
      
    }
  };
</script>