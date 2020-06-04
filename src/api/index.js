import ajax from './ajax'
const BASE='/api'
const BASE2='/baidu'

export const reqAddress=(longitude, latitude)=>ajax({
    method:'GET',
    url:BASE+`/position/${latitude},${longitude}`
})
/**
 * 获取食品分类列表
 */
export const reqCategorys=()=>ajax.get(BASE+'/index_category')
/**
 * ## 3、根据经纬度获取商铺列表
 */
export const reqShops=({latitude,longitude})=>ajax({
    url:BASE+'/shops',
    params:{
        latitude,
        longitude
    }
})
export const reqBaiDuxxx=()=>ajax(BASE2+'/xxx')
// reqAddress('116.36867','40.10038').then((result)=>{
//     console.log('result', result)
// })