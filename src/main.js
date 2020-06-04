import  Vue from 'vue'
import App from './App'
import router from "./router";
import store from "./store";
import Star from "./components/star/star";
import HeaderTop from "./components/HeaderTop/HeaderTop";
Vue.config.productionTip=false //去掉提示输出
import './api'
// import './validate'
Vue.component('HeaderTop',HeaderTop)
Vue.component('Star',Star)

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>',
    router,
    store,
})
// new  Vue ({
//     // el:"#app",
//     render: h => h(App)
//     // render:createElement => createElement(App)
// }).$mount('#app')