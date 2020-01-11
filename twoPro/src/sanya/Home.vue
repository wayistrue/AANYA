<template>
    <div>
        <myHead class="myHead"></myHead>
        <div style="height:600px">
            <img style="width:100%;height:100%" src="./20190521172148_s.jpg" alt="">
        </div>
        <div class="ind_pro">
            <h1>总有一款三雅 · 契合您的生活</h1>
            <p>鉴赏全系车型，发现您的至爱</p>
            <productdetails class="productdetails"></productdetails>      
        </div>
        <sellworld></sellworld>
        <div class="ind_news">
            <h1>三雅焦点</h1>
            <p>在这里，分享你关注的三雅资讯</p>
            <div>
                <button>三雅新闻</button>
                <button>专题报道</button>
                <button>SANYA知识库</button>
            </div>
            <div class="com">
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
               <indormationfocus></indormationfocus> 
            </div>
            <div class="fpages">
                <a href="javascript:;">&lt;</a>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <a href="javascript:;">&gt;</a>
            </div>  
        </div>
        <help></help>
        <myFooter></myFooter>
    </div>
</template>
<script>
import Header from "./Header.vue"
import ProductDetails from "./ProductDetails.vue"
import SellWorld from "./SellWorld.vue"
import IndormationFocus from "./IndormationFocus.vue"
import Footer from "./Footer.vue"
import Help from "./Help.vue"
export default {
    data(){
       return {
           arr:[1]
       }
    },
    components:{
        "myHead" : Header,
        "productdetails" : ProductDetails,
        "sellworld" : SellWorld,
        "indormationfocus" : IndormationFocus,
        "help" : Help,
        "myFooter" : Footer,
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}
.myHead{
    position: fixed;
    top:0;
    left:0;
}
.ind_pro{
    text-align: center;
    margin-bottom:60px;
    margin-top:30px;
}
.ind_pro h1{
    font:32px "微软雅黑";
    color:#4c4c4c;
}
.ind_pro p{
    margin:20px 0;
    color:#888;
    font:16px "微软雅黑";
}
.ind_news{
    width:1200px;
    text-align: center;
    margin: 30px auto;
}
.ind_news>p{
    font-size:20px;
    color:#333;
    margin:20px 0;
}
.ind_news button{
    width:152px;
    height:40px;
    color:#555;
    font:14px "微软雅黑";
    background:#efefef;
    margin:0 3px;
    outline: 0;
    border:0;
    border-radius: 3px;
}
.ind_news button:hover{
    background:#f00;
    color:#fff;
}
.productdetails{
    margin:0 auto;
}
.com{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top:30px;
    align-items: center;
}
.fpages{
    width:200px;
    height:30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:30px auto;
}
.fpages a{
    color:#555;
    font-size:14px;
}
.fpages ul{
    width:120px;
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.fpages ul>li{
    color:#000;
    font-size:13px;
    width:24px;
    height:18px;
    border-radius: 4px;
    line-height: 18px;
}
.fpages ul>li:hover{
    color:#fff;
    background:#e75656;
}
</style>
