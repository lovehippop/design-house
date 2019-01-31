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


 app.get('/api/home/catelist',(req,res)=>{
     let result=mock({
         status:0,
         message:'ok',
         data:{
                'c|4':[{
                    'num|+1':10
                }]

            
         }
     });
     res.json(result)
 })




app.listen('9000','localhost',(error)=>{
    if(error){
        console.log('启动失败')
    }else{
        console.log('启动成功')
    }
})