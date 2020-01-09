import Layout from "@/components/layout"
//处理拿到的路由  并转换成组件对象
export function generateRoutes(routers, data) {
    routers.forEach((item) => {
        const menu = {}
        menu.component = item.component == Layout ? Layout : () => import("@/views/" + item.component + ".vue")
        // menu.component =  () => import("@/views/" + item.component + ".vue")
        menu.path = item.path
        if (item.meta) {
            menu.meta = item.meta
        }
        menu.meta = item.meta
        if (item.name) {
            menu.name = item.name
        }
        if (item.children != null && item.children.length > 0) {
            menu.children = generateRoutes(item.children, [])
        } else {
            menu.children = null
        }
        data.push(menu)
    })
    return data
}
