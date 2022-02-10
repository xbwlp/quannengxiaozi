<template>
<p class='css'>导航栏</p>

<div class='border0'>
<p class='css0'>SYS.博雅学堂</p>
</div>

<div>
 <p class='css1'>活动预约</p> 
<h1 class='border1'>
<img class='picture_1' src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13959018708%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646657900&t=e81bce371edbf31220673634eef27fa2" alt="活动图片1">
<p class='xian1'></p>
<h3 class="css2"><li @click="go('/pages/activity_join/activity_join' )"><br>SYS.活动具体项目名称<br></li></h3>
</h1>
<h1 class='border2'>
<img class='picture_2' src="https://c-ssl.duitang.com/uploads/item/202002/27/20200227202455_hrfuj.jpg" alt="活动图片2">
<p class='xian2'></p>
<h3 class="css3"><li @click="go('/pages/activity_join/activity_join')"><br>SYS.活动具体项目名称<br></li></h3> 
</h1>
</div>

<div>
  <p class='xian3'></p>
  <p class='css4'>往期回顾</p>  
<swiper
  class="swiper"
  indicator-color="#999"
  indicator-active-color="#333"
  :circular="true"
  :indicator-dots="true"
  :autoplay="true"
  >
 <swiper-item>
   <img src="https://c-ssl.duitang.com/uploads/blog/202102/07/20210207175519_db466.jpeg" alt=""/>
 </swiper-item>
 <swiper-item>
   <img src="https://c-ssl.duitang.com/uploads/blog/202101/01/20210101192548_f8606.jpg" alt=""/>
 </swiper-item>
 <swiper-item>
   <img src="https://c-ssl.duitang.com/uploads/item/202007/20/20200720000923_smAnY.jpeg" alt=""/>
 </swiper-item>
</swiper>
</div>
<div>/*翻页的那个
  <p>sys123456</p>
  <li
  @click="go('/pages/activity_join/activity_join')">活动信息</li>
</div>
</template>
 
<script>
import {ref} from 'vue'
import Taro from '@tarojs/taro'

export default {
  setup(props, context) {
    // data
    // method
    const go = (url) => {
      Taro.navigateTo({url})
    }
    const words2="品牌活动"

    return {
      go,
    }
  }
}
</script>
<style lang="less">
swiper{
  top: 814px;
  left:0px;
  margin-top:5%;
  padding-top:5%;
  width:375px;
  height:280px;
  line-height:20px;
  border-radius:17px 17px 17px 17px;
  background-color:#F24242;
  color:#101010;
  font-size:14px;
  text-align:center;
  box-shadow:0px 2px 6px 0px 	#C0C0C0;
  font-family:Arial;
}
.border0{
      margin-left: auto;
margin-right: auto;
margin-top: auto;
display: table-cell;
vertical-align: middle;
text-align: center;    
  left: 1px;
  top: 74px;
  width: 375px;
  height: 216px;
  line-height: 20px;  
  border-radius: 0px 0px 20px 20px;
  text-align:center; 
  background-color: #F7F7F7;
  border-width:3px;
  border-style:solid;
  border-color:#BBBBBB;
}
.border1{
      margin-left: auto;
margin-right: auto;
  left: 53px;
            top: 338px;
            width: 288px;
            height: 101px;
            line-height: 20px;
            border-radius: 10px 10px 10px 10px;
            box-shadow:0px 2px 6px 0px #C0C0C0;
            text-align:center; 
            background-color: #FFFFFF;
              border-width:3px;
              border-style:solid;
              border-color:#FE222D;
}
.border2{
  margin-left: auto;
margin-right: auto;
  left: 53px;
            top: 465px;
            width: 288px;
            height: 101px;
            line-height: 20px;
            border-radius: 10px 10px 10px 10px;
            box-shadow:0px 2px 6px 0px #C0C0C0;
            text-align:center; 
            background-color: #FFFFFF;
              border-width:3px;
              border-style:solid;
              border-color:#FE222D;
}
.picture_1{
            left:66px;
            top:359px;
            width:110px;
            height:59px;
}
.picture_2{
            left:66px;
            top:489px;
            width:110px;
            height:59px; 
}
.xian1{
  left: 197px;
  top: 373px;
  width: 31px;
  height: NaNpx;
  border{
    border-width:1px;
    border-style:solid;
    border-color:#BBBBBB;
  }
}
.xian2{
  left: 197px;
  top: 503px;
  width: 31px;
  height: NaNpx;
  border{
    border-width:1px;
    border-style:dashed;
    border-color:#BBBBBB;
  }
}
.xian3{
  left: 112px;
  top: 669px;
  width: 150px;
  height: NaNpx;
  border{
    border-width:5px;
    border-style:solid;
    border-color:#F5222D;
    }
}
.css{
            left: 1px;
            top: 44px;
            width: 375px;
            height: 45px;
            line-height: 23px;
            color: #444444;
            font-size: 16px; 
            text-align:center; 
            border-radius: 5px 5px 4px 5px;
            background-color: #FFFFFF;
            font-family:Arial;
            border{
              border-width:1px;
              border-style:solid;
              border-color:#FFFFFF;
            }
}
.css0{
margin-left: auto;
margin-right: auto;
margin-top: auto;
display: flex; 
flex-direction: column; 
justify-content:space-around;    
 border-radius:1px/2px;
            left: 121px;
            top: 110px;
            width: 149px;
            height: 137px;
            line-height: 29px;
            color: #FBFBFB;
            font-size: 20px; 
            box-shadow:0px 2px 6px 0px #000000;
            border-radius: 5px 5px 4px 5px;
            background-color: #F7414A;
            font-family:Arial;
             border-width:1px;
              border-style:solid;
              border-color:#FFFFFF;
}
.css1{
      margin-left: auto;
margin-right: auto;
            left: 121px;
            top: 296px;
            width: 153px;
            height: 34px;
            line-height: 26px;
            color: #F5222D;
            font-size: 18px; 
            text-align:center; 
            border-radius: 5px 5px 4px 5px;
            background-color: #FFFFFF;
            font-family:Arial;
            border{
              border-width:4px;
              border-style:solid;
              border-color:#F5222D;
            }
}
.css2{
      margin-left: auto;
margin-right: auto;
  left: 228px;
  top: 384px;
  width: 62px;
  height: 20px;
  color: #101010;
  font-size: 14px; 
  text-align:center; 
  font-family:PingFangSC-regular;
}
.css3{
  margin-left: auto;
margin-right: auto;
            left: 228px;
            top: 508px;
            width: 104px;
            height: 20px;
            color: #101010;
            font-size: 14px; 
            text-align:left; 
            font-family:PingFangSC-regular;
}
.css4{
  margin-left: auto;
margin-right: auto;
  left: 112px;
  top: 768px;
  width: 153px;
  height: 32px;
  line-height: 26px;
  color: #F52204;
  font-size: 18px; 
  box-shadow:0px 2px 6px 0px #000000;
  text-align:center; 
  border-radius: 5px 5px 4px 5px;
  background-color: #FFFFFF;
  font-family:Arial;
  border{
    border-width:1px;
    border-style:solid;
    border-color:#F5222D;
    }
}
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.85rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      text-align: center;
      // padding: 7px 0;
      border-top: 1px solid #eaeaea;
      font-size: 0.1rem;
      img {
        width: 0.2rem;
        height: 0.2rem;
        margin: 5px auto 0px;
      }
      &.active {
        color: #ff5621;
        font-weight: bold;
      }
    }
  }
}
</style>