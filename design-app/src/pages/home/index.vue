<template>
    <div class="page" id="home">
        

        <search></search>
        <ul class="catelist">
            <li v-for="item in catelist" :key="item.id">
                <img :src="item.img" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>

        

        

    </div>
</template>

<script>
import Search from '../../components/home/headSearch'
import {getHomeCateList} from '../../services/homeService.js'
export default {
    data(){
        return {
           catelist:null
        }
    },
        components: {
            Search
        },
        created(){
            getHomeCateList()
            .then(data=>{
                console.log(data)
                this.catelist=data.catelist;
            })
        }
}
</script>

<style lang="scss" scoped>
    .catelist{
        padding-top: 30px;
        display: flex;
        justify-content: space-around;

        li{
           img{
               margin: 0 auto;
           }
        }
    }
</style>

