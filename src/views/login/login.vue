<template>
  <div>
    <div :class="$style.login">登录</div>
    <div :class="$style.wchat" v-touch:tap="login()">
      <van-icon name="wechat" style="margin-right:10px;" /> 微信登录</div>
    <p :class="$style.hrbr">其他登录方式</p>
    <div :class="$style.loginmodefu">
      <div :class="$style.loginmode" v-for="(item,i) in imgs">
        <div :class="$style.imgfu" v-touch:tap="login(i)">
          <img width="100%" height="100%" :src="item.img">
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
    <van-popup v-model="phoneShow" position="right" :overlay="false">
      <div :class="$style.phoneLogin">
        <Heade v-on:backfun="backfun" interruptback="true" :class="$style.heade">
          免密登录
        </Heade>
        <div :class="$style.phonenum">
          <input type="text" placeholder="手机号" v-model="loginPhone">
        </div>
        <div :class="$style.vcode">
          <input type="text" placeholder="验证码" v-model="loginVcode">
          <button v-touch:tap="getVcode">{{Time}}</button>
        </div>
        <div :class="$style.tologin" v-touch:tap="tologin">登录</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Heade from "@/public/heade";

export default {
  data() {
    return {
      imgs: [
        {
          img: require("../../assets/qq.png"),
          name: "QQ登录"
        },
        {
          img: require("../../assets/phone.png"),
          name: "免密登录"
        },
        {
          img: require("../../assets/user.png"),
          name: "帐号登录"
        }
      ],
      phoneShow: false,
      loginPhone: "",
      loginVcode: "",
      Time: "获取验证码"
    };
  },
  methods: {
    login(i) {
      return () => {
        if (i === 1) {
          this.phoneShow = true;
          return;
        }
      };
    },
    backfun() {
      this.phoneShow = false;
    },
    async getVcode() {
      if (/^1\d{10}$/.test(this.loginPhone)) {
        if (this.Time != "获取验证码" && this.Time != "重新获取验证码") return;
        this.Time = 29;
        let interval = setInterval(() => {
          if (this.Time == 1) {
            this.Time = "重新获取验证码";
            clearInterval(interval);
            return;
          }
          this.Time--;
        }, 1000);
        console.log("true");
      } else {
        this.$toast("请输入正确的手机号");
      }
    },
    async tologin() {
      if (/^[0-9]{4}$/.test(this.loginVcode)) {
        await this.$Cookie.set("user", {
          userid: 1012,
          name: "啄木鸟",
          phone: this.loginPhone
        });
        this.$router.replace("/user");
      } else {
        this.$toast("请输入正确的验证码");
      }
    }
  },
  components: {
    Heade
  }
};
</script>

<style lang="stylus" module>
.login {
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
  font-weight: 400;
  font-size: 28px;
}

.wchat {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  color: #fff;
  font-size: 17px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(9, 187, 7);
}

.hrbr {
  width: 100%;
  height: 100px;
  line-height: 100px;
  color: #999;
  font-size: 15px;
  text-align: center;
  margin: 80px auto 0 auto;
}

.hrbr::before {
  content: '';
  display: block;
  width: 6%;
  height: 1px;
  margin: 0 auto;
  background: #bbbbbb;
}

.loginmodefu {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.loginmode {
  width: 60px;
  float: left;

  p {
    margin-top: 7px;
    font-size: 13px;
    color: #666;
    text-align: center;
  }

  .imgfu {
    width: 50px;
    height: 50px;
    margin: 0 auto;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.phoneLogin {
  width: 375px;
  height: 667px;
  margin-top: 200px;
}

.heade {
  border-bottom: 1px solid #c9c7c8;
}

.phonenum {
  font-weight: 400;
  margin-top: 60px;

  input {
    display: block;
    height: 50px;
    width: 80%;
    margin: 0 auto;
    font-size: 20px;
    color: #424242;
    border-bottom: 1px solid #ddd;
  }

  input::-webkit-input-placeholder {
    font-weight: 400;
    color: #bbb;
  }
}

.vcode {
  position: relative;
  font-weight: 400;

  input {
    display: block;
    height: 50px;
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
    color: #424242;
    border-bottom: 1px solid #ddd;
  }

  input::-webkit-input-placeholder {
    font-weight: 400;
    color: #bbb;
  }

  button {
    height: 46px;
    position: absolute;
    right: 10%;
    bottom: 1px;
    color: #666;
    font-size: 14px;
    background: #fff;
  }
}

.tologin {
  width: 80%;
  height: 50px;
  background: #FF5777;
  color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0 auto;
}
</style>