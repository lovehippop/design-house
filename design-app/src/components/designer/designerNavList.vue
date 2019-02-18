<template>
     <ul class="priceItem" >
            <li class="title">{{isSelectIndex}}</li>
            <li class="price" v-for="item in priceItem" :key="item.id">{{item.price}}</li>
                {{getId}}

    </ul>
</template>
<script>
import { getDesignerPriceCateList } from "../../services/designerService";

export default {
  props: ["isIndex"],
  data: function() {
    return {
      title: "",
      priceItem: null,
      isShow: false,
      isSelectIndex: "1"
    };
  },
  created: function() {
    getDesignerPriceCateList().then(data => {
      data = data.designerPrice;
      this.title = data[0].title;
      this.priceItem = data[1];
    });
  },
  computed: {
    getId: function() {
      const priceList = this.$parent.priceList;
      priceList.map(item => {
        return item.id;
        // console.log(item.id);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.priceItem {
  width: 100%;
  position: relative;
  z-index: 10;
  background: red;
  .title {
    color: #333333;
    line-height: 30px;
  }
  .price {
    color: #d8d8d8;
    line-height: 30px;
  }
}
</style>