<template>
    <div>
        <myheader></myheader>
        <div class="block">
            <div class="inc_nav">
                <div class="inc_title">三雅新闻</div>
                <ul>
                    <li><a>三雅新闻</a></li>
                    <li><a>专题报道</a></li>
                    <li><a>SANYA知识库</a></li>
                </ul>
            </div>
            <div class="inc_news_block">
                <div v-for="(item, index) in data" :key="index" class="newslist">
                    <div class="pic">
                        <img @click="goDisplayNews()" src="./displayNews/20191227082020_s.png" alt="">
                    </div>
                    <div class="con2">
                        <div class="title">
                            <a @click="goDisplayNews()">三雅荣获国家知识产权优势企业</a>
                        </div>
                        <div class="desc">
                            这是三雅公司不断加强知识产权工作建设的重大成果。
                        </div>
                        <div class="more">
                            <a @click="goDisplayNews()">了解更多&gt;</a>
                        </div>
                    </div>
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
    data() {
        return {
            data :[1,2,3,4,5,6,7,8,9]
        }
    },
    methods:{
        goDisplayNews(){
            this.$router.push('/displayNews');
        }
    },
    components:{
        myheader,
        myfooter
    }
}
</script>

<style scoped>
.block{
    width:1200px;
    margin:0 auto;
}
.inc_nav{
    color:#555;
    font:14px "微软雅黑";
    margin-bottom: 50px;
    margin-left: 15px;
    padding:60px 0px 30px;
    display: flex;
    justify-content: space-between;  
    border-bottom: 1px solid #dfdfdf;
}
.inc_title{
    color:#2f2f2f;
    font:30px "微软雅黑";
}
.inc_nav ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.inc_nav li{
    margin:0 10px;
}
.inc_nav a:hover{
    color:#f00;
}
.inc_news_block{
    width:100%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
.newslist{
    width:385px;
    margin-left: 15px;
    margin-bottom: 15px;
}
.pic{
    width:100%;
    overflow: hidden;
}
.pic>img{
    width:100%;
    transition: 0.5s linear;
}
.pic>img:hover{
    transform: scale(1.05);
    transition: 0.5s linear;
}
.title{
    font:18px "微软雅黑";
    color: #3c3c3c;
    font-weight: bold;
    line-height: 48px;
    height: 48px;
}
.desc{
    font:14px "微软雅黑";
    line-height: 22px;
    color: #717171;
    height: 88px;
    overflow: hidden;
}
.more{  
    text-align: right;
    font-size: 14px;
    color: #afafaf;
    line-height: 30px;
    height: 30px;
}
.con2 a:hover{
    color:#f00;
}
</style>