<template>
    <div class="bgClass">
        <div>
            <a @click="goMotoType()">
                <img src="./20170424024437s.png" alt="">
            </a>
            <a @click="goMotoType()" class="title">电动车</a>
            <p>坐拥广东省技术中心，致力于年轻、时尚、个性产品的研发。</p>
            <button @click="goMotoType()">查看详情</button>
        </div>
        <div>
            <a  @click="goMotoType()">
                <img src="./20170424024649s.png" alt="">
            </a>
            <a class="title"  @click="goMotoType()">电动车</a>
            <p>坐拥广东省技术中心，致力于年轻、时尚、个性产品的研发。</p>
            <button @click="goMotoType()">查看详情</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goMotoType(){
            this.$router.push('/motoType');
        }
    }
}
</script>

<style scoped>
.bgClass{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
}
.bgClass img{
    margin-top:30px;
}
.bgClass p{
    margin:30px 0;
}
.bgClass div{
    width:590px;
    height:588px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:#eee;
}
a{
    text-decoration: none;
    font-size:32px;
    color:#555;
    font-family: "微软雅黑";
}
p{
    font-size:15px;
    color:#555;
    font-family: "微软雅黑";
}
button{
    font-size:14px;
    color:#fff;
    font-family: "微软雅黑";
    background:#E50012;
    width:170px;
    height:38px;
    outline: 0;
    border:0;
    border-radius: 5px;
}
.title{
    font-weight: bold;
}
.title:hover{
    color:#E50012;
}
button:hover{
    background:#f00;
}
img{
    transition: 0.3s linear;
}
img:hover{
    transform: scale(1.05);
}
</style>

