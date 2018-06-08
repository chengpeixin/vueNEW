<template>
  <div :class="$style.full">
    <div :class="$style.item" v-for="item in datas">
      <img :src="item.img">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datas"]
};
</script>

<style lang="stylus" module>
.full {
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  height: 85px;

  img {
    display: block;
    margin: 0 auto;
    width: 80%;
  }

  p {
    margin-top: 2px;
    color: rgb(96, 96, 96);
    font-size: 12px;
    text-align: center;
  }
}
</style>