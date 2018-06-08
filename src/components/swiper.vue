<template>
  <div>
    <div :class="$style.swiper">
      <van-swipe :autoplay="3000">
        <slot></slot>
      </van-swipe>
    </div>
  </div>

</template>

<script>
export default {};
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