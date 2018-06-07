<template>
  <div :class="$style.full">
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
    </div>
    <div :class="$style.item">
      <img src="https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif">
      <p>0元夺宝</p>
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
  height: 75px;

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