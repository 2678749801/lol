<template>
  <div id="lol-news">
    <news-control :title="title" @tabClick="tablClick" ref="newscontrol"/>
    <!-- <div v-for="item in news.zonghe">{{item}}</div> -->
    <!-- <div v-for="item in bigtitles">{{item}}</div> -->
    <news-item :news="news[currentType]"/>
    <news/>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
import NewsControl from 'components/content/lolnews/NewsControl'
import NewsItem from 'components/content/lolnews/NewsItem'
import News from 'components/content/lolnews/News'
export default {
  name:'LolNews',
  components:{
    NewsControl,
    NewsItem,
    News,
  },
  data() {
    return {
      news:{
        'zonghe':[],
        'gonggao':[],
        'saishi':[],
        'gonglue':[],
        'shequ':[],
      },
      title:['综合','公告','赛事','攻略','社区'],
      currentType:'zonghe',
      currentIndex:0,
      bigtitles:[]
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods: {
     getHomeMultidata(){
       getHomeMultidata().then(res=>{
         this.news.zonghe.push(...res.news.zonghe);
         this.news.gonggao.push(...res.news.gonggao);
         this.news.saishi.push(...res.news.saishi);
         this.news.gonglue.push(...res.news.gonglue);
         this.news.shequ.push(...res.news.shequ);
         this.bigtitles=res.news.bigtitles;
         console.log(res)
    })
    },
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
  position: relative;
  width: 450px;
  height: 340px;
  color: red;
  left: 65%;
  bottom: 340px;
}
</style>