<template>
    <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
        <div class="scroller-content">
            <div class="pull-down" v-if="flag"></div>
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroller',
    props:{
        width:Number,
        height:Number,
        top:Number,
        bottom:Number,
        forword:Function
       

    },
    data(){
        return {
            scroll:null
        }
    },
    computed:{
        flag(){
            if(this.onscroll){
                return true;
            }else{
                return false;
            }
        },
        wrapStyle(){
            if(this.top && this.bottom){
                return {
                    position:'absolute',
                    top:this.top+'px',
                    bottom:this.bottom+'px'
                    
                   

                }
            }
            else{
                return {
                width:this.width+'px',
                height:this.height+'px'
            }
            }
           
        }  
    }, 
    methods:{ 
       
        scrollTo(y,time){
            this.scroll.scrollTo(0,y,time);
        }
    },
    mounted(){
         this.scroll=new BScroll(this.$refs.scroll,{
             click:true,
             probeType:3,
             startY:this.forword ? -10 : 0
         });
         this.scroll.on('beforeScrollStart',()=>{
             this.scroll.refresh();
         })
         //滚动监听
        if(this.forword){
           this.scroll.on('scrollEnd',()=>{
             let y=this.scroll.y;
             if(y>-50 && y<-10){
                 this.scroll.scrollTo(0,-50,-200)
             }
             else if(y>=-10){
                this.forword();
                this.scroll.scrollTo(0,-50,-200)
             }
           })
        }
    }

}
</script>

<style lang="scss" scoped>
.scroller-wrap{
    overflow: hidden;
    z-index: 2;
     width:100%;
     left:0;
   
}
.pull-down{
    width: 100%;
    height: 50px;
}

</style>
