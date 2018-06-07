<template>
  <div class="home">
    <div :class="$style.header">
      <div>
        <img src="./../../assets/mgj.png">
      </div>
      <div>
        <input type="text" placeholder="拖鞋">
      </div>
      <div></div>
    </div>
    <Conten>
      <Swiper :datas="swipers" @tap="swiperTap"></Swiper>
      <Recommend></Recommend>
    </Conten>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Heade from "@/public/heade";
import Footer from "@/public/foote";
import Conten from "@/public/conten";
import Swiper from "@/components/swiper";
import Recommend from "@/components/recomm";
export default {
  name: "home",
  data() {
    return {
      swipers: [
        {
          img: `https://s11.mogucdn.com/mlcdn/c45406/180402_34178d4id9lakh1bc38f5aja55cj8_750x340.jpg_800x9999.v1c7E.70.webp`,
          src: "https://www.baidu.com"
        },
        {
          img: `https://s2.mogucdn.com/mlcdn/c45406/180605_2l985e831ik4f4k9biell8d4hc7e9_750x340.jpg_800x9999.v1c7E.70.webp`,
          src: ""
        },
        {
          img: `https://s2.mogucdn.com/mlcdn/c45406/180605_2k9g5h2k56idldf6c5ci82d4ca3gg_750x340.jpg_800x9999.v1c7E.70.webp`,
          src: ""
        },
        {
          img: `https://s2.mogucdn.com/mlcdn/c45406/180605_0804hicig66ghlk14dfag430eaidd_750x340.jpg_800x9999.v1c7E.70.webp`,
          src: ""
        }
      ]
    };
  },
  created() {
    console.log(this.$cookies);
  },
  methods: {
    swiperTap(data) {
      window.open(data.src);
      console.log(data);
      // this.$router.push({ path: `about/${100}` });
    }
  },
  components: { Heade, Footer, Conten, Swiper, Recommend }
};
</script>

<style lang="stylus" module>
.header {
  width: 100%;
  height: 45px;

  div:first-child {
    width: 15%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }
  }

  div:nth-child(2) {
    width: 70%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    color: #999;
    font-size: 13px;

    input {
      width: 100%;
      height: 30px;
      background-color: #eee;
      border-radius: 3px;
      padding-left: 30px;
      // background-img
    }

    input::placeholder {
      color: #999;
    }
  }

  div:nth-child(3) {
    width: 15%;
    height: 100%;
    float: left;
    // background: yellow;
  }
}
</style>
