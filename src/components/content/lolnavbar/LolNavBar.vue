<template>
  <div id="lolnavbar">
    <nav-bar class="nav-bar" path="/ziliao">
      <div slot="left">
        <img
          class="lolimg"
          src="http://game.gtimg.cn/images/lol/v3/logo-public.png"
          alt=""
        />
      </div>
      <div
        slot="center"
        class="title"
        @mouseenter="issShow = true"
        @mouseleave="issShow = false"
      >
        <div class="title-item" v-for="item in titles">
          {{ item.btitle }}
          <div class="titlt-item-div">{{ item.wenzi }}</div>
        </div>
      </div>
      <div slot="right" class="right-img">
        <img src="~assets/img/lolnavbar/sousuo.png" alt="" />
        <img
          class="phone"
          src="~assets/img/lolnavbar/shouji.png"
          alt=""
          @mouseenter="isShow = true"
          @mouseleave="isShow = false"
        />
        <img src="~assets/img/lolnavbar/denglu.png" alt="" />
        <p>亲爱的召唤师，欢迎登录</p>
      </div>
    </nav-bar>
    <div class="erweima" v-show="isShow">
      <img src="~assets/img/lolnavbar/shoujierweima.png" alt="" />
    </div>
    <select1
      :navbar="navbar"
      v-show="issShow"
      @mouseenter.native="issShow = true"
      @mouseleave.native="issShow = false"
    />
    <div class="banben">
      <p class="banben1">当前游戏版本</p>
      <p class="banben2">Ver 10.24</p>
      <button class="b1">版本详情</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Select1 from "./Select1.vue";
export default {
  name: "LolNavBar",
  components: {
    NavBar,
    Select1,
  },
  props: {
    navbar: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      titles: [
        {
          btitle: "游戏资料",
          wenzi: "GAME INFO",
        },
        {
          btitle: "商城/合作",
          wenzi: "STORE",
        },
        {
          btitle: "社区互动",
          wenzi: "COMMUNITY",
        },
        {
          btitle: "赛事官网",
          wenzi: "ESPORTS",
        },
        {
          btitle: "自助社区",
          wenzi: "SYSTEM",
        },
      ],
      isShow: false,
      issShow: false,
      isActive: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
#lolnavbar {
  height: 360px;
  background-image: url(http://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_86cdf7f4bf5c9ac8eabdceb85c97bab8/0);
  background-repeat: no-repeat;
  color: #fff;
  background-position: 50% 0px;
  width: 100%;
}

.nav-bar {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgb(14, 13, 13)),
    to(#9e8e8e)
  ); /*谷歌*/
  opacity: 0.8;
  position: relative;
}
.title {
  display: flex;
  font-size: 18px;
  height: 66px;
}
.title-item {
  flex: 1;
  color: #f8f8f8;
}
.titlt-item-div {
  line-height: 10px;
  font-size: 15px;
  color: #e8e8e8;
}
.lolimg {
  margin-top: 10px;
}
.right-img {
  margin-top: -3px;
  display: flex;
}
.right-img img {
  padding: 25px;
  width: 30px;
  height: 30px;
}
.right-img .phone {
  width: 20px;
  height: 30px;
}
.right-img p {
  margin-top: 5px;
}
.erweima {
  position: fixed;
  top: 66px;
  left: 970px;
}
.erweima img {
  border-radius: 15px;
}
.banben {
  display: flex;
  position: absolute;
  left: 80%;
  top: 10%;
}
.banben .banben1 {
  color: #9e8e8e;
  font-size: 13px;
}
.banben .banben2 {
  color: rgb(235, 172, 95);
  font-size: 13px;
  padding-left: 10px;
}
button {
  background-color: rgb(12, 12, 12);
  opacity: 0.5;
  width: 80px;
  height: 20px;
  font-size: 13px;
  color: rgb(238, 158, 101);
}
.b1 {
  margin-top: 10px;
}
</style>