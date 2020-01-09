<template>
    <div id="index">
        <Layout>
            <Header>
                <navTop/>
            </Header>
            <!--轮播组件-->
            <carousel style="margin-top: 70px"></carousel>
            <!--面包屑-->
            <crumbs style="padding: 16px;"></crumbs>
            <Content>
                <routerContent/>
            </Content>
            <Footer>
                <footDom></footDom>
            </Footer>
        </Layout>
    </div>
</template>
<script>
    import navTop from "@/components/layout/childer/navTop"
    import routerContent from "@/components/layout/childer/routerContent"
    import carousel from "@/components/layout/childer/carousel"
    import footDom from "@/components/layout/childer/footDom"
    import crumbs from "@/components/layout/childer/crumbs"
    export default {
        name: "index",
        data() {
            return {}
        },
        components: {navTop, routerContent, carousel, footDom, crumbs},

        mounted(){
        },
    }
</script>

<style lang="less">
    html, body {
        height: 100%;
    }

    #index {
        .ivu-layout-header {
            background: #ffffff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            z-index: 99;
            position: fixed;
            width: 100%;
        }

        .ivu-layout-content {
            min-height: 700px;
            padding: 16px;
        }

        .ivu-layout-footer {
            background: #061e3f;
            color: #ffffff;
            text-align: center;
        }
    }
</style>
