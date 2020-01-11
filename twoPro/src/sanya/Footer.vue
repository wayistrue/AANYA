<template>
    <div class="footer">
        <div class="block">
            <div class="pic">
                <img src="../assets/images/20170421105543_s.png" alt="">
                <img src="../assets/images/dimension.jpg" alt="">
            </div>
            <div class="right">
                <ul>
                    <div>产品中心</div>
                    <li><a @click="goMotoType()">新品推荐</a></li>
                    <li><a @click="goMotoType()">电动车</a></li>
                    <li><a href="javascript:;">摩托车</a></li>
                </ul>
                <ul>
                    <div>新闻资讯</div>
                    <li><a @click="goNews()">三雅新闻</a></li>
                    <li><a href="javascript:;">专题报道</a></li>
                    <li><a href="javascript:;">SANYA知识库</a></li>
                </ul>
                <ul>
                    <div>走进三雅</div>
                    <li><a @click="goIntroduct()">公司简介</a></li>
                    <li><a href="javascript:;">公益项目</a></li>
                    <li><a href="javascript:;">公司文化</a></li>
                    <li><a href="javascript:;">发展历程</a></li>
                    <li><a href="javascript:;">企业荣誉</a></li>
                    <li><a href="javascript:;">技术专利</a></li>
                    <li><a href="javascript:;">加入我们</a></li>
                </ul>
                <ul>
                    <div>成为经销商</div>
                    <li><a @click="goDealer()">成为经销商</a></li>
                    <li><a @click="goDealer()">市场支持</a></li>
                </ul>    
            </div>
        </div>
        <div class="bottom">
            <div>
                <div class="bottoml">
                    <div class="btel">
                        全国客服热线：400-700-3838 / 020-87916128
                    </div>
                    <div class="bfax">
                        传真：020-87911823
                    </div>
                    <div class="baddress">
                        地址：广东省广州市从化区城郊街新开埔顶
                    </div>
                </div>
                <div class="bottomr">
                    <p>版权所有©广州三雅摩托车有限公司   粤ICP备06114082号-1</p>
                    <div class="share">
                        <span>分享到：</span>
                        <a class="qzone" title="分享到QQ空间" href="javascript:;"></a>
                        <a class="tsina" title="分享到微博" href="javascript:;"></a>
                        <a class="weixin" title="分享到微信" href="javascript:;"></a>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goIntroduct(){
            this.$router.push('/introduce');
        },
        goMotoType(){
            this.$router.push('/motoType');
        },
        goNews(){
            this.$router.push('/news');
        },
        goDealer(){
            this.$router.push('/dealer');
        }
    }
}
</script>
<style scoped>
.footer{
    width:100%;
    background:#eee;
    border-top:1px solid #d7d7d7;
    padding:20px 0 0;
}
ul{
    list-style: none;
}
.block{
    width:1200px;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
}
.pic{
    width:30%;
    position: relative;
}
.pic>img:last-child{
    position: absolute;
    top:100px;
    right:110px;
}
.pic>img:first-child{
    position: absolute;
    top:27px;
    right:70px;
}
.right{
    display: flex;
    justify-content: space-between;
    width:80%;
}
a{
    text-decoration: none;
}
ul div{
    color:#707070;
    font:18px "微软雅黑";
    font-weight: bold;
    margin: 4px 0;
}
ul>li{
    margin: 4px 0;
}
ul li>a{
    color:#8b8b8b;
    font:18px "微软雅黑";
}
ul li>a:hover{
    color:#E50012;
    text-decoration: underline;
}
.bottom{
    width:100%;
    background: #333;
    height:68px;
    color:#fff;
}
.bottom>div{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    font:13px "微软雅黑";
}
.btel{
    background:url(../assets/images/ico_tel.png) no-repeat left;
    padding-left:18px;
    float: left;
    margin-top:10px;
}
.bfax{
    background:url(../assets/images/ico_fax.png) no-repeat left;
    padding-left:18px;
    float: left;
    margin-left:20px;
    margin-top:10px;
}
.baddress{
    background:url(../assets/images/ico_map.png) no-repeat left;
    padding-left:18px;
    margin-top:36px;
}
.bottomr>p{
    margin-bottom:8px;
}
.share{
    float:right;
}
.weixin{
    width:24px;
    height: 24px;
    display: block;
    float:right;
    background:url(../assets/images/ico_weixin.png) no-repeat center;
}
.tsina{
    width:24px;
    height: 24px;
    display: block;
    float:right;
    background:url(../assets/images/ico_sina.png) no-repeat center;
}
.qzone{
    width:24px;
    height: 24px;
    display: block;
    float:right;
    background:url(../assets/images/ico_qq.png) no-repeat center;
}
</style>
