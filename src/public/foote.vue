<template>
  <div :class="$style.footer">
    <div v-touch:tap="foote(1)">
      <van-icon :name="icon1" class="animated" v-bind:class="{bounceIn:isactive1}" />
    </div>
    <div v-touch:tap="foote(2)">
      <van-icon :name="icon2" class="animated" v-bind:class="{bounceIn:isactive2}" />
    </div>
    <div v-touch:tap="foote(3)">
      <van-icon :name="icon3" class="animated" v-bind:class="{bounceIn:isactive3}" />
    </div>
    <div v-touch:tap="foote(4)">
      <van-icon :name="icon4" class="animated" v-bind:class="{bounceIn:isactive4}" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: "home",
      icon2: "discount",
      icon3: "cart",
      icon4: "contact",
      isactive1: false,
      isactive2: false,
      isactive3: false,
      isactive4: false,
      // 避免用户多次点击导致动画多次触发影响性能
      timeout: true
    };
  },
  methods: {
    foote(i) {
      return () => {
        if (this.timeout) {
          this["isactive" + i] = true;
          this.timeout = false;
          setTimeout(() => {
            this["isactive" + i] = false;
            console.log(i);
            this.timeout = true;
          }, 400);
          // if (i == 1) {
          //   this.$router.replace({
          //     path: "/"
          //   });
          // } else if (i == 2) {
          //   this.$router.replace({
          //     path: "/classif"
          //   });
          // } else if (i == 3) {
          //   this.$router.replace({
          //     path: "/cart"
          //   });
          // } else if (i == 4) {
          //   this.$router.replace({
          //     path: "/user"
          //   });
          // }
        }
      };
    }
  }
};
</script>

<style lang="stylus" module>
.footer {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #e5e5e5;

  div {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      color: #999;
      font-size: 24px;
    }
  }
}
</style>