<template>
<div id="lol-swiper">
  <swiper class="lol-swiper" >
    <swiper-item v-for="(item,index) in swiper"  :key="index" class="lol-swiper-item">
      <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
  <div class="swiper-title"><div v-for="(item,index) in swiper" :key="index" class="swiper-title-item">{{item.title}}</div></div>
  </div>
</template>

<script>
import Swiper from '../../common/swiper/Swiper.vue'
import SwiperItem from '../../common/swiper/SwiperItem.vue'
export default {
  components: { Swiper, SwiperItem },
  name:'LolSwiper',
  props:{
    swiper:{
      type:Array,
      default(){
        return[]
      }
    }
  },
}
</script>
<style scoped>
#lol-swiper{
  width: 60%;
}
.lol-swiper{
  margin-top: 30px;
  height: 310px;
  /* width: 60%; */
  margin-left: 20px;
}
.swiper-title{
  height: 30px;
  font-size: 13px;
  /* width: 60%; */
  display: flex;
  background-color:#E6E6FA;
   margin-left: 20px;
}
.swiper-title-item{
  margin-left: 20px;
  flex: 1;
  text-align: center;
  margin-top: 10px;
  color: 	#696969;
}
</style>