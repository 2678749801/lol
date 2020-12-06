<template>
  <div id="app">
    <lol-nav-bar/>
    <lol-swiper/>
    <lol-news/>
  </div>
</template>
<script>
import LolNavBar from './components/content/lolnavbar/LolNavBar.vue'
import LolSwiper from './components/content/lolswiper/LolSwiper.vue'
import LolNews from './components/content/lolnews/LolNews'
export default {
  name:'app',
  components:{
    LolNavBar,
    LolSwiper,
    LolNews
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
