<template>
  <view class="index">
  <view   class="header1" >
      <view class="logo1">
     <img src="http://astc.syac.xyz/2022/02/07/ed7a3696e8de3.png" alt="标题1 _1_.png" title="标题1 _1_.png" />
      </view>
  </view>
      
   


<view style="width:80px;margin:0 auto;" class="header"></view> 
<!-- 设置长度和居中这样配置style就行 --> 
<!--  
<scroll-view class="box1" scroll-x>
  <view class="box1con">
-->
  
<!--  <button style="width: 260rpx;height: 130rpx; box-shadow: 2px 3px  2px #A9A9A9; border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_sys/activity_sys')">SYS·博雅学堂</button>
   
  <button style="width: 260rpx;height: 130rpx; box-shadow: 2px 3px  2px #A9A9A9; border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_hh/activity_hh')">HH·佳片欣赏会</button>
-->
<!--
 <button class="button1" type='warn' plain @click="go('/pages/activity_sys/activity_sys')">
 <text class="tilte">SYS·博雅学堂</text></button>
 <button class="button1" type='warn' plain @click="go('/pages/activity_gic/activity_gic')">GIC·知行课堂</button>

 </view>
</scroll-view>

<scroll-view class="box1" scroll-x>
  <view class="box1con">
   
 <button style="width: 260rpx;height: 130rpx; box-shadow: 2px 3px  2px #A9A9A9; border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_gic/activity_gic')">GIC·知行课堂</button>
  <button style="width: 260rpx;height: 130rpx; box-shadow: 2px 3px  2px #A9A9A9; border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_bb/activity_bb')">BB·生日欢享会</button>

 </view>
</scroll-view>
-->
<view class="block">
  <view class="content-bar">
  <button class="button1"   @click="go('/pages/activity_sys/activity_sys')">
 <text class="title1">SYS·博雅学堂</text></button>

<button class="button1"  plain @click="go('/pages/activity_gic/activity_gic')">
<text class="title1">GIC·知行课堂</text></button>

<button class="button1"  plain @click="go('/pages/activity_hh/activity_hh')">
 <text class="title1"> HH·佳片欣赏会</text></button>

<button class="button1"  plain @click="go('/pages/activity_bb/activity_bb')">
  <text class="title1">BB·生日欢享会</text></button>

  </view>
</view>



  <view class="logo1">
    <img src="http://astc.syac.xyz/2022/02/07/a90e29bf36397.png" alt="标题2.png" title="标题2.png" />
 </view>

<view style="width:80px;margin:0 auto;" class="header"></view> 
<!-- 设置长度和居中这样配置style就行 --> 
<scroll-view class="box1" scroll-x>
  <view class="box1con">
   
 <button class="button2"  plain @click="go('/pages/activity1/activity1')">
 <text class="title2">自选1</text></button>
  <button class="button2"  plain @click="go('/pages/activity2/activity2')">
 <text class="title2">自选2</text></button>
  <button class="button2"  plain @click="go('/pages/activity3/activity3')">
 <text class="title2"> 自选3</text></button>

 </view>
</scroll-view>

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
      msg: 'activity page',
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
    const go = url => {
      Taro.navigateTo({ url })
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

//.header1{padding:0rpx 200rpx;width:600rpx;height:0;border:0px solid gray}
.header{
 // left: 29px;
//top: 198px;
//width: 317px;
margin-top: -154px;
line-height: 20px;
padding:0rpx 200rpx;width:600rpx;
//height: NaNpx;
opacity: 0.41;
border: 2rpx solid rgba(116, 139, 242, 100);
}
//.box1con{display:flex; justify-content: space-between;padding:10rpx 50rpx;}

//.index.box1{text-align:center;padding:10rpx 50rpx; }

.txt{ font-size:54rpx;}
.logo1 image{

  left: -9px;
top: 36px;
width: 380px;
height: 171px;
}
.button1{
  //left: 195px;
//top: 211px;
width: 152px;
height: 94px;
//line-height: 20px;
border-radius: 20px;
background-color:  rgba(248, 109, 117, 100);
color: rgba(245, 34, 45, 66);
box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
border: 1px solid rgba(187, 187, 187, 100);
margin-bottom:12px;
}
.button2{
 // left: 23px;
//top: 599px;
width: 96px;
height: 96px;
line-height: 20px;
border-radius: 20px 20px 20px 20px;
background-color: rgba(248, 109, 117, 100);
color: rgba(31, 177, 240, 100);
font-size: 14px;
text-align: center;
box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 100);
}
.block{
  display:flex;
  flex-direction: column;
}
.content-bar{
  padding:10rpx 50rpx;
  background-color:#F5222D 6600% ;
  display: flex;
  flex-wrap:wrap;
  padding-top:0px ;
}
.title1{
  color: white;
  font-size:14px;
  font-family: Arial;
  text-align: left,right,center,justify;
  //vertical-align:middle;  
}
.title2{
  color: white;
  font-size:16px;
  font-family: Arial;
  text-align: left,right,center,justify;
  vertical-align:middle;  
}
</style>
