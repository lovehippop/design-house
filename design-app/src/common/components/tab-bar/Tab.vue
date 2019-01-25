<template>
     <router-link class="tab" :to="info.path">
           <van-icon name="success" />
          <span> {{info.title}} </span>
        </router-link>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
Vue.use(Icon);
export default {
  name:'tab-item',
    props:['info']
   
}
</script>

<style lang="scss" scoped>

.tab{
    text-align: center;
    flex: 1;
    list-style: none;
}



</style>
