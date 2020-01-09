<template>
  <div id="app">
<!--    内容组件-->
    <router-view/>
  </div>
</template>
<script>
  import layout from "@/components/layout/index"
  export default {
    name: "app",
    components:{layout},
  }
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
