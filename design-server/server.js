const express= require('express');
const {mock,Random}=require('mockjs')
const app =express();


/**
 * 示范
 * app.get('/api/home/filexxx',(req,res)=>{
 *  let result = mock({
 *         message:'ok',
 *          state:'200',
 *            data:{
 *              "bannerlist|4":[
 *              {
 *                                           
 *      }]             
 *          }
 *  
 *  })
 * })
 */





app.listen('9000','localhost',(error)=>{
    if(error){
        console.log('启动失败')
    }else{
        console.log('启动成功')
    }
})