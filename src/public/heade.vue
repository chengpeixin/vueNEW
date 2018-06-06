<template>
  <div>
    <div :class="$style.header">
      <div :class="$style.Headlayer" v-touch:tap="lefttop">{{left}}</div>
      <div :class="$style.Headlayer" v-touch:tap="middletop">
        <slot></slot>
      </div>
      <div :class="$style.Headlayer" v-touch:tap="righttop">{{right}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      default: "",
      type: String
    },
    left: {
      default: "",
      type: String
    },
    icon: {
      default: true,
      type: Boolean
    },
    middle: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    async lefttop() {
      if (this.left == "") return;
      history.back();
      console.log(1);
    },
    async middletop() {
      if (!this.middle) return;
      console.log(2);
    },
    async righttop() {
      if (this.right == "") return;
      console.log(3);
    }
  }
};
</script>

<style lang="stylus" module>
.header {
  width: 100%;
  height: 45px;
  background: #fff;
  color: #656b79;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  position: relative;

  .Headlayer:first-child {
    height: 100%;
    padding: 0 8px;
    font-size: 14px;
    line-height: 1;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 28px;
    background-image: url('@/assets/back.svg');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 18px;
  }

  .Headlayer:nth-child(2) {
    height: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Headlayer:nth-child(3) {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 8px;
    display: flex;
    align-items: center;
  }
}
</style>
