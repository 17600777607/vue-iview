<template>
    <div id="home">
        <Row :gutter="12">
            <Col :xs="24" :sm="24" :md="16" :lg="16">
                <Card>
                    <p slot="title">公司简介</p>
                    <span slot="extra">更多</span>
                    <Row :gutter="12">
                        <Col :xs="24" :sm="24" :md="12" :lg="12">
                            <span>浙江博盛钢业集团有限公司 是博盛集团不锈钢管制造公司，专业生产无缝不锈钢管、不锈钢无缝钢管、不锈钢无缝管，坐落于中国长寿之乡、历史文化名城丽水市松阳县余姚山海协作园，注册资金20088万元，厂区占地总面积35000余平方米,年产不锈钢管15000余吨。公司拥有国内先进的不锈钢无缝管生产线（冷拔机组、冷轧机组）二十余条，可生产不锈钢无缝管：外径（6－930mm）壁厚</span>
                        </Col>
                        <Col :xs="24" :sm="24" :md="12" :lg="12">
                            <img src="../../assets/home/syjj.jpg" alt="">
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col :xs="24" :sm="24" :md="8" :lg="8" class-name="aaa">
                <Card>
                    <p slot="title">我们的荣誉</p>
                    <img src="../../assets/home/zbcx.jpg" alt="">
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
    export default {
        name: "home"
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
            img{
                width: 100%;
            }
        }
        .bottom{
            margin-top: 16px;
            .ivu-card-body{
                min-height: auto;
            }
        }
    }
</style>
