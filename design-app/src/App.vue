<template>
 <div id="app">     
        <router-view/>
        <tab-bar>
           <tab-item v-for="tabItem in tabList" :key="tabItem.title" :info="tabItem">
               <!-- {{tabItem.title}} -->
              </tab-item>
        </tab-bar>
 </div>
</template>
<script>

export default {
   
    data(){
        return {
            tabList:[
                {title:'首页',path: '/home'},
                {title:'杂志',path: '/journal'},
                {title:'设计师',path: '/designer'},
                 {title:'我的',path: '/mine'}
            ]
        }
    }
}

    
</script>
<style lang="scss" scoped>

</style>
