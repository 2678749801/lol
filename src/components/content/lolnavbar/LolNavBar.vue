<template>
  <div id="lolnavbar">
    <nav-bar class="nav-bar">
    <div slot="left"><img  class="lolimg"src="http://game.gtimg.cn/images/lol/v3/logo-public.png" alt=""></div>
    <div slot="center" class="title">
      <div class="title-item" v-for="item in titles">
        {{item}}
      </div>
      </div>
      <div slot="right" class="right-img">
        <img src="~assets/img/lolnavbar/sousuo.png" alt="">
        <img src="~assets/img/lolnavbar/shouji.png" alt="" @mouseenter="isShow=true" @mouseleave="isShow=false" >
        <img src="~assets/img/lolnavbar/denglu.png" alt="">
        <p>亲爱的召唤师，欢迎登录</p>
    </div>
    </nav-bar>
      <div class="erweima" v-show="isShow">
        <img src="~assets/img/lolnavbar/shoujierweima.png" alt="">
      </div>
      
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
 name:'LolNavBar',
  components: { 
    NavBar,
    },
  data() {
    return {
      titles:['游戏资料', '商城/合作','社区互动','赛事官网','自助社区'],
      isShow:false
    }
  },
  methods: {
   
  },
}
</script>

<style scoped>
#lolnavbar{
  height: 360px;
  background-image: url(http://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_9738cbf381656178c46c0bc5d3488ac7/0);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color:#fff
  
}
.title{
  display: flex;
  font-size: 20px;
}
.title-item{
flex: 1;
}
.lolimg{
  margin-top: 10px;
}
.right-img{
  margin-top: -3px;
  /* padding-right: 0; */
  display: flex;
}
.right-img img {
  padding: 25px;
  width: 25px;
  height: 25px;
}
.right-img p{
  /* margin-left: 0px; */
  margin-top: 5px;
}
.erweima{
 position: fixed;
 top: 66px;
 left: 970px;
 
}

</style>