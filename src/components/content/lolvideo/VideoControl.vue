<template>
  <control>
    <div slot="left" class="left-title">最新视频</div>
    <div slot="center" class="title">
      <div 
      v-for="(item,index) in videoHeadTitle"
      :key="index"
      class="title-item"
      @mouseenter="mouseEnter($event,index)"
      @mouseleave="mouseLeave($event)"
      >{{item}}
    </div>
    </div>
    <div slot="right" class="right-title">
      <a href="https://lol.qq.com/v/v2/index.shtml">
      <div>更多视频-></div>
      </a>
    </div>
  </control>
</template>

<script>
import Control from '../../common/control/Control.vue'
export default {
  components: { Control },
  name:"VideoControl",
  props:{
     videoHeadTitle:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      currentIndex:0
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
.title{
  display: flex;
  height: 50px;
}
.left-title{
   font-size: 26px;
  padding-top: 10px;
  margin-left: 10px;
}
.right-title{
  font-size: 10px;
  padding-top: 10px;
}
.right-title a{
  text-decoration: none;
}
.title-item{
  text-align: left;
  margin-left: 25px;
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