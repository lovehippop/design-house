import API from '../api'
import { FetchGet, FetchPost } from '../common/fetch'



//请求设计师页的报价数据内容
export function getDesignerPriceCateList() {
    return new Promise((resolve, reject) => {
        FetchGet(API.DESIGNER_PRICE_CATE_LIST_URL)
            .then(data => {
                resolve(data);
            })
    })
}
//请求设计师的内容数据

export function getJournalCateList() {
    return new Promise((resolve, reject) => {
        FetchGet(API.DESIGNERCONTENT_PRICE_CATE_LIST_URL)
            .then(data => {
                resolve(data);
            })
    })
}
