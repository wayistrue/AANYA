<template>
    <div class="newslist">
        <div class="pic">
            <img @click="goNews()" src="./20190410141638197.jpg" alt="">
        </div>
        <div class="con">
            <div class="title">
                <a @click="goNews()">
                    喜讯 | 三雅四次入围广东省制造业五百强
                </a>
            </div>
            <div class="desc">
                如题
            </div>
            <div @click="goNews()" class="more">
                <a>了解更多></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goNews(){
            this.$router.push('displayNews');
        }
    }
}
</script>

<style scoped>
.newslist{
    width:385px;
    height:500px;
    border:1px solid #eeeeee;
    background:#ccc;
    margin-bottom:20px;
}
.pic{
    width:100%;
    height:256px;
    overflow: hidden;
}
.pic>img{
    widows: 100%;
    height: 100%;
    transition: .3s linear;
}
.pic>img:hover{
    transform: scale(1.1);
}
.con{
    padding:0 20px;
}
.title{
    margin:20px 0;
}
a{
    text-decoration: none;
}
.title>a{
    color:#555;
    font:18px "微软雅黑";
    font-weight: bold;
}
.desc{
    color:#717171;
    font:16px "微软雅黑";
    height:88px;
}
div.more{
    text-align: right;
}
.more>a{
    color:#555;
    font:16px "微软雅黑";
}
.title>a:hover,.more>a:hover{
    color:#E50012;
}
</style>
