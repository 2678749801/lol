<template>
  <div class="list">
      <list-item>
        <img slot="image" src="~assets/img/xiazai/客服.png" alt="">
        <div slot="wenzi">客服中心</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/lol宇宙.png" alt="">
        <div slot="wenzi">lol宇宙</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/绑定微信.png" alt="">
        <div slot="wenzi">绑定微信</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/峡谷之巅.png" alt="">
        <div slot="wenzi">峡谷之巅</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/游戏资料.png" alt="">
        <div slot="wenzi">游戏资料</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/云顶之弈.png" alt="">
        <div slot="wenzi">云顶之弈</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/秩序殿堂.png" alt="">
        <div slot="wenzi">秩序殿堂</div>
      </list-item>
      <list-item>
        <img slot="image" src="~assets/img/xiazai/资料中心.png" alt="">
        <div slot="wenzi">资料中心</div>
      </list-item>
  </div>
</template>
<script>
import ListItem from './ListItem.vue'
export default {
  components: { ListItem },
  name:'XiaList',
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
}
</style>