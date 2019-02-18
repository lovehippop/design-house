<template>
    <div id="designerNavBar">
        <ul class="priceList">
        <li v-for ="(item,index) in priceList" :key="item.id" @click="showActive(index)">
            {{item.priceItem}}
            <van-icon class="arrow-down" name="arrow-down" size="25px" />
        </li>
        </ul>
        <slot/>
    </div>
</template>
<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
export default {
  data: function() {
    return {
      priceList: [
        {
          id: 1,
          priceItem: "设计报价"
        },
        {
          id: 2,
          priceItem: "所在地区"
        },
        {
          id: 3,
          priceItem: "只看同省"
        }
      ],
      isSelectIndex: ""
    };
  },

  methods: {
    showActive: function(index) {
      this.isShow = !this.isShow;
      this.isSelectIndex = index;
    }
  }
  //   watch: {
  //     isSelectIndex: function(oldVal, newVal) {
  //       console.log("oldVal", oldVal);
  //       console.log("newVal", newVal);
  //     }
  //   }
};
</script>
<style lang="scss" scoped>
#designerNavBar {
  width: 100%;
  height: 45px;
  .priceList {
    display: flex;
    justify-content: space-around;
    line-height: 45px;
    .arrow-down {
      vertical-align: middle;
    }
  }
}
</style>


