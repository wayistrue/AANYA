<template>
    <div>
        <div class="item">
            <div class="item1"></div>
            <div class="item2"></div>
            <div class="item3"></div>
            <div class="item4"></div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        let item = document.querySelector(".item");
        let item1 = document.querySelector(".item1");
        let item2 = document.querySelector(".item2");
        let item3 = document.querySelector(".item3");
        let item4 = document.querySelector(".item4");
        item.addEventListener("mouseover",function(){
            item1.className = "i1";
            item2.className = "i2";
            item3.className = "i3";
            item4.className = "i4";
        })
        item.addEventListener("mouseout",function(){
            item1.className = "item1";
            item2.className = "item2";
            item3.className = "item3";
            item4.className = "item4";
        })
    }
}
</script>
<style scoped>
@keyframes moveItem {
    0%{
        top:500px;
    }
    10%{
        top:460px;
    }
    20%{
        top:420px;
    }
    30%{
        top:380px;
    }
    40%{
        top:420px;
    }
    50%{
        top:460px;
    }
    60%{
        top:500px;
    }
    70%{
        top:540px;
    }
    80%{
        top:580px;
    }
    90%{
        top:540px;
    }
    100%{
        top:500px;
    }
}
.item,.item1,.item2,.item3,.item4{
    width:80px;
    height:80px;
    border-radius: 50%;
}
.item1,.item2,.item3,.item4{
    background:#ada;
    width:80px;
    height:80px;
    position: absolute;
    top:40px;
    left:40px;
    transition:1s linear;
    opacity: 0;
}
.item{
    background:rgb(17, 116, 141);
    position: absolute;
    top:500px;
    left:300px;
    animation: moveItem 3s linear infinite;
}
.i1{
    background:#ada;
    width:80px;
    height:80px;
    position: absolute;
    top:-130px;
    left:-160px;
    transition: 1s linear;
    border-radius: 50%;
    opacity: 1;
}
.i2{
    background:#ada;
    width:80px;
    height:80px;
    position: absolute;
    top:130px;
    left:-160px;
    transition: 1s linear;
    border-radius: 50%;
}
.i3{
    background:#ada;
    width:80px;
    height:80px;
    position: absolute;
    top:-130px;
    left:160px;
    transition: 1s linear;
    border-radius: 50%;
}
.i4{
    background:#ada;
    width:80px;
    height:80px;
    position: absolute;
    top:130px;
    left:160px;
    transition: 1s linear;
    border-radius: 50%;
}
</style>
