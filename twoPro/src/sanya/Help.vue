<template>
    <div class="ind_morehelp">
        <div class="title">
            是否需要更多帮助?
        </div>
        <ul>
            <li>
                <a href="javascript:;">
                    <div class="pic m1"></div>
                </a>
                <div class="lititle">
                    <a href="javascript:;">品牌标识素材</a>
                </div>
                <div class="desc">可免费下载 SANYA 相关品牌素材</div>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic m2"></div>
                </a>
                <div class="lititle"><a href="javascript:;">SANYA知识库</a></div>
                <div class="desc">在 SANYA 官方文档中快速寻找答案</div>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic m3"></div>
                </a>
                <div class="lititle"><a href="javascript:;">正品查询</a></div>
                <div class="desc">查询购买的车辆是否为三雅正品</div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.ind_morehelp{
    width:1800px;
    height:378px;
    background:#eee;
    margin:0 auto;
}
.title{
    width:1200px;
    color:#555;
    font:33px "微软雅黑";
    margin:0 auto;
    text-align: center;
    height:160px;
    line-height: 160px;
}
ul{
    list-style-type: none;
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
}
ul>li{
    width:33.3%;
    position: relative;
}
.pic.m1{
    width:100%;
    height:88px;
    background:url(../assets/images/mico_1.png) no-repeat center;
}
.pic.m2{
    width:100%;
    height:88px;
    background:url(../assets/images/mico_2.png) no-repeat center;
}
.pic.m3{
    width:100%;
    height:88px;
    background:url(../assets/images/mico_3.png) no-repeat center;
}
.lititle{
    font:18px "微软雅黑";
    text-align: center;
    margin:6px 0 10px;
}
.lititle>a{
    color:#555;
}
.lititle>a:hover{
    color:#E50012;
}
.desc{
    font:15px "微软雅黑";
    color:#B3B3B4;   
    text-align: center;
}
a{
    text-decoration: none;
}
</style>
