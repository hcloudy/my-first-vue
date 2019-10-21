import VueRouter from 'vue-router';

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'


//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer},
        { path: '/home/newslist', component: NewsList},
        { path: '/newsinfo/:id', component: NewsInfo},
        // { path: '/home/newsinfo/:id', component: NewsInfo},
        { path: '/search', component: SearchContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shopcar', component: ShopcarContainer},
    ],
    linkActiveClass: 'mui-active',
})

//把路由对象暴露出去
export default router