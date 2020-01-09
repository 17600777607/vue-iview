//面包屑方法
export const getHomeRoute = (routers, homeName = 'home') => {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
        let item = routers[i]
        if ( item.children !=null) {
            let res = getHomeRoute(item.children, homeName)
            if (res.name) return res
        } else {
            if (item.name === homeName) homeRoute = item
        }
    }
    return homeRoute
}
// 动态标题
export const setTitle = (routeItem, vm) => {
    console.log("routeItem",routeItem)
    console.log("vm",vm)
    let titleStrl="";
    routeItem.matched.forEach(item=>{
        titleStrl+=item.meta.name+'-'
    })
    const resTitle=titleStrl +'博盛钢业'
    window.document.title = resTitle
}
