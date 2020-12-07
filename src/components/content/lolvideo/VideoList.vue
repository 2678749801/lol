<template>
  <div class="video-list">
    <video-list-item
    v-for="(item,index) in video"
    :key="index"
    :video-item="item"
    />
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
export default {
  components: { VideoListItem },
  name:"VideoList",
  props:{
    video:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.video-list{
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content:space-around;
}
</style>