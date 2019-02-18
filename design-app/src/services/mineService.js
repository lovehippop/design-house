import API from '../api'
import { FetchGet, FetchPost } from '../common/fetch'
import { rejects } from 'assert';
import { resolve } from 'url';


/**
 * 请求我的页面中积分数据
 */

export function getIntegral() {
    return new Promise((resolve, reject) => {
        FetchGet(API.INTEGRAL_CATE_LIST_URL)
            .then(data => {
                resolve(data)
            })
    })
}


/**
 * qiu'qiu
 */