import API from '../api'
import { FetchGet, FetchPost } from '../common/fetch'

//请求杂志的内容数据

export function getJournalCateList() {
    return new Promise((resolve, reject) => {
        FetchGet(API.JOURNAL_CATE_LIST_URL)
            .then(data => {
                // console.log(data)
                resolve(data);
            })
    })
}
