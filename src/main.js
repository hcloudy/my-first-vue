import Vue from 'vue'

// 导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import app from './App.vue'

// 按需导入mint-ui组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

import Mint from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(Mint);
//导入路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置vue-resource的ajax请求的根路径
Vue.http.options.root = 'http://192.168.1.104:8888';

import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})


var vm = new Vue({
    el: "#app",
    data: {

    },
    render: function(createElements) {
        return createElements(app)
    },
    router
});