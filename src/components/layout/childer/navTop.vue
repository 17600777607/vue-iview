<template>
    <div id="navTop">
        <div class="layout-logo">
            <div v-if="this.navWidth == 0">
                <img style="width: 100px;margin-top: 16px" src="../../../assets/images/logo.jpg" alt="">
            </div>
            <div v-else>
                <img src="../../../assets/images/logo.jpg" alt="">
            </div>
        </div>
        <div class="layout-nav" id="SideMenu">
            <Menu mode="horizontal" :active-name="activeName" @on-select="activeNav" class="hang">
                <div v-for="(item,index) in menuListHang" :key="item.meta.name">
                    <!--                有二级导航-->
                    <div v-if="item.children !=null && item.children.length>1">
                        <Submenu :name="item.path" class="navWidth">
                            <template slot="title">
                                <Icon :type="item.meta.icon"/>
                                {{item.meta.name}}
                            </template>
                            <div v-for="(itemChild,i) in item.children" :key="itemChild.meta.name">
                                <MenuItem :name="itemChild.path">{{itemChild.meta.name}}</MenuItem>
                            </div>
                        </Submenu>
                    </div>
                    <!--只有一级导航-->
                    <div v-else>
                        <MenuItem :name="item.path" class="navWidth">
                            <Icon :type="item.meta.icon"/>
                            {{item.meta.name}}
                        </MenuItem>
                    </div>
                </div>
            </Menu>
            <div class="side-menu-shu" v-if="this.zNav" style="position: absolute;top: 0;right: 0;z-index: 10000;"
                 @mouseleave="mouseLeave">
                <span style="padding-top: 6px;text-align: right;display: block;cursor: pointer;"
                      @mouseover="mouseoverHover"><Icon
                        type="ios-more" size="40"/></span>
                <div class="navB" v-if="this.zNav && this.navB">
                    <Menu accordion ref="menu" width="auto" @on-select="activeNav" :open-names="[activeName]"
                          :active-name="activeName">
                        <div v-for="(item,index) in menuListShu" :key="item.meta.name">
                            <div v-if="item.children !=null && item.children.length>1">
                                <Submenu :name="item.path">
                                    <template slot="title">
                                        <Icon :type="item.meta.icon"/>
                                        {{item.meta.name}}
                                    </template>
                                    <div v-for="(itemChild,i) in item.children" :key="itemChild.meta.name">
                                        <MenuItem :name="itemChild.path" style="padding: 0 0 0 50px;background: #eee">
                                            {{itemChild.meta.name}}
                                        </MenuItem>
                                    </div>
                                </Submenu>
                            </div>
                            <!--只有一级导航-->
                            <div v-else>
                                <MenuItem :name="item.path" class="navWidth" style="padding-left: 16px !important;">
                                    <Icon :type="item.meta.icon"/>
                                    {{item.meta.name}}
                                </MenuItem>
                            </div>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "navTop",
        data() {
            return {
                navChildsWithArr: [],//每个导航栏的宽度  数组
                menuListShu: [], //竖导航数组
                menuListHang: [],//横向导航数组
                navWidth: "",//整个导航栏的宽度
                zNav: false,
                navB: false,
                sunNumber: null,
                navChildsWithSum: 0,
            }
        },
        //获取vuex中的组件对象    也就是菜单
        computed: {
            menuList() {
                console.log(this.$store.state)
                return this.$store.state.app.menuList
            },
            activeName() {
                console.log(this.$store.state)
                return this.$store.state.app.activeName
            }
        },
        created() {
            this.menuListHang = this.$store.state.app.menuList
        },
        watch: {
            navWidth(old, newvalue) {
                if (old != newvalue) {
                    this.menuListHang = this.$store.state.app.menuList
                }
                let newValue = newValue
                this.menuListShu = []
                if (typeof (newValue) == "undefined") {
                    newValue = old
                }
                // console.log("所有子导航的宽度",this.navChildsWithSum)
                if (newValue < this.navChildsWithSum) {
                    let sum = 0
                    for (let i = 0; i < this.navChildsWithArr.length; i++) {
                        sum += this.navChildsWithArr[i]
                        if (sum > newValue) {
                            this.sunNumber = i
                            break
                        }
                    }
                    // console.log("当子导航所加宽度大于外围导航宽度", sum)
                    // console.log("显示了" + this.sunNumber + "子导航")
                    this.menuListShu = this.menuListHang.slice(this.sunNumber, this.menuListHang.length)
                    this.menuListHang = this.menuListHang.slice(0, this.sunNumber)
                    // console.log("竖向导航数组", this.menuListShu)
                    // console.log("横导航数组", this.menuListHang)
                    if (this.menuListShu.length != 0) {
                        this.zNav = true
                    } else {
                        this.zNav = false
                        this.menuListHang = this.$store.state.app.menuList
                    }
                } else {
                    this.menuListHang = this.$store.state.app.menuList
                    this.zNav = false
                }

            },
        },
        mounted() {
            this.actualWidthNav()
        },
        methods: {
            mouseLeave() {
                console.log("鼠标离开事件")
                this.navB = false
            },
            // 鼠标悬浮更多菜单事件
            mouseoverHover() {
                console.log("悬浮")
                this.navB = true
            },
            //导航点击事件
            activeNav(path) {
                // console.log("导航点击事件", path)
                this.$store.commit("activeName", path)
                this.$router.push(path)
            },
            //获取导航栏的宽度
            actualWidthNav() {
                let nav = document.getElementById("SideMenu");
                this.navWidth = nav.clientWidth || nav.offsetWidth;
                window.onresize = () => {
                    return (() => {
                        this.navWidth = nav.clientWidth || nav.offsetWidth;
                    })();
                };
                console.log("获取导航栏的宽度", this.navWidth)
                //获取导航的dom
                let navChild = nav.getElementsByClassName("navWidth");
                // console.log(navChild)
                for (let i = 0; i < navChild.length; i++) {
                    this.navChildsWithSum += navChild[i].clientWidth
                    // console.log("每一个导航的宽度",navChild[i].clientWidth)
                    this.navChildsWithArr.push(navChild[i].clientWidth)
                }
                // console.log(this.navChildsWithArr)
            },
        }
    }
</script>

<style lang="less">
    #navTop {
        @media (max-width: 768px) {
            .hang {
                padding-right: 0;
            }
            .navB{
                max-height: 300px;
                overflow: auto;
            }
        }
        display: block;
        height: 64px;
        position: relative;

        .ivu-menu-horizontal.ivu-menu-light:after {
            background: transparent;
        }

        .hang {
            padding-right: 20px;
            /*overflow: hidden;*/
            display: flex;
            float: right;

            .navWidth {
                float: left;
                min-width: 134px;
                text-align: center;
            }
        }

        .layout {
            border: 1px solid #d7dde4;
            /*background: #f5f7f9;*/
            position: relative;
            border-radius: 4px;
            overflow: hidden;
        }

        .layout-logo {
            width: 200px;
            height: 64px;
            /*background: #5b6270;*/
            border-radius: 3px;
            float: left;
        }

        .layout-nav {
            width: calc(100% - 300px);
            float: right;
        }

        .layout-footer-center {
            text-align: center;
        }

        .side-menu-shu {
            .ivu-menu-submenu-title {
                padding: 0 24px;

                .ivu-icon {
                    display: contents
                }
            }

            .navB {
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

                .navWidth {
                    padding: 0 24px !important;
                }
            }

            .ivu-menu {
                /*padding: 0px 60px 0 40px;*/
                /*;*/
            }

            /*.ivu-menu-item{padding: 10px}*/

            .ivu-menu {
                .ivu-menu-item {
                    /*padding-left: 86px !important;*/
                }
            }
        }

    }
</style>
