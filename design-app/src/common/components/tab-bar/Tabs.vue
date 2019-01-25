<template>
    <nav class="tabs border-top">
        <slot/>
    </nav>
</template>

<script>
export default {
    name:'tab-bar',
    props: {
        value: Number
    }


}
</script>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
     display: flex;
    //  border-top:1px solid #000; 
    /* background: lightgrey; */
}
</style>
