<template>
    <div class="list">
        <p>新品推荐</p>
        <div class="moto-list">
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
            <div class="plist">
                <img @click="goDisplayProduct()" src="./20191126174837_s.jpg" alt="">
                <div class="tname">迅鹰版</div>
                <div class="pname"><a @click="goDisplayProduct()">新迅战SY1200DT-8</a></div>
            </div>
        </div>
        <div class="loadMore">点击查看更多产品&gt;&gt;</div>
    </div>
</template>

<script>
export default {
    methods:{
        goDisplayProduct(){
            this.$router.push('/displayProduct');
        }
    }
}
</script>

<style scoped>
.list{
    width: 1200px;
    margin: 0 auto;
}
.moto-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin:0 auto;
}
.list .plist{
    width:370px;
    height:381px;
    padding:10px 0px;
    margin:0 10px;
}
.list>p{
    font:26px "微软雅黑";
    color:#555;
    padding:60px 0 30px;
    margin:0 auto;
    text-align: center;
}
img{
    width:90%;
    height:76%;
    transition: 0.3s linear;
}
img:hover{
    transform: scale(1.05);
}
.tname{
    color:#212121;
    font:14px "微软雅黑";
    padding:10px 0 8px;
}
.pname{
    margin-bottom:10px;
}
.pname>a{
    text-decoration: none;
    color:#555;
    font:14px "微软雅黑";
}
.loadMore{
    width:100%;
    height:44px;
    text-align: center;
    color:#2d2d2d;
    font:16px "微软雅黑";
    background:#eee;
    margin:20px 0px 50px;
    border: 1px solid #ebebeb;
    line-height: 44px;
}
.loadMore:hover{
    background: #6178b3;
    color: #fff;
    transition: all 0.3s;
}
</style>
