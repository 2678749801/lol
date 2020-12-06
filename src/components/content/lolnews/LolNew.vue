<template>
  <div id="lol-news">
    <news-control :title="title" @tabClick="tablClick" ref="newscontrol"/>
    <news-item :news="news[currentType]"/>
  </div>
</template>

<script>
import NewsControl from 'components/content/lolnews/NewsControl'
import NewsItem from 'components/content/lolnews/NewsItem'
export default {
  name:'LolNews',
  components:{
    NewsControl,
    NewsItem,
  },
  props:{
    news:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      title:['综合','公告','赛事','攻略','社区'],
      currentType:'zonghe',
      currentIndex:0,
    }
  },
  created() {
  },
  methods: {
    tablClick(index){
      switch (index) {
        case 0:
          this.currentType='zonghe'
          break
        case 1:
          this.currentType='gonggao'
          break
        case 2:
          this.currentType='saishi'
          break
        case 3:
          this.currentType='gonglue'
          break
        case 4: 
          this.currentType='shequ'
      }
      this.$refs.newscontrol.currentIndex=index
      console.log(index)
    }
  },
}
</script>

<style scoped>
#lol-news{
  position: absolute;
  width: 450px;
  height: 340px;
  color: red;
  left: 880px;
  top: 380px;
}
</style>