<template>
  <div class="hd-list">
    <hd-list-item 
    v-for="(item,index) in huodong"
    :huodongitem="item"
    :key="index"/>
  </div>
</template>

<script>
import HdListItem from './HdListItem.vue'
export default {
  components: { HdListItem },
  name:'HdList',
  props:{
    huodong:{
      type:Array,
      default(){
        return[]
      }
    },
  }
}
</script>

<style scoped>
.hd-list{
  display: flex;
  margin-top: 15px;
}
</style>