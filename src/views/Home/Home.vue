<template>
  <div class="home">
    <Conten>
      <router-view></router-view>
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
      swipers: [],
      midel: [],
      daymust: []
    };
  },
  async created() {
    const { data } = await this.$http.get("/api/mock");
    this.swipers = data.data.banner;
    this.midel = data.data.modle;
    this.daymust = data.data.daymust;
    console.log(data);
  },
  methods: {
    bannerEv(data) {
      return () => {
        window.open(data.src);
      };
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

.shopful {
  height: 300px;
  display: flex;
  justify-content: space-around;

  .shop {
    width: 120px;

    .shoptop {
      width: 100%;
      position: relative;

      .hotsell {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 0px;
        left: 0px;
      }

      .infotitle {
        background: linear-gradient(to right, #fe8a42, #ff496c);
        position: absolute;
        bottom: 0px;
        left: 0px;
        font-size: 12px;
        color: #fff;
        padding: 4px;
        padding-right: 5px;
        padding-left: 12px;
        border-radius: 0 6px 0 0;
      }
    }

    .shopbottom {
      .name {
        color: #000000;
        font-size: 13px;
        margin: 5px 0;
      }

      .Price {
        .Postprice {
          color: #ff5777;
          font-size: 14px;
          font-weight: 600;
        }

        .oriprice {
          margin-left: 4px;
          text-decoration: line-through;
          color: #999999;
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }

  .gopintuan {
    height: 26px;
    width: 100px;
    margin: 0 auto;
    color: #fff;
    background: #ff5777;
    font-size: 13px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
  }
}
</style>
