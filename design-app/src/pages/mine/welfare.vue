<template>
<div id="welfare">
    <header class="border-bottom">
        <van-icon class="arrow-left" name="arrow-left" size="25px" @click="backActive"/>
        <h1 class="title">会员福利</h1>
    </header>

</div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import "vant/lib/index.css";
Vue.use(Icon);
export default {
  methods: {
    backActive: function() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss" scoped>
#welfare {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  header {
    height: 44px;
    .arrow-left {
      font-weight: 600;
      display: block;
      float: left;
      line-height: 44px;
      color: #6b6a68;
    }
    .title {
      font-size: 25px;
      text-align: center;
      line-height: 44px;
      color: #323137;
    }
  }
}
</style>


