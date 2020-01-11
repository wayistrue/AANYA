<template>
    <div class="headerStyle">
        <div class="block">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="float-right">
                <ul>
                    <li>
                        <a class="bf" href="javascript:;">首页</a>
                        <a class="af" href="javascript:;">首页</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">产品中心</a>
                        <a class="af" href="javascript:;">产品中心</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">在线商城</a>
                        <a class="af" href="javascript:;">在线商城</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">新闻资讯</a>
                        <a class="af" href="javascript:;">新闻资讯</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">走进三雅</a>
                        <a class="af" href="javascript:;">走进三雅</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">成为经营商</a>
                        <a class="af" href="javascript:;">成为经营商</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="aa" class="productDownHide">
            <a href="javascript:;"><img src="./20170424024437s.png" alt=""></a>
            <a href="javascript:;"><img src="./20170424024649s.png" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        let li2 = document.querySelector(".float-right>ul>li:nth-child(2)");
        let productDown = document.querySelector(".productDownHide");
        let imgs1 = document.querySelectorAll("a>img")[0];
        li2.addEventListener("mouseover",function(){
            productDown.className = "productDownShow";
            imgs1.className = "first";
        });
        li2.addEventListener("mouseout",function(){
            productDown.className = "productDownHide";
            imgs1.className = "";
        });
        let aa = document.getElementById("aa");
        console.log(aa);
        aa.addEventListener("mouseover",function(e){
            console.log(222);
            e.target.height = "200px";
        });
    }
}
</script>


<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.headerStyle{
    width:100%;
    height:77px;
    color:#323232;
    font:16px "微软雅黑";
    background-color:#eee;
}
.block{
    width:1200px;
    height: 100%;
    margin:0 auto;
    display: flex;
    align-items: center;
}
.float-right>ul{
    height: 100%;
    list-style:none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:60px;
}
.float-right>ul>li{
    height:77px;
    width:120px;
    perspective: 160px;
}
.float-right>ul>li:first{
    width:90px;
}
.float-right>ul>li::after{
    width:137px;
}
.float-right>ul>li>a{
    width:100%;
    height:100%;
    display: block;
    text-decoration: none;
    line-height: 77px;
    color:#555;
    text-align: center;
}
/*间距处理*/
.bf{
    position: absolute;
    display:block;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}

.af{
    position: absolute;
    display:block;
    color: #fff;
    width: 100%;
    top: 78px;
    left: 0;
    -webkit-transform: rotateX(-70deg);
    -moz-transform: rotateX(-70deg);
    -ms-transform: rotateX(-70deg);
    -o-transform: rotateX(-70deg);
    transform: rotateX(-76deg);
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    background: #e50012 !important;
}

ul>li:hover .bf{
    -webkit-transform: rotateX(70deg);
    -moz-transform: rotateX(70deg);
    -ms-transform: rotateX(70deg);
    -o-transform: rotateX(70deg);
    transform: rotateX(70deg);
    background:#fff;
    top: -100%;
}

ul>li:hover .af{
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
    top: 0; 
    color:#fff;
}
.productDownHide{
    width:100%;
    height:0px;
    transition: 0.5s linear;
    overflow: hidden;
}
.productDownShow{
    width:100%;
    background: rgb(228, 245, 129);
    height: 300px;
    transition: 0.5s linear;
    overflow: hidden;
}
.productDownShow a{
    position: absolute;
    top:100px;
    left:50%;
    width:260px;
    height:260px;
}
a>img{  
    position: absolute;
    width:200px;
    height:0px;
    /* display: none; */
}
.first{
    top:20px;
    left:-600px;
    display: block;
    width:200px;
    height:200px;
    transition: 0.5s linear;
}
.second{
    top:20px;
    left:100px;
    display: block;
}
</style>
