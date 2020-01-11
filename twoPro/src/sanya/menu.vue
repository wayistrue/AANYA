<template>
    <div class="menu">
       <!-- <img src="../../assets/logo.png" alt=""> -->
       <div class="item">
           <div class="pc">
               <span>关于<br>
                   我们
                </span>
            <div >
            <div class="item1">
              <span> 企业<br>
                介绍</span>
            </div>
            <div class="item2">
               <span>企业<br>
                   文化</span>
           </div>
            <div class="item3">
               <span>企业<br>
                   优势</span>
           </div>
            <div class="item4">
               <span>发展
                   <br>
                   历程
                </span>
           </div>
           <div class="item5">
               <span>组织<br>
                   架构</span>
             </div>
           </div>
           </div>
       </div>
        <div class="list">
           <div class="pc">
               <span>勘察<br>
                   资质
                </span>
           </div>
            <div class="list1">
              <span> 房地开发<br>
                资质
                </span>
           </div>
            <div class="list2">
               <span>资质<br>
                   代理</span>
           </div>
            <div class="list3">
               <span>总承包<br>
                   资质</span>
           </div>
            <div class="list4">
               <span>专业承包
                   <br>
                   资质
                </span>
           </div>
           <div class="list5">
               <span>设计<br>
                   资质</span>
           </div>
           <div class="list5">
               <span>人才<br>
                   猎聘</span>
           </div>
       </div>
       <div class="pic">
           <img src="./wave1.png" alt="">
           <img src="./wave1.png" alt="">
       </div>
    </div>
</template>

<script>
export default {
    mounted(){
        let pic = document.getElementsByClassName("pic")[0];
        let img1 = document.querySelector(".pic>img:first-child");
        let img2 = document.querySelector(".pic>img:last-child");
        let left1 = getComputedStyle(img1);
        setInterval(()=>{
            let num = parseInt(left1.left);    
            if(num == 0){
                img1.style.left = -1300 + "px";
                img1.style.transition = "10s linear";
                img2.style.left = 0 + "px";
                img2.style.transition = "10s linear";
            }else if(num == -1300){
                img1.style.left = 0 + "px";
                img2.style.left = 1300 + "px";
                img2.style.right = 2600 + "px";
                img2.style.transition = "10s linear";
                img1.style.right = 1300 + "px";
                img1.style.transition = "10s linear";
            }
        },100);
    }
}
</script>


<style scoped>
@keyframes change{
            0%{
               top:300px;
            }
            25%{
                top:280px;
            }
            50%{
               
                top:250px;
            }
            75%{
               top:280px;
            }
            90%{
                top:290px;
            }
            100%{
               top:300px;
            }
        }
        .menu{
            width:100%;
            height:800px;
            background:#ada;
        }
        .pic{
            width: 1300px;
            height: 81px;
            display: flex;
            position: absolute;
            top:300px;
            left:0px;
        }
        .pic>img{

            width:100%;
            height:100%;
        }
        .pic>img:first-child{
            position: absolute;
            left:0;
        }
        .pic>img:last-child{
            position: absolute;
            left:1300px;
        }
        /* .pic:hover{
            left:-1200px;
            transition:10s linear;
        } */
 .item{
     width: 120px;
     height: 120px;
     /* background-color: aqua; */
     padding: 20px;
     position: absolute;
     top:211px;
     left: 300px; 
    /* animation: movie-item 1s infinite;  */
    animation-play-state: paused;
      animation: change 3s linear infinite  ;
     
 }
 .pc{
     width: 55px;
     height: 55px;
     background-color:#03b8c4; 
     border-radius: 50%;
      line-height: 20px;
      /* padding-top:0px; */
      position: relative;
      z-index:10;
       border:6px solid #77b5bb67 ;
 }
 .item:hover{
     /* transition: 1s linear; */
     /* top:200px; */


     /* animation-play-state: running; */
      animation-play-state:paused; 
 }
 .pc>span{
     font-size: 10px;
     color:#fff;
 }
 .item1,.item2,.item3,.item4,.item5{
      width: 55px;
     height: 55px;
     background-color:#fff; 
     border-radius: 50%;
      line-height: 20px;
      position: absolute;
      top: 0px;
      left: 0px;
      opacity: 0;
     transition: 1s; 
     border:6px solid #77b5bb67 ;
     animation-duration:3s;
 }
 .item1,.item2,.item3,.item4,.item5>span{
     font-size: 10px;
     color:black;
 }
 .item1:hover{
     background-color: #da6e16;
 }
 .item2:hover{
     background-color: #da6e16;
 }
 .item3:hover{
     background-color: #da6e16;
 }
 .item4:hover{
     background-color: #da6e16;
 }
 .item5:hover{
     background-color: #da6e16;
 }
 .item:hover .item1{
     top: -100px;
     opacity:1;
     transition: 1s; 
 }
 .item:hover .item2{
     left: -100px;
     top:-40px;
     opacity:1;
     transition: 1s;  
 }
 .item:hover .item3{
     top: 70px;
     left:-90px;
     opacity:1;
     transition: 1s;  
 }
 .item:hover .item4{
     top: 100px;
     opacity:1;
     transition: 1s;  
 }
 .item:hover .item5{
     left: 80px;
     top: 60px;
     opacity:1;
     transition: 1s;  
 }
 .list{
     width: 120px;
     height: 120px;
     /* background-color: aqua; */
     padding: 20px;
     position: absolute;
     top:500px;
     left: 800px; 
    /* animation: movie-item 1s infinite;  */
    animation-play-state: paused;
    animation: change 3s linear infinite ;
 }
.list1,.list2,.list3,.list4,.list5{
    width: 55px;
     height: 55px;
     background-color:#fff; 
     border-radius: 50%;
      line-height: 20px;
      position: absolute;
      top: 0px;
      left: 0px;
      opacity: 0;
     transition: 1s; 
     border:6px solid #77b5bb67 ;
     animation-duration:3s;
 }
.list:hover{
      animation-play-state:paused; 
 }
 .list:hover .list1{
     top: -100px;
     opacity:1;
     transition: 1s; 
 }
 .list:hover .list2{
     left: -100px;
     top:-40px;
     opacity:1;
     transition: 1s;  
 }
 .list:hover .list3{
     top: 70px;
     left:-90px;
     opacity:1;
     transition: 1s;  
 }
 .list:hover .list4{
     top: 100px;
     opacity:1;
     transition: 1s;  
 }
 .list:hover .list5{
     left: 80px;
     top: 60px;
     opacity:1;
     transition: 1s;  
 }
 .list>div:not(:nth-child(1)){
     background: #10e722;
 }
</style>