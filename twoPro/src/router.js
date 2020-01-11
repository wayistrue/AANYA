import Vue from 'vue'
import Router from 'vue-router'
import Header from './sanya/Header.vue'
import ProductDetails from './sanya/ProductDetails.vue'
import Banner from './sanya/banner/Banner.vue'
import SellWorld from './sanya/SellWorld.vue'
import IndormationFocus from './sanya/IndormationFocus.vue'
import Help from './sanya/Help.vue'
import Footer from './sanya/Footer.vue'
import menuItem from './sanya/menuItem.vue'
import motoList from './sanya/showMotoList.vue'
import motoType from './sanya/motoType.vue'
import displayProduct from './sanya/displayProduct.vue'
import displayNews from './sanya/displayNews.vue'
import introduce from './sanya/introduce.vue'
import news from './sanya/News.vue'
import Dealer from './sanya/Dealer.vue'
import men from './sanya/menu.vue'

import Home from './sanya/Home.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/Header",component:Header},
    {path:"/Banner",component:Banner},
    {path:"/ProductDetails",component:ProductDetails},
    {path:"/SellWorld",component:SellWorld},
    {path:"/IndormationFocus",component:IndormationFocus},
    {path:"/Help",component:Help},
    {path:"/Footer",component:Footer},
    {path:"/menuItem",component:menuItem},
    {path:"/motoList",component:motoList},
    {path:"/motoType",component:motoType},
    {path:"/displayProduct",component:displayProduct},
    {path:"/displayNews",component:displayNews},
    {path:"/introduce",component:introduce},
    {path:"/news",component:news},
    {path:"/dealer",component:Dealer},
    {path:"/men",component:men},
  ]
})
