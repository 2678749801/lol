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
      currentIndex:0
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
  font-weight:bold
}

</style>