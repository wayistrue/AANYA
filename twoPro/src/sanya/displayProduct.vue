<template>
    <div>
        <myheader></myheader>
        <div>
            <img src="./displayproduct/20191126174837_1.jpg" alt="">
        </div>
        <div class="dis_product">
            <img src="./displayproduct/20191126174837.jpg" alt="">
            <div>
                <span>新迅战SY1200DT-8</span>
                <p>外观尺寸：1810x680x1300</p>
                <p>电机配置：SW弦波电机(800W)</p>
                <p>电池：铅酸蓄电池(60/72V20AH通用)</p>
                <p>减震：液压减震/加粗后减</p>
                <p>控制器：三雅智能12管控制器</p>
                <p>轮胎：真空轮胎</p>
                <p>防盗：遥控防盗器、车头锁</p>
                <p>制动：前220大盘碟刹/后碟刹  </p>
            </div>
        </div>
        <div class="dis_product_bot">
            <img src="./displayproduct/20191126174754118.jpg" alt="">
            <img src="./displayproduct/20191126174807141.jpg" alt="">
            <img src="./displayproduct/20191126174828175.gif" alt="">
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from "./Header.vue"
import myfooter from "./Footer.vue"
export default {
    components:{
        "myheader":myheader,
        "myfooter":myfooter
    }
}
</script>

<style scoped>
.dis_product{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
}
.dis_product>img{
    width:680px;
    height:640px;
}
.dis_product>div{
    margin-top:100px;
    margin-right:100px;
    border-bottom:1px solid #dfdfdf;
    margin-bottom: 100px;
}
.dis_product span{
    color:#e50012;
    font:28px "微软雅黑";
    border-bottom: 1px solid #dfdfdf;
    display: inline-block;
    padding-bottom:20px;
    margin-bottom:15px;
}
.dis_product p{
    color:#555;
    font:15px "微软雅黑";
}
.dis_product_bot{
    width:1200px;
    margin:0 auto;
    border-top:1px solid #dfdfdf;
    padding-top:6px;
}
</style>