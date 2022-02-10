<template>
  <view class="index">
    
      
  <view class="container hdCon">
      <view class="logo1">  
  <img src="http://astc.syac.xyz/2022/02/10/f42ccb06002f7.png" alt="微信图片_20220128222205.png" title="微信图片_20220128222205.png" /> 
      </view> 
      <view class="touxiang">
       <img src="http://astc.syac.xyz/2022/02/10/7ae71d3b92c01.png" alt="我的预约.png" title="我的预约.png" />
 
       <li  @click="go('/pages/my_information/my_information')" class="name">会飞的鱼儿</li>
      </view>
  </view>
 

    <div>
   <view style="margin:0 auto;" class="header"></view>  

   <view class="box1">
     <view class="logo2">
<img src="http://astc.syac.xyz/2022/02/10/7ae71d3b92c01.png" alt="我的预约.png" title="我的预约.png" />
     </view>
    <text class=h2>我预约的活动</text>

   </view>

<view class="box2">
  <view class="logo2">
<img src="http://astc.syac.xyz/2022/02/10/14d0f361a72d7.png" alt="我的评价.png" title="我的评价.png" />
  </view>

    <text class=h2>我的评价</text>

</view>

<!-- 设置长度和居中这样配置style就行 --> 
<scroll-view class="box3" scroll-x>
  <view class="box1con">
   
 <button  class="button1" @click="go('/pages/my_login/my_login')">
 <text class="btn">点击登录</text></button>
  <button class="button1" @click="go('/pages/my_register/my_register')">
  <text class="btn">点击注册</text></button>

 </view>
</scroll-view>

  
  </div>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Taro from '@tarojs/taro'
export default {
  name: 'Index',
  components: {},
  setup () {
    const state = reactive({
      msg: 'self page',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    })

    const handleClick = (type, msg, cover = false) => {
      state.show = true
      state.msg2 = msg
      state.type = type
      state.cover = cover
    }
    const go = (url) => {
      Taro.navigateTo({url})
    }

    return {
      ...toRefs(state),
      handleClick,
      go
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}




.container{
  width:750rpx;
  height:316px;
  border:1px solid white;
}
.logo1{
  padding-top: 22px;
  padding-left: 91px;
}
.logo1 image{
width: 284px;
height: 234px;
}
//头像的位置不会设置
.touxiang {
display: flex;
position: absolute;
padding-left: 44px;
top: 195px;
}
.touxiang image{
  width: 100px;
 height: 100px;
}
.name{
  padding-top:64px;
  padding-left:18px;
  font-size:20px;
  color: rgba(16, 16, 16, 100);
  font-family: AlibabaPuHui-regular;
  text-align: left;
  margin-bottom: 21px;
  //vertical-align:middle;  
}

.header{ 
position: relative;
width: 234px;
height: NaNpx;
border: 1px solid rgba(187, 187, 187, 100);
}


.box1{
  display:flex;
  padding-left: 16px;
  padding-top: 28px;
}
.box1 image{
  width: 40px;
height: 40px;
}
.box2{
  display:flex;
  padding-left: 16px;
  padding-top: 94px;
  padding-bottom: 96px;
}
.box2 image{
  width: 40px;
  height: 40px;
}
.h2{
color: rgba(245, 34, 45, 100);
font-size: 28px;
text-align: left;
font-family: PMZDBiaoTi-regular;
}


.box1con{ display:flex; 
justify-content: space-between;
padding-bottom:27px;
}

.button1{
width: 134px;
border-radius: 20px 20px 20px 20px;
color: rgba(16, 16, 16, 100);
border: 4px solid rgba(245, 34, 45, 100);

 //   background-color: white;
 // color:blacck;
//border:4px solid red;
//position:relative ;
}
.btn{
font-size: 14px;
text-align: center;
font-family: Arial;
}
</style>
