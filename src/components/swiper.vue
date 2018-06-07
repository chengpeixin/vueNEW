<template>
  <div>
    <div :class="$style.swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in datas" v-touch:tap="tapgo(item)">
          <img :src="item.img" style="height:100%;">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  methods: {
    tapgo(item) {
      return () => {
        this.$emit("tap", item);
      };
    }
  }
};
</script>

<style lang="stylus" module>
.swiper {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100;
  }
}
</style>