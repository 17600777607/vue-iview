/* 1.引入文件 */
import axios from 'axios'        //引入 axios库
import qs from 'qs'              //引入 node中自带的qs模块（数据格式转换）
import config from "@/config/config"
/* 2.全局默认配置 */
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
/*你也可以创建一个实例，然后在实例中配置相关属性，此方法和上面的方法一样，写法不同，怎么用随个人
*喜好，我比较喜欢用这种方法，如下：
*/

const Axios = axios.create({
    baseURL: baseUrl, 		      // 后台服务地址
    timeout: 5000, 		      // 请求超时时间5秒
    responseType: "json",
    withCredentials: false    // 是否允许带cookie这些
});
// 发送请求前进行拦截
// 可以打印一下  Axios.interceptors.request 看看里面有什么  然后 按照自己的需要去配置
Axios.interceptors.request.use((config) => {
    //  可在此处配置请求头信息  因为这个项目 目前用不到请求 标识  暂时注释
    // config.headers["appkey"] = "";
    // config.headers["token"] = "...";
    if (config.method == "post") {
        /*数据转换: axios post方式默认是json格式提交数据，如果使用application/x-www-form-urlencoded数据格式提交，要用qs.stringify()进行转换,个人建议不在拦截器中全局配置，因为不够灵活，还有一点是，如果
      设置了重新请求的配置，那么重新请求时，请求体中的config里面的传参就会被再次进行qs.stringify()转
      换，会使得参数丢失，造成请求失败。*/
        config.data = qs.stringify(config.data)
    }
    return config;

}, (error) => {
    return Promise.reject(error)
})
console.dir(Axios.interceptors.response.use)
Axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    //根据状态码 来控制页面的跳转
    error => {

        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    // this.router.path('/login');
                    break;
            }
            return Promise.reject(error.response);
        }
    }
    )
export default Axios
