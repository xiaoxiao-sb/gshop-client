/*
能发送ajax的函数（axios）函数的返回值是promise
*/
/**
 * 包含多个接口请求函数模块
 * 
 */
/**
 * 包含多个接口请求的模块
 * 1.处理请求体参数：转换为urllencode格式
 * 2.让成功的结果不是response，而是response。data
 * 3.统一处理请求错误：响应拦截器的失败问题
 */
import axios  from 'axios'
import qs from 'qs'
//添加请求拦截器
// axios.defaults.baseURL='http://localhost:4000'
axios.interceptors.request.use(config=>{
   const {method,data}=-config
   if((method==='POST'||method==='GET')&& data instanceof Object){
     config.data=qs.stringify(data)
   }
   return config
})
//添加响应拦截器
axios.interceptors.response.use(response=>{
   return  response.data

},error=>{
   alert('请求异常:'+error.message)
   return new Promise(()=>{
       
   })
})
export default axios

