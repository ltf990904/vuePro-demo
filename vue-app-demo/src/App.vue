<template>
  <div id="app">
    <button @click="increment">增加1</button>
    <button @click="decrement">减小1</button>
    <button @click="incrementAsync">异步增加1</button>
    <button @click="decrementAsync">异步减少1</button>
    <p>当前数字为：{{count}}</p>
    <p>{{isEvenOrOdd}}</p>
    <p>{{msg}}</p>
    <!-- 下拉组件 -->
    <sltopn></sltopn>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import sltopn from "@/components/select/sltopn.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: mapGetters(["count", "isEvenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrement",
    "incrementAsync",
    "decrementAsync"
  ]),
  // 注册组件
  components: { sltopn }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
