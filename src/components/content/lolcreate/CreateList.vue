<template>
  <div class="create-list">
    <create-list-item 
    v-for="(item,index) in create"
    :key="index"
    :create-item="item"
    />
  </div>
</template>

<script>
import CreateListItem from './CreateListItem.vue'
export default {
  components: { CreateListItem },
  name:"CreateList",
  props:{
    create:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.create-list{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  margin-left: 20px;
}
</style>