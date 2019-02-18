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
                'catelist|4':[
                    {
                    'id|+1':1000,
                    name:'@ctitle(4)',
                    img:"@image('50x50','@color')"
                }
            ]

            
         }
     });
     res.json(result)
 })

app.get('/api/home/topiclist',(req,res)=>{
    let result=mock({
        status:0,
        message:'ok',
        data:{
            'topiclist|2':[
                {
                    'id|+1':0,
                    name:['话题','视频'],
                    title:['大家都在讨论','分享体验'],
                    img:"@image('100x70','@color')"
                }
            ],
            'itemData|1':[{
                img:"@image('')"
            }]

        }
    })
})


/**
 设计师报价列表数据
 */

app.get('/api/designerPrice/catelist', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            designerPrice: [
                {
                    'title': '全部报价',
                },
                [{ 'price': 100 + '元/m^2以下', 'id': 0 },
                { 'price': 100 + '-' + 199 + '元/m^2', 'id': 1 },
                { 'price': 200 + '-' + 299 + '元/m^2', 'id': 2 },
                { 'price': 300 + '-' + 399 + '元/m^2', 'id': 3 },
                { 'price': 400 + '-' + 499 + '元/m^2', 'id': 4 },
                { 'price': 500 + '元/m^2以上', 'id': 5 }
                ]

            ]

        }
    });
    res.json(result)
})


/**
 * 设计师列表内容数据
 */
app.get('/api/designerContent/catelist', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            'designerContent|4': [
                {
                    'id|+1': 1,
                    'userLogo': '@image(50x50)',
                    'userName': '@cname',
                    'province': '@province(true)',
                    'space': '@natural(100)' + '元/m^2',
                    'images|2': ['@image(170x90)']
                }

            ]

        }
    });
    res.json(result)
})


/**
 * 杂志页列表内容数据
 */

app.get('/api/journal/catelist', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            'journalContentListTime|1': [
                { 'time': Random.date('yyyy') },
            ],
            'journalContentList|10': [
                {
                    'id|+1': 78906,
                    'images': '@image(150x200)',
                    'date': Random.date('M') + '月上刊'
                }
            ]
        }
    });
    res.json(result)
})

/**
 * 我的页面积分数据
 */
// module.exports.INTEGRAL_CATE_LIST_URL = '/api/intecral/catelist'
app.get('/api/intecral/catelist', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            'intecralList|1': [
                {
                    'intecral': Random.natural(0, 1000),
                    'userLogo': '@image(50x50)',
                    'concern': Random.natural(0, 1000),
                    'userName': Random.cname()
                }
            ]
        }
    })
    res.json(result)
})


/**
 * 二级页面中会员福利数据
 */
app.get('/api/welfare/catelist', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            'welfareContentTitle|1':
            {
                'title': '精选权益'
            },
            'welfareContentList|20':
            {
                'imageTrans': '@ctitle',
                'image': '@image(170x90)'
            },

        }
    })
})
// module.exports.WELFARE_CATE_LIST_URL = '/api/welfare/catelist'



app.listen('9000','localhost',(error)=>{
    if(error){
        console.log('启动失败')
    }else{
        console.log('启动成功')
    }
})