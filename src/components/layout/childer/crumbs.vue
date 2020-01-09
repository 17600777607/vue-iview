<template>
    <div id="crumbs">
        <Breadcrumb v-for="(item,index) in breadCrumbList" :key="index">
            <div v-if="item.path !=''" @click="activeButton">
                <BreadcrumbItem :to="item.path">{{item.name}}</BreadcrumbItem>
            </div>
            <div v-else>
                <BreadcrumbItem >{{item.name}}</BreadcrumbItem>
            </div>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "crumbs",
        data() {
            return {
                breadCrumbList: [
                    {
                        path: "/",
                        name: "首页"
                    }
                ]
            }
        },
        //监听路由事件
        watch: {
            '$route'(newRoute) {
                console.log("监听newRoute", newRoute)
                this.breadCrumbList = []
                this.breadCrumbList.push({
                    path: "/",
                    name: "首页"
                })
                if(newRoute.name != "home"){
                    let newRouteList = []
                    newRoute.matched.forEach(item => {
                        newRouteList.push(
                            {
                                name: item.meta.name,
                                path: "",
                            }
                        )
                    })
                    console.log(newRouteList)
                    this.breadCrumbList = [...this.breadCrumbList, ...newRouteList]
                }
            }
        },
        methods: {
            activeButton(){
                this.$store.commit("activeName","/")
                console.log(this.$store.state.app.activeName)
            }
        }
    }
</script>

<style lang="less">
    #crumbs {
        .ivu-breadcrumb {
            width: auto;
            float: left;
            font-size: 16px;
            font-weight: 600;
        }
    }
</style>
