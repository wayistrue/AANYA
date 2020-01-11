<template>
    <div class="ind_dealer">
        <div class="block">
            <div class="ind_dealer_left">
                <span>三雅<span>®</span>全球经销网点</span>
                <p>SANYA GLOBAL DEALER NETWORK</p>
                <button>申请成为经销商</button>
            </div>
            <div class="ind_dealer_map">
                <ul>
                    <li class="ouzhou">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>欧洲</p>
                    </li>
                    <li class="feizhou">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>非洲</p>
                    </li>
                    <li class="nanmeizhou">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>南美洲</p>
                    </li>
                    <li class="zhongdong">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>中东</p>
                    </li>
                    <li class="yazhou">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>亚洲</p>
                    </li>
                    <li class="dongnanya">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>东南亚</p>
                    </li>
                    <li class="dayangzhou">
                        <img src="../assets/images/map_icon.png" alt="">
                        <p>大洋洲</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ind_dealer{
    width:100%;
    height:509px;
}
.block{
    width:1200px;
    height:100%;
    background:#eee;
    margin:0 auto;
    padding:0 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ind_dealer_left>span{
    display: block;
    background:url("../assets/images/dealer_title.png") no-repeat left center;
    font-size: 32px;
    text-indent: 58px;
    font-weight: bold;
}
.ind_dealer_left>span>span{
    font:16px "微软雅黑";
    color:#999;
    font-weight: 100;
    vertical-align: super;
}
.ind_dealer_left>p{
    font: 21px "微软雅黑";
    color:#c7c7c7;
    margin-top:6px;  
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
button:hover{
    background:#f00;
}
.ind_dealer_map{
    background:url(../assets/images/dealer_map.png) no-repeat center;
    width:630px;
    height:310px;
    position: relative;
}
.ind_dealer_map>ul{
    list-style: none;
    margin:0;
    padding:0;
}
.ind_dealer_map>ul>li{
    position: absolute;
}
.ind_dealer_map .ouzhou{
    top:25%;
    left:46%;
}
.ind_dealer_map .ouzhou p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px -35px;
}
.ind_dealer_map .feizhou{
    top:47%;
    left:43%;
}
.ind_dealer_map .feizhou p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px -35px;
}
.ind_dealer_map .nanmeizhou{
    top:71%;
    left:30%;
}
.ind_dealer_map .nanmeizhou p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px 25px;
}
.ind_dealer_map .zhongdong{
    top:44%;
    left:58%;
}
.ind_dealer_map .zhongdong p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px 25px;
}
.ind_dealer_map .yazhou{
    top:38%;
    left:76%;
}
.ind_dealer_map .yazhou p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px -30px;
}
.ind_dealer_map .dongnanya{
    top:56%;
    left:73%;
}
.ind_dealer_map .dongnanya p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px 25px;
}
.ind_dealer_map .dayangzhou{
    top:70%;
    left:83%;
}
.ind_dealer_map .dayangzhou p{
    font-size: 14px;
    font-weight: bold;
    color:#474747;
    margin:-10px 0px 0px 25px;
}
.ind_dealer_map p:hover{
    color:#E50012;
}
@keyframes beat {
    0%,100%{
        transform: translateY(0);
    }    
    25%{
        transform: translateY(5px);
    }
    75%{
        transform: translateY(-5px);
    }
}
.ind_dealer_map img{
    animation: beat 1.1s linear infinite;
}
</style>
