<template>
  <div :class="$style.center"></div>
</template>

<script>
export default {};
</script>

<style lang="stylus" module>
.center {
  height: 100vw;
  width: 100%;
  background: url('@/assets/404.svg') no-repeat center;
  background-size: 400px;
  overflow: hidden;
}
</style>