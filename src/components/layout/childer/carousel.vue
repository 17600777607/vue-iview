<template>
    <div id="carousel">
        <Carousel autoplay v-model="value2" loop :autoplay-speed="5000">
            <CarouselItem v-for="(item,index) in imgList" :key="index">
                    <div class="demo-carousel">
                        <img :src="item" alt="">
                    </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: "carousel",
        data(){
            return{
                value2: 0,
                imgList:[
                    require("@/assets/images/3.jpg"),
                    require("@/assets/images/2.jpg"),
                    require("@/assets/images/1.jpg"),
                    require("@/assets/images/5.jpg"),
                ],//轮播图片数组
            }
        }
    }
</script>

<style lang="less">
#carousel{
    .demo-carousel{
        /*max-height: 600px;*/
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
