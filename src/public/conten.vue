<template>
  <div :class="$style.wrapper" id="wrapper">
    <ul class="content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    new this.$Bscroll(document.getElementById("wrapper"));
  }
};
</script>

<style>
.content {
  padding-bottom: 10px;
}
</style>

<style lang="stylus" module>
.wrapper {
  height: 571px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>