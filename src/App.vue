<template>
  <div id="app">
    <lol-nav-bar/>
    <lol-swiper/>
    <lol-new/>
  </div>
</template>
<script>
import LolNavBar from './components/content/lolnavbar/LolNavBar.vue'
import LolSwiper from './components/content/lolswiper/LolSwiper.vue'
import LolNew from './components/content/lolnews/LolNew'
export default {
  name:'app',
  components:{
    LolNavBar,
    LolSwiper,
    LolNew
  },
  created() {
    
  },
  methods: {
    
  },
}
    
</script>
<style scoped>
@import "./assets/css/normalize.css";

</style>
