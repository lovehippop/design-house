<template>
    <div class="page" id="designer">
        <header>
            <h1 class="title">设计师</h1>
            <van-icon class="search" name="search" size="25px" />
        </header>
            <designerNavBar>
                <designerNavList ></designerNavList>
            </designerNavBar> 
         <scroller :top='89' :bottom='49'>
             <designerContent>

             </designerContent>
         </scroller>
    </div>
</template>

<script>
import scroller from "../../common/components/scroller/scroller";
import designerNavBar from "../../components/designer/designerNavBar";
import designerNavList from "../../components/designer/designerNavList";
import designerContent from "../../components/designer/designerContent";

import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
export default {
  components: {
    scroller,
    designerNavBar,
    designerContent,
    designerNavList
  }
};
</script>

<style lang="scss" scoped>
#designer {
  width: 100%;
  height: 100%;
  background: #f3f2f0;
  position: relative;
  header {
    height: 44px;
    .title {
      font-size: 25px;
      text-align: center;
      line-height: 44px;
    }
    .search {
      color: #888886;

      position: absolute;
      right: 10px;
      top: 9px;
    }
  }
}
</style>

