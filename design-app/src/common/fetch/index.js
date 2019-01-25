import axios from 'axios'
import { Toast } from 'mint-ui';


export function FetchGet(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params
        })
        .then(response=>{
    
            if(response.data.status){
                    Toast({
                        message:'请求错误',
                        duration:1000
                    })
            }
            else{
                        //请求成功
                        resolve(response.data.data);
                     
            }
        })
        .catch(error=>{
            Toast({
                message:'请求错误',
                duration:1000
            });
        })
    })
   
}

export function  FetchPost(url,params={}) {
    axios.post(url,params)
    .then(response=>{

    })
    .catch(error=>{
        Toast({
            message:'请求错误',
            duration:1000
        })
    })
}