<template>
    <div class="banner">
        <div class="left-btn"></div>
        <!-- :src="`http://127.0.0.1:4000/${item.pic}`" -->
        <item v-for="(item,i) of carousel" :key="i" :pic="`http://127.0.0.1:5656/${item.pic}`"></item>
        <div class="right-left"></div>
    </div>
</template>

<script>
import item from "./Item.vue"
export default {
    data(){
        return {
            // carousel:[
            //     '../../assets/carousel_item/carousel-4.jpg',
            //     '../../assets/carousel_item/carousel-5.jpg',
            //     "../../assets/carousel_item/carousel-6.jpg",
            //     "../../assets/carousel_item/carousel-7.jpg",
            //     ],
            carousel:[],
        }
    },
    components:{
        item
    },
    methods:{
        getBanner(){
            this.axios.get("/banner").then(result=>{
                this.carousel = result.data.data;
                this.carousel.push(result.data.data[0]);
            });
        }
    },
    created(){
        this.getBanner();
    }
}
</script>