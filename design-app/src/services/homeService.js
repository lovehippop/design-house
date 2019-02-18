import API from '../api'
import {FetchGet,FetchPost} from '../common/fetch'

//请求首页的分类

export function getHomeCateList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOME_CATE_LIST_URL)
        .then(data=>{
            resolve(data);
        })
    })
}

//话题、视频

export function  getHomeTopicList() {
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOME_TOP_LIST_URL)
        .then(data=>{
            resolve(data);
        })
    })
}