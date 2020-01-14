<template>
    <div id="home">
        <Row :gutter="12">
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <Card>
                    <p slot="title">人物简介</p>
                    <span slot="extra">更多</span>
                    <Row :gutter="12">
                        <Col :xs="24" :sm="24" :md="12" :lg="12">
                            <span>刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲刘亦菲</span>
                        </Col>
                        <Col :xs="24" :sm="24" :md="12" :lg="12">
                            <img src="../../assets/images/4.jpg" alt="">
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8" class-name="aaa">
                <Card>
                    <p slot="title">仙女图</p>
                    <img src="../../assets/images/3.jpg" alt="">
                </Card>
            </Col>
        </Row>
        <div class="cz">
            <img src="../../assets/home/cz.jpg" alt="">
        </div>
        <Card class="bottom">
            <p slot="title">我们是做什么的...</p>
            <Row>
                <Col :xs="12" :sm="12" :md="8" :lg="4">1</Col>
                <Col :xs="12" :sm="12" :md="8" :lg="4">2</Col>
                <Col :xs="12" :sm="12" :md="8" :lg="4">3</Col>
                <Col :xs="12" :sm="12" :md="8" :lg="4">4</Col>
                <Col :xs="12" :sm="12" :md="8" :lg="4">5</Col>
                <Col :xs="12" :sm="12" :md="8" :lg="4">6</Col>
            </Row>
        </Card>
    </div>
</template>

<script>
    import {getItemList} from "@/api/shilie"
    export default {
        name: "home",
        created() {
            // this.getItemList()
        },
        methods: {
            getItemList() {
                let datas={
                    aa: "aa"
                }
                getItemList(datas).then(res => {
                    // 请求返回数据
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                    // 请求失败执行
                })
            }
        }
    }
</script>

<style lang="less">
    #home {
        @media (max-width: 768px) {
            .aaa {
                margin-top: 16px
            }
        }

        .ivu-card-head {
            border-bottom: none;
        }

        .ivu-card-body {
            min-height: 378px;
        }

        .ivu-col {
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .cz {
            width: 100%;
            overflow: hidden;
            margin-top: 16px;

            img {
                width: 100%;
            }
        }

        .bottom {
            margin-top: 16px;

            .ivu-card-body {
                min-height: auto;
            }
        }
    }
</style>
