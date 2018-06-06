<template>
  <div class="home">
    <Heade><input type="text"></Heade>
    <Conten></Conten>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Heade from "@/public/heade";
import Footer from "@/public/foote";
import Conten from "@/public/conten";
import Request from "@/api/axios.config.js";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    tap() {
      this.$router.push({ path: `about/${100}` });
    }
  },
  components: { Heade, Footer, Conten }
};
</script>
