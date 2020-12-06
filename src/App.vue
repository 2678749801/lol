<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>

export default {
  name:'app',
 
  created() {
    
  },
  methods: {
    
  },
}
    
</script>
<style scoped>
@import "./assets/css/normalize.css";
/* #app{
  position: relative;
} */
</style>
