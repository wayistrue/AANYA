<template>
    <div class="main">
        <myheader class="myHead"></myheader>
        <div class="header">
            <span>电动车</span>
            <ul>
                <li><a href="javascript:;">电动车</a></li>
                <li><a href="javascript:;">摩托车</a></li>
            </ul>
        </div>
        <motolist></motolist>
        <myfooter></myfooter>
    </div>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import MotoList from "./showMotoList"
export default {
    components: {
        "myheader": Header,
        "myfooter":Footer,
        "motolist": MotoList
    }
}
</script>

<style scoped>
.main{
    background: #f8f8f8;
}
.myHead{
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
}
.header{
    width:80%;
    height:130px;
    margin:77px 10% 30px 10%;
    padding:60px 0 0px;
    position: relative;
    border-bottom:1px solid #6a6a6a;
}
.header>span{
    font-size: 32px;
    line-height: 130px;
}
a{
    text-decoration: none;
    color:#6a6a6a;
    font:14px "微软雅黑";
}
a:hover{
    color:#e50012;
}
ul{
    width:120px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top:120px;
    right:0;
}
</style>