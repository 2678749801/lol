<template>
<div>
  <swiper class="lol-swiper" >
    <swiper-item v-for="(item,index) in swiper"  :key="index" class="lol-swiper-item">
      <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
  <div class="swiper-title"><div v-for="(item,index) in swiper" :key="index" class="swiper-title-item">{{item.title}}</div></div>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
import Swiper from '../../common/swiper/Swiper.vue'
import SwiperItem from '../../common/swiper/SwiperItem.vue'
export default {
  components: { Swiper, SwiperItem },
  name:'LolSwiper',
  data() {
    return {
      swiper:[]
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods: {
    getHomeMultidata(){
       getHomeMultidata().then(res=>{
         this.swiper=res.swiper
         
        //  console.log(res)
      // this.banners=res.data.banner.list;
      // this.recommends=res.data.recommend.list;
      // console.log(this.title)
    })
    },
  },
}
</script>

<style scoped>
.lol-swiper{
  margin-top: 30px;
  height: 310px;
  width: 60%;
  margin-left: 20px;
}

.swiper-title{
  height: 30px;
  font-size: 13px;
  width: 60%;
  display: flex;
  background-color:#E6E6FA;
   margin-left: 20px;
}
.swiper-title-item{
  margin-left: 20px;
  flex: 1;
  text-align: center;
  margin-top: 10px;
   /* background-color: darkgray; */
  color: 	#696969;
  
}
</style>