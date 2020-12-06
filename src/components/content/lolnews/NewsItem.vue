<template>
  <div class="newsItem">
    <div 
    v-for="(item,index) in news" 
    :key="index" class="news-item-item"
    @mouseenter="mouseEnter($event)"
    @mouseleave="mouseLeave($event)"> 
      <a :href="item.link" >
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"NewsItem",
  props:{
    news:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods: {
    mouseEnter($event){
      $event.currentTarget.className="isActive";
    },
    mouseLeave($event){
      $event.currentTarget.className="news-item-item";
    }
  },
}
</script>

<style scoped>
.newsItem{
  height: 250px
}
.news-item-item{
  height: 35px;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  padding-top: 15px;
}
.news-item-item a{
  color:dimgrey
}
a:link { 
text-decoration: none;

}
.isActive{
  height: 35px;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  padding-top: 15px;
  
}
.isActive a{
color:#0099FF;
}
</style>