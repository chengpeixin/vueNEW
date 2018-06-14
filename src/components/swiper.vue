<template>
  <div>
    <div :class="$style.swiper">
      <van-swipe :autoplay="3000" :show-indicators="showIndicators">
        <slot></slot>
      </van-swipe>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    showIndicators: {
      default: true
    }
  }
};
</script>

<style lang="stylus" module>
.swiper {
  width: 100%;

  img {
    width: 100%;
    height: 100;
  }
}
</style>