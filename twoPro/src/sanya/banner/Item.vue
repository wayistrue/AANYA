<template>
    <div>
        <ul >
            <li>
                <a href="javascript:;">
                    <img :src="pic" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        pic:{default:""},
    }
}
</script>

<style scoped>
div{
    width:1000px;
    margin:0 auto;
    overflow: hidden;
    position: relative;
}
ul{
    width:5000px;
    list-style-type: none;
}
ul>li{
    float: left;
}
ul>li img{
    width:1000px;
}
</style>
