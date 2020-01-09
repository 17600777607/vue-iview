import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import {generateRoutes} from "@/libs/router-uilts"
import {setTitle} from "@/libs/util"
import Layout from "@/components/layout"

Vue.use(VueRouter)
// 路由菜单
const routerData = [
    {
        path: '/',
        name: 'home',
        component: Layout,
        meta: {
            name: "首页",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: "home/home",
                meta: {
                    name: "首页",
                    icon: "el-icon-user"
                },
                children: null
            },
        ]
    },
    {
        path: '/',
        name: 'intoTheBoSheng',
        meta: {
            name: "走进博盛",
            icon: "el-icon-user"
        },
        component: Layout,
        children: [
            {
                path: '/intoTheBoSheng/enterpriseProfile',
                name: 'enterpriseProfile',
                component: "intoTheBoSheng/children/enterpriseProfile",
                meta: {
                    name: "企业简介",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/intoTheBoSheng/leadershipSpeech',
                name: 'leadershipSpeech',
                component: "intoTheBoSheng/children/leadershipSpeech",
                meta: {
                    name: "领导致词",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/intoTheBoSheng/institutionalFramework',
                name: 'institutionalFramework',
                component: "intoTheBoSheng/children/institutionalFramework",
                meta: {
                    name: "组织机构",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/intoTheBoSheng/enterpriseQualification',
                name: 'enterpriseQualification ',
                component: "intoTheBoSheng/children/enterpriseQualification",
                meta: {
                    name: "企业资质",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/intoTheBoSheng/companyLookForwardTo',
                name: ' companyLookForwardTo',
                component: "intoTheBoSheng/children/companyLookForwardTo",
                meta: {
                    name: "公司展望",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/intoTheBoSheng/enterpriseCulture',
                name: 'enterpriseCulture',
                component: "intoTheBoSheng/children/enterpriseCulture",
                meta: {
                    name: "企业文化",
                    icon: "el-icon-user"
                },
                children: null
            },
        ]
    },
    {
        path: '/productCenter',
        name: 'productCenter',
        component: Layout,
        meta: {
            name: "产品中心",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/productCenter/seamlessTube',
                name: 'seamlessTube',
                component: "productCenter/childer/seamlessTube",
                meta: {
                    name: "无缝钢管",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/productCenter/stainless',
                name: 'stainless',
                component: "productCenter/childer/stainless",
                meta: {
                    name: "不锈钢管件法",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/productCenter/listOfElements',
                name: 'listOfElements',
                component: "productCenter/childer/listOfElements",
                meta: {
                    name: "元素表",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/productCenter/standardsTolerances',
                name: 'standardsTolerances',
                component: "productCenter/childer/standardsTolerances",
                meta: {
                    name: "标准和公差",
                    icon: "el-icon-user"
                },
                children: null
            },
        ]
    },
    {
        path: '/newTrends',
        name: 'newTrends',
        component: Layout,
        meta: {
            name: "新闻动态",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/newTrends/enterpriseNews',
                name: 'enterpriseNews',
                component: "newTrends/childer/enterpriseNews",
                meta: {
                    name: "企业新闻",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/newTrends/tradeNews',
                name: 'tradeNews ',
                component: "newTrends/childer/tradeNews",
                meta: {
                    name: "行业新闻",
                    icon: "el-icon-user"
                },
                children: null
            }
        ]
    },
    {
        path: '/qualityGuarantee',
        name: 'qualityGuarantee ',
        component: Layout,
        meta: {
            name: "品质保证",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/qualityGuarantee/qualityControl',
                name: 'qualityControl',
                component: "qualityGuarantee/childer/qualityControl",
                meta: {
                    name: "质量控制",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/qualityGuarantee/inspectionTeam',
                name: 'inspectionTeam ',
                component: "qualityGuarantee/childer/inspectionTeam",
                meta: {
                    name: "检查队伍",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/qualityGuarantee/qualityControlSystem',
                name: 'qualityControlSystem ',
                component: "qualityGuarantee/childer/qualityControlSystem",
                meta: {
                    name: "质量控制体系",
                    icon: "el-icon-user"
                },
                children: null
            }
        ]
    },
    {
        path: '/sellingNetwork',
        name: 'sellingNetwork',
        component: Layout,
        meta: {
            name: "销售网络",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/sellingNetwork/corporateHeadquarters',
                name: 'corporateHeadquarters',
                component: "sellingNetwork/childer/corporateHeadquarters",
                meta: {
                    name: "公司总部",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/sellingNetwork/domesticTrade',
                name: 'domesticTrade',
                component: "sellingNetwork/childer/domesticTrade",
                meta: {
                    name: "国内贸易",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/sellingNetwork/foreignTrade',
                name: 'foreignTrade',
                component: "sellingNetwork/childer/foreignTrade",
                meta: {
                    name: "国际贸易",
                    icon: "el-icon-user"
                },
                children: null
            }
        ]
    },
    {
        path: '/applicationArea',
        name: 'applicationArea',
        component: Layout,
        meta: {
            name: "应用领域",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/applicationArea',
                name: 'applicationArea ',
                component: "applicationArea/applicationArea",
                meta: {
                    name: "应用领域",
                    icon: "el-icon-user"
                },
                children: null
            },
        ]
    },
    {
        path: '/talentCenter',
        name: 'talentCenter',
        component: Layout,
        meta: {
            name: "人才中心",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/talentCenter/employmentPrinciple',
                name: 'employmentPrinciple',
                component: "talentCenter/childer/employmentPrinciple",
                meta: {
                    name: "用人原则",
                    icon: "el-icon-user"
                },
                children: null
            },
            {
                path: '/talentCenter/recruitmentInformation',
                name: 'recruitmentInformation ',
                component: "talentCenter/childer/recruitmentInformation",
                meta: {
                    name: "招聘信息",
                    icon: "el-icon-user"
                },
                children: null
            }
        ]
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: Layout,
        meta: {
            name: "联系我们",
            icon: "el-icon-user"
        },
        children: [
            {
                path: '/contactUs',
                name: 'contactUs ',
                component: "contactUs/contactUs",
                meta: {
                    name: "联系我们",
                    icon: "el-icon-user"
                },
                children: null
            },
        ]
    },
]
console.log("路由菜单", routerData)

//处理路由菜单
const caidan = generateRoutes(routerData, [])
// 存储vuex中
store.commit("updateMenuList", caidan);
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...caidan]
})
router.afterEach(to => {
    setTitle(to, router.app)
})
export default router
