<template>
    <div id="search">
        <i><van-icon name="search" size="20px"/></i>
        <input type="text" class="inpSearch">
        <i> <van-icon name="plus" size="20px"/></i>
      
    </div>
</template>

<script>

import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)
export default {

}
</script>

<style lang="scss" scoped>
    #search{
        height: 44px;
        background: gold;
        display: flex;
        align-items: center;
        justify-content:space-around;
           }
           .inpSearch{
               height: 30px;
               background: #e8e7e3;
               width: 200px;
               border: 0;
               outline: none;
               text-indent: 24px;
               border-radius: 10px;
           }
</style>

