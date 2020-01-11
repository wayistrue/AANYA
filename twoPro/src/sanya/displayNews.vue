<template>
    <div>
        <myheader></myheader>
        <div class="mainContent">
            <div class="inc_nav">
                <div>三雅新闻</div>
                <ul>
                    <li><a @click="goNews()">三雅新闻</a></li>
                    <li><a>专题报道</a></li>
                    <li><a>SANYA知识库</a></li>
                </ul>
            </div>
            <div class="block">
                <div class="dis_news">
                    <div class="dis_news_title">三雅荣获国家知识产权优势企业</div>    
                    <div class="dis_news_des">
                        阅读量：115  添加时间：2019-12-27  来源：
                    </div>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; 日前，国家知识产权局公示了2019年度国家知识产权优势示范企业名单及国家知识产权优势示范企业通过复验名单。全国共有1965家企业获得“2019年度国家知识产权优势企业”。经过层层评审，广州三雅摩托车有限公司凭借强大的研发创新和知识产权管理实力，荣获2019年度“国家知识产权示范企业”称号。
                    </p>        
                    <p>
                        <img src="./displayNews/20191227082020_s.png" alt="">
                    </p>
                    <p>
                        <img src="./displayNews/20191227081048197.jpg" alt="">
                    </p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; “国家知识产权优势企业”是国家对企业知识产权创造、运用、保护、管理等方面工作突出授予的最高荣誉。获评“国家知识产权示范企业”，是三雅公司不断加强知识产权工作建设的重大成果</p>
                    <p>
                        <img src="./displayNews/20191227081122187.jpg" alt="">
                    </p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; 作为摩托车行业资深品牌，高新技术企业，三雅公司自成立至今，始终坚持自主研发创新，截止2019年累计拥有超过293项专利技术，每年推出1-2款自主研发升级车型，三雅不仅是节能环保摩托车工程研究中心、广州市工业设计中心，还是省级企业技术中心。</p>
                    <p>
                        <img src="./displayNews/20191227081557183.jpg" alt="">
                    </p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; 三雅公司高度重视知识产权建设，制定了完善的知识产权管理制度，实现企业知识产权工作的专业化、系统化、规范化管理，在20多年的创新创造发展实践过程中，建立起了与三雅发展相匹配的知识产权战略规划，三雅公司始终将技术创新作为核心战略目标，重视技术创新、严控产品品质，为创世界级而努力学习和奋斗。</p>
                    <p>
                        <img src="./displayNews/20191227081627136.jpg" alt="">
                    </p>
                    <div class="dis_page">
                        <div class="d_prev">
                            <p>
                                <b>上一篇： </b><a>已经是第一篇了</a>
                            </p>
                        </div>
                        <div class="d_next">
                            <p>
                                <b>下一篇：</b>
                                <a>三雅受邀参加第二届世界生态设计大会</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="dis_news_right">
                    <div>下一篇</div>
                    <a>三雅受邀参加第二届世界生态设计大会</a>
                    <p>2019-12-16</p>
                </div>                
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from './Header'
import myfooter from './Footer'
export default {
    methods:{
        goNews(){
            this.$router.push('/news');
        }
    },
    components:{
        'myheader': myheader,
        'myfooter': myfooter
    }
}
</script>

<style scoped>
p{
    line-height: 30px;
}
.mainContent{
    width:1200px;
    margin:0 auto;
}
.inc_nav{
    width:100%;
    margin:0px 0px 50px 15px;
    padding:60px 0px 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
}
.inc_nav>div{
    color:#2f2f2f;
    font:30px "微软雅黑";
    height:40px;
}
.inc_nav>ul{
    list-style: none;
    color:#555;
    font:12px "微软雅黑";
    display: flex;
    justify-content: space-between;
    align-items:inherit;
    height:40px;
}
.inc_nav>ul>li{
    margin:0 10px;
}
.inc_nav>ul>li>a:hover{
    color:#f00;
    cursor: pointer;
}
.block{
    width:100%;
    color:#505050;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
.block>.dis_news{
    width:825px;
    margin:0px 0px 0px 15px;
}
.block>.dis_news_right{
    width:315px;
}
.dis_news_title{
    color:#3c3c3c;
    font-size:18px;
}
.dis_news_des{
    color:#717171;
    font-size:14px;
    line-height: 55px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 30px;
}
.dis_news p{
    width:100%;
}
.dis_news  img{
    width:100%;
}
.dis_page{
    display: flex;
    justify-content: space-between;
}
.dis_page b{
    font-size: 15px;
}
.dis_page a,.dis_page a{
    font-size: 13px;
}
.dis_page a:hover{
    color:#f00;
}
.dis_news_right div{
    color:#4f4f4f;
    font-size: 14px;
    padding-top: 20px;
    line-height: 55px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 30px;
}
.dis_news_right a{
    color:#555;
    font-size: 16px;
}
.dis_news_right a:hover{
    color:#f00;
}

.dis_news_right p{
    font-size: 14px;
    color:#a4a4a4;
    line-height: 10px;
}
</style>