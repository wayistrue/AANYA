<template>
    <div class="main_content">
        <myheader></myheader>
        <div class="inc_nav">
            <img src="./dealer/20170703112513.jpg" alt="">
        </div>
        <div class="block">
            <div class="j_title1">成为三雅®大家庭的成员</div>
            <div class="j_con">
                <p>三雅®的核心价值观是：让思想更远，令距离更近，自1998年开始, 我们一直致力于实现该目标。同时, 它也是我们一切工作的基础。过去的20多年里，三雅®在高速发展中积累了成熟的经验，三雅®旗下拥有摩托车、电动车两大业务集群，现已成长为中国主要的摩托车和电动车制造商之一。
                </p>
            </div>
            <div class="j_line1"></div>
            <div class="j_title1">三雅®经销店业务</div>
            <div class="j_line1"></div>
            <div class="j_title2 j_con1">
                <!-- <img src="../assets/images/jico1.png" alt=""> -->
                <p>摩托车与电动车整车销售</p>
            </div>
            <div class="j_con">
                <p>一切皆始于骑行。多款三雅® 摩托车及电动车销售能够帮助摩友们找到契合自己的梦想座驾。</p>
            </div>
            <div class="j_title2 j_con2">
                <!-- <img src="../assets/images/jico2.png" alt=""> -->
                <p>原厂部件与配件</p>
            </div>
            <div class="j_con">
                <p>原厂部件与配件部门帮助车主日常自主改装和保养。</p>
            </div>
            <div class="j_title2 j_con3">
                <!-- <img src="../assets/images/jico3.png" alt=""> -->
                <p>原厂服务与技术培训</p>
            </div>
            <div class="j_con">
                <p>经销店的售后服务部门致力于延长摩托车和电动车的使用寿命和确保客户的使用体验。 三雅负责售后服务的技师是经认证的专业人员，他们具有丰富的保养和维修摩托车及电动车的经验。
                </p>
            </div>
            <div class="j_line1"></div>
            <div class="j_title1">成为三雅®经销商的要求</div>
            <div class="j_con">
                <p>为了事业的可持续发展，为了给用户提供专属于三雅® 的优质骑行服务，经销商备选者需满足下列要求：</p>
            </div>
            <img src="./dealer/join_pic1.jpg" alt="">
            <img src="./dealer/join_pic2.jpg" alt="">
            <div class="j_title1">360°配套的贴身支持</div>
            <div class="j_support">
                <ul>
                    <li>
                        <div class="jnum num1">营销支持</div>
                        <div class="line"></div>
                        <div class="con">
                            <p>针对不同国家及地区，制定符合投资者实际情况、符合区域特性及针对性强的营销推广策略，并定期开展统一的推广活动，保证投资者各项业务的良性增长。</p>
                        </div>
                    </li>
                    <li>
                        <div class="jnum num2">360°全程售后支持</div>
                        <div class="line"></div>
                        <div class="con">为投资者提供全面的售后技术指导和培训，严格执行国家标准的"三包"售后服务政策免除投资者的后顾之忧，真正做到无忧经营。</div>
                    </li>
                    <li>
                        <div class="jnum num3">产品支持</div>
                        <div class="line"></div>
                        <div class="con">投资者拥有三雅® 摩托车和电动车系列车型及本地化服务的独家运营权，尽享产品升级和服务创新带来的利润增长，不必担忧产品结构及服务模式单一造成的利润下滑。</div>
                    </li>
                    <li>
                        <div class="jnum num4">品牌支持</div>
                        <div class="line"></div>
                        <div class="con">投资者可享有三雅区域会议及促销、路墙广告、高速公路广告等品牌支持享受三雅对品牌不断投入带来的品牌升级溢价。</div>
                    </li>
                </ul>
            </div>
            <div class="j_title1">申请成为经销商</div>
            <div class="j_form">
                <input class="f1" type="text" placeholder="*称呼">
                <input class="f1" type="text" placeholder="*电话">
                <input class="f2" type="text" placeholder="*邮箱">
                <input class="f1" type="text" placeholder="*居住国家">
                <input class="f1" type="text" placeholder="*居住城市">
                <input class="f2" type="text" placeholder="*计划在哪个国家/城市开经销店">
                <input class="f3" type="text" placeholder="*对什么业务感兴趣?">
            </div>
            <button class="submit">发送</button>
            <div class="j_contact">
                <div class="j_title1">联系我们</div>
                <p>中国市场：全国24h服务热线：400-700-3838</p>
                <p>海外市场：+86-020-87916128-8028/8005</p>
                <p>邮箱：sanya@sanyamotor.com</p>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from './Header'
import myfooter from './Footer'
export default {

    components:{
        myheader,
        myfooter
    }
}
</script>

<style scoped>
.main_content{
    background:#f5f5f5;
}
.ins_nav{
    width:100%;
}
.ins_nav img{
    width:100%;
}
.block{
    width:1200px;
    margin:0 auto;
    background: url('./dealer/join_bg.jpg') no-repeat top center;
    margin-top: -128px;
    padding-top: 148px;
    overflow: hidden;
    height: 2350px;
}
.j_title1{
    color: #e50012;
    font-size: 34px;
    margin-bottom: 15px;
}
.j_con{
    font-size: 14px;
    color: #6e6e6e;
    line-height: 24px;
}
.j_line1{
    border-bottom: 1px solid #dfdfdf;
    margin: 35px 0;
}
.j_title2{
    color: #404040;
    font-size: 22px;
    margin: 35px 0 10px;
    padding-left: 50px;
    line-height: 28px;
    height: 28px;
}
.j_title2.j_con1{
    background: url(../assets/images/jico1.png) no-repeat left center;
}
.j_title2.j_con2{
    background: url(../assets/images/jico2.png) no-repeat left center;
}
.j_title2.j_con3{
    background: url(../assets/images/jico3.png) no-repeat left center;
}
.j_support{
    margin: 40px 0;
}
.j_support ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.j_support ul>li{
    width: 220px;
    padding: 40px 35px;
    background: #fff;
    float: left;
    margin-right: 10px;
}
.j_support .jnum{
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 22px;
    color: #404040;
    padding-top: 55px;
    text-align: center;
}
.jnum.num1{
    background: url(../assets/images/jn1.png) no-repeat top center;
}
.jnum.num2{
    background: url(../assets/images/jn2.png) no-repeat top center;
}
.jnum.num3{
    background: url(../assets/images/jn3.png) no-repeat top center;
}
.jnum.num4{
    background: url(../assets/images/jn4.png) no-repeat top center;
}
.line{
    border-bottom: 1px solid #dfdfdf;
    margin: 10px auto 20px;
    width: 50px;
}
.con{
    font-size: 14px;
    line-height: 24px;
    color: #404040;
    height: 120px;
}
.j_form input{
    color: #666;
    font-family: "微软雅黑";
    background: none;
    border-radius: 8px;
    border: 1px solid #cdcdcd;
    padding: 5px 10px;
    height: 30px;
    outline: none;
    line-height: 30px;
}
.j_form .f1{
    width: 354px;
    margin: 0 35px 15px 0;
    float: left;
    line-height: 30px;
}
.j_form .f2{
    width: 354px;
    margin: 0 0 15px 0;
    float: left;
    line-height: 30px;
}
.j_form .f3{
    display: block;
    width: 1175px;
    clear: both;
    margin-bottom: 15px;
    color: #666;
    background: none;
    border-radius: 8px;
    border: 1px solid #cdcdcd;
    padding: 5px 10px;
    line-height: 30px;
    height: 30px;
    outline: none;
}
.submit{
    -webkit-appearance: none;
    width: 100%;
    font-family: "微软雅黑";
    background: #4a4a4a;
    border-radius: 8px;
    text-align: center;
    line-height: 35px;
    height: 45px;
    color: #fff;
    text-align: center;
    font-size: 15px;
    display: block;
    margin: 25px 0;
    cursor: pointer;
}
.j_contact{
    margin-top: 100px;
}
.j_contact p{
    color: #404040;
    font-size: 14px;
    line-height: 30px;
}
</style>