<template>
    <div class="headerStyle">
        <div class="block">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="float-right">
                <ul>
                    <li>
                        <a class="bf" @click="goIndex()">首页</a>
                        <a class="af" @click="goIndex()">首页</a>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">产品中心</a>
                        <a class="af" href="javascript:;">产品中心</a>
                        <div class="showMoto">
                            <a  @click="goMotoType()">
                                <img src="./20170424024437s.png" alt="">
                                <p @click="goMotoType()">电动车</p>
                            </a>
                            <a  @click="goMotoType()">
                                <img src="./20170424024649s.png" alt="">
                                <p @click="goMotoType()">摩托车</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a class="bf" href="javascript:;">在线商城</a>
                        <a class="af" href="javascript:;">在线商城</a>
                    </li>
                    <li>
                        <a class="bf" @click="goNews()">新闻资讯</a>
                        <a class="af" @click="goNews()">新闻资讯</a>
                        <ul>
                            <li><a @click="goNews()">三雅新闻</a></li>
                            <li><a href="javascript:;">专题报道</a></li>
                            <li><a href="javascript:;">SANYA知识库</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="bf" @click="goIntroduct()">走进三雅</a>
                        <a class="af" @click="goIntroduct()">走进三雅</a>
                        <ul>
                            <li><a @click="goIntroduct()">公司简介</a></li>
                            <li><a href="javascript:;">公益项目</a></li>
                            <li><a href="javascript:;">公司文化</a></li>
                            <li><a href="javascript:;">发展历程</a></li>
                            <li><a href="javascript:;">企业荣誉</a></li>
                            <li><a href="javascript:;">技术专科</a></li>
                            <li><a href="javascript:;">加入我们</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="bf" @click="goDealer()">成为经营商</a>
                        <a class="af" @click="goDealer()">成为经营商</a>
                        <ul>
                            <li><a @click="goDealer()">成为经营商</a></li>
                            <li><a @click="goDealer()">市场支持</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="share">
                    <img src="../assets/images/share_icon.png" alt="">
                </div>
                <div class="nav-trigger">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods:{
    goIndex(){
       //   location = "http://127.0.0.1:8080";
         this.$router.push('/');
     },
    goMotoType(){
        this.$router.push('/motoType');
    },
    goIntroduct(){
        this.$router.push('/introduce');
    },
    goNews(){
        this.$router.push('/news');
    },
    goDealer(){
        this.$router.push('/dealer');
    }
  },
  mounted(){
    let li2 = document.querySelector(".float-right>ul>li:nth-child(2)");
      let showMoto = document.getElementsByClassName("showMoto")[0];
      li2.addEventListener("mouseover",function(){
          showMoto.style.height = "360px";
          showMoto.style.transition = "0.5s linear";
      })
      li2.addEventListener("mouseout",function(){
          showMoto.style.height = "0px";
          showMoto.style.transition = "0.5s linear";
      })
  }
}
</script>


<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
ul{
    list-style: none;
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
@media screen and (max-width:767px){
    .float-right ul{
        width:0px;
        overflow: hidden;
    }
    .nav-trigger{
        display: block;
    }
    .share{
        position: absolute;
        right: 90px;
    }
}
@media screen and (min-width:767px){
    .nav-trigger{
        display: none;
    }
}
.float-right{
    display: flex;
    justify-content: left;
    align-items: center;
}
.share{
    width:20px;
    height:20px;
}
.share img{
    width:100%;
    height:100%;
}
.nav-trigger{
    position: fixed;
    top: 8px;
    right: 0;
    height: 60px;
    width: 60px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    color: transparent;
    cursor: pointer;
}
.nav-trigger span{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: background-color .3s;
    background-color: #1A1A1A;
    height: 3px;
    width: 26px;
}
.nav-trigger span::before{
    transform: translateY(-9px);
    position: absolute;
    background-color: #1A1A1A;
    height: 3px;
    width: 26px;
    content: '';
    left: 0;
    transition: transform .3s;
}
.nav-trigger span::after{
    transform: translateY(9px);
    position: absolute;
    background-color: #1A1A1A;
    height: 3px;
    width: 26px;
    content: '';
    left: 0;
    transition: transform .3s;
}
.float-right>ul{
    height: 100%;
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
a{
    text-decoration: none;
}
a>p{
    font-size:26px;
    color:#000;
    text-align: center;
    margin-top:-10px;
}
.showMoto{
    width:1000px;
    height: 0px;
    /* height:360px; */
    display: flex;
    overflow: hidden;
    margin-top:77px;
    margin-left:-300px;
    background: #fff;
    /* position: relative; */
}
.showMoto>a{
    width:320px;
    height:280px;
    display: block;
    margin-top:20px;
    /* position: absolute;
    top:20px; */
}
.showMoto>a:first-child{
    /* left:300px; */
    margin-left: 200px;
}
.showMoto>a:hover p{
    color:#e50012;
}
.showMoto>a:last-child{
    /* left:700px; */
    margin-left: 100px;
}
img{
    width:100%;
    height:100%;
}
.float-right>ul>li:nth-child(4)>ul{
    margin-top:77px;
    text-align: center;
    height: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    transition: 0.5s linear;
}
.float-right>ul>li:nth-child(4)>ul>li>a{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.float-right>ul>li:nth-child(4)>ul>li{
    border-top: 1px solid rgb(238, 224, 224);
}
.float-right>ul>li:nth-child(4)>ul>li>a{
    color:rgba(43, 42, 42, 0.959);
}
.float-right>ul>li:nth-child(4)>ul>li:hover{
    background: #e50012;
}
.float-right>ul>li:nth-child(4)>ul>li:hover>a{
    color: #fff;
}
.float-right>ul>li:nth-child(4):hover>ul{
    height: 90px;
    transition: 0.5s linear;
}
.float-right>ul>li:nth-child(5)>ul{
    margin-top:77px;
    text-align: center;
    height: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    transition: 0.5s linear;
}
.float-right>ul>li:nth-child(5)>ul>li>a{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.float-right>ul>li:nth-child(5)>ul>li{
    border-top: 1px solid rgb(238, 224, 224);
}
.float-right>ul>li:nth-child(5)>ul>li>a{
    color:rgba(43, 42, 42, 0.959);
}
.float-right>ul>li:nth-child(5)>ul>li:hover{
    background: #e50012;
}
.float-right>ul>li:nth-child(5)>ul>li:hover>a{
    color: #fff;
}
.float-right>ul>li:nth-child(5):hover>ul{
    height: 217px;
    transition: 0.5s linear;
}
.float-right>ul>li:nth-child(6)>ul{
    margin-top:77px;
    text-align: center;
    height: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    transition: 0.5s linear;
}
.float-right>ul>li:nth-child(6)>ul>li>a{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.float-right>ul>li:nth-child(6)>ul>li{
    border-top: 1px solid rgb(238, 224, 224);
}
.float-right>ul>li:nth-child(6)>ul>li>a{
    color:rgba(43, 42, 42, 0.959);
}
.float-right>ul>li:nth-child(6)>ul>li:hover{
    background: #e50012;
}
.float-right>ul>li:nth-child(6)>ul>li:hover>a{
    color: #fff;
}
.float-right>ul>li:nth-child(6):hover>ul{
    height: 60px;
    transition: 0.5s linear;
}
</style>
