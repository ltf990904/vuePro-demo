<template>
  <div class="test">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>
      this is id:
      <span>{{$route.params.id}}</span>
    </h1>
    <h1>
      this is name:
      <span>{{$route.params.userName}}</span>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "hello vue"
      };
    }
  };
</script>

<style lang="scss" scoped>
  h1 span {
    color: red;
  }
</style>

