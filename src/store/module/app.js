import {getHomeRoute} from '@/libs/util'
// const  homeName  = "home"
export default {
    state: {
        homeRoute: {},//面包屑
        menuList: [],  //路由菜单
        activeName:"/",//菜单选中
    },
    // getters: {
    //     menuList: (state, getters, rootState) =>
    //         getMenuByRouter(state.menuList, rootState.user.access),
    //     errorCount: state => state.errorList.length
    // },
    mutations: {
        //面包屑
        // setHomeRoute (state, routes) {
        //     let routesData =routes.options.routes
        //     state.homeRoute = getHomeRoute(routesData, homeName)
        // },
        //路由
        updateMenuList (state, routes) {
            // debugger
            // ①添 接受前台数组，刷新菜单
            // router.addRoutes(routes) // 动态添加路由
            state.menuList = routes
            console.log('vuex存储menuList', state.menuList)
        },
        //菜单选中
        activeName(state, path){
            state.activeName=path
        }
    },
    actions: {
    }
}
