<template>
  <div id="hd-control">
    <control>
      <div slot="left" class="ltitle">热门活动</div>
      <div slot="center" class="title">
        <div v-for="(item,index) in hdtitle" 
        :key="index"
        class="title-item"
        @mouseenter="mouseEnter($event,index)"
        @mouseleave="mouseLeave($event)"
        >{{item}}</div>
        </div>
      <div slot="right" class="rtitle"><a href="https://lol.qq.com/v/v2/index.shtml"><div>更多-></div></a></div>
    </control>
  </div>
</template>

<script>
import Control from '../../common/control/Control.vue'
export default {
  components: { Control },
  name:'HdControl',
  data() {
    return {
      currentIndex:0
    }
  },
  props:{
    hdtitle:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods: {
     mouseEnter($event,index){
      $event.currentTarget.className="active";
      this.$emit('itemClick',index)
    },
    mouseLeave($event){
      $event.currentTarget.className="title-item";
     
    }
  },
}
</script>

<style scoped>
#hd-control{
  color:#282828;
}

.title{
  display: flex;
  height: 50px;
}
.title-item{
  /* flex: 1; */
  text-align: left;
  margin-left: 25px;
  padding-top: 10px;
}
.ltitle{
  font-size: 26px;
  padding-top: 10px;
  margin-left: 10px;
}
.rtitle{
  font-size: 10px;
  padding-top: 10px;
}
.active{
  border-bottom: 2px solid #0099FF;
  text-align: left;
  margin-left: 25px;
  padding-top: 10px;
  color:#0099FF ;
}
</style>