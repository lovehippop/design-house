<template>
    <div class="page" id="home">
       
        <search></search>


    </div>
</template>

<script>
import Search from '../../components/home/headSearch'
import {getHomeCateList} from '../../services/homeService.js'
export default {
        components: {
            Search
        },
        created(){
            getHomeCateList()
            .then(data=>{
                console.log(data)
            })
        }
}
</script>

<style>

</style>
