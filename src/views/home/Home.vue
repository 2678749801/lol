<template>
  <div id="home">
    <lol-nav-bar :navbar="navbar" />
    <lol-swiper :swiper="swiper" />
    <div class="lol-news">
      <news-control :title="title" @tabClick="tablClick" ref="newscontrol" />
      <news-item :news="news[currentType]" />
    </div>
    <hd :huodong="huodong" :hdtitle="hdtitle" />
    <xia-zai />
    <lol-img />
    <lol-video :video="video" :videoHeadTitle="videoHeadTitle" />
    <lol-create :create="create" />
    <img src="~assets/img/lolimg/bottom.png" alt="" />
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import NewsControl from "components/content/lolnews/NewsControl";
import NewsItem from "components/content/lolnews/NewsItem";
import LolNavBar from "components/content/lolnavbar/LolNavBar.vue";
import LolSwiper from "components/content/lolswiper/LolSwiper.vue";
import Hd from "components/content/remenhuodong/Hd.vue";
import XiaZai from "../../components/content/xiazai/XiaZai.vue";
import LolImg from "../../components/content/lolimage/LolImg.vue";
import LolVideo from "../../components/content/lolvideo/LolVideo.vue";
import LolCreate from "../../components/content/lolcreate/LolCreate.vue";
export default {
  name: "Home",
  components: {
    LolNavBar,
    LolSwiper,
    NewsControl,
    NewsItem,
    Hd,
    XiaZai,
    LolImg,
    LolVideo,
    LolCreate,
  },
  data() {
    return {
      navbar: {
        ziliao: [],
        shangcheng: [],
        shequ: [],
        saishi: [],
        zizhu: [],
      },
      swiper: [],
      news: {
        zonghe: [],
        gonggao: [],
        saishi: [],
        gonglue: [],
        shequ: [],
      },
      huodong: {
        zzjx: [],
        scth: [],
        cqhd: [],
      },
      video: {
        tuijian: [],
        guanfang: [],
        yule: [],
        saishi: [],
        yunding: [],
        jiaoxue: [],
      },
      title: ["综合", "公告", "赛事", "攻略", "社区"],
      currentType: "zonghe",
      currentIndex: 0,
      hdtitle: [],
      videoHeadTitle: [],
      create: [],
    };
  },
  created() {
    this.getHomeMultidata(); //从接口获取数据
  },
  methods: {
    getHomeMultidata() {
      //请求数据 并对接口数据进行筛选
      getHomeMultidata().then((res) => {
        this.swiper = res.swiper;
        this.navbar.ziliao.push(...res.navbar.ziliao);
        this.navbar.shangcheng.push(...res.navbar.shangcheng);
        this.navbar.shequ.push(...res.navbar.shequ);
        this.navbar.saishi.push(...res.navbar.saishi);
        this.navbar.zizhu.push(...res.navbar.zizhu);
        this.news.zonghe.push(...res.news.zonghe);
        this.news.gonggao.push(...res.news.gonggao);
        this.news.saishi.push(...res.news.saishi);
        this.news.gonglue.push(...res.news.gonglue);
        this.news.shequ.push(...res.news.shequ);
        this.huodong.zzjx.push(...res.huodong.zzjx);
        this.huodong.scth.push(...res.huodong.scth);
        this.huodong.cqhd.push(...res.huodong.cqhd);
        this.hdtitle = res.huodong.hdtitle;
        this.video.tuijian.push(...res.shipin.tuijian);
        this.video.guanfang.push(...res.shipin.guanfang);
        this.video.yule.push(...res.shipin.yule);
        this.video.saishi.push(...res.shipin.saishi);
        this.video.yunding.push(...res.shipin.yunding);
        this.video.jiaoxue.push(...res.shipin.jiaoxue);
        this.videoHeadTitle = res.shipin.hdtitle;
        this.create = res.create;
        console.log(res);
      });
    },
    tablClick(index) {
      switch (index) {
        case 0:
          this.currentType = "zonghe";
          break;
        case 1:
          this.currentType = "gonggao";
          break;
        case 2:
          this.currentType = "saishi";
          break;
        case 3:
          this.currentType = "gonglue";
          break;
        case 4:
          this.currentType = "shequ";
      }
      this.$refs.newscontrol.currentIndex = index;
      console.log(index);
    },
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  position: relative;
}
.lol-news {
  position: absolute;
  width: 450px;
  /* width: 40%; */
  height: 340px;
  color: red;
  left: 880px;
  top: 380px;
}
</style>