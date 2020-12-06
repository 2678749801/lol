<template>
  <div class="head-title">
    <div v-for="(item,index) in title" 
    :key="index" class="head-title-item" 
    @click="spanClick(index)"
    :class="{active:index===currentIndex}"
    
   ><span >{{item}}</span></div>
    <!-- <div v-for="item in bigtitles"></div> -->
  </div>
</template>

<script>
export default {
  name:'NewsControl',
  props:{
    title:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      currentIndex:0//用来控制谁被选中 当发生点击时 外面通过ref来改变值
    }
  },
  methods: {
    spanClick(index){
      this.$emit('tabClick',index)
    },
    
  },
}
</script>

<style scoped>
.head-title{
  height: 60px;
  width: 100%;
  display: flex;
  text-align: center;

}
.head-title-item{
  flex: 1;
  margin-left: 40px;
  font-size: 20px;
  color: darkgrey;
}
.active{
  color:	#0099FF;
  font-weight:bold;
  
}
.active span{
border-bottom: 2px solid #0099FF;
}
</style>