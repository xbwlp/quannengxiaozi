<template>
  <view class="index">
    <view class="header">
      <img src="" alt="" />
      
    </view>
<view class="txt">品牌活动</view>
<view style="width:80px;margin:0 auto;" class="header"></view>
<!-- 设置长度和居中这样配置style就行 -->
<scroll-view class="box1" scroll-x>
  <view class="box1con">
   
 <button
 style="width: 260rpx;height: 130rpx;  border-radius: 50rpx;box-shadow: 1px 2px  1px #A9A9A9;"
  size='mini' type='warn' plain @click="go('/pages/activity_sys/activity_sys')">SYS·博雅学堂</button>
  <!-- 我在这里写了一个阴影box-shadow,不太清楚你在问题里说的按钮边框具体指哪些，文字位置设置就是text-align,我看你109行不是会写了吗 -->
  <button style="width: 260rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_hh/activity_hh')">HH·佳片欣赏会</button>
   
 </view>
</scroll-view>

<scroll-view class="box1" scroll-x>
  <view class="box1con">
   
 <button style="width: 260rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_gic/activity_gic')">GIC·知行课堂</button>
  <button style="width: 260rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity_bb/activity_bb')">BB·生日欢享会</button>

 </view>
</scroll-view>





<view class="txt" >魅力自选</view>

<view class="header"></view>
<scroll-view class="box1" scroll-x>
  <view class="box1con">
   
 <button style="width: 200rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity1/activity1')">自选1</button>
  <button style="width: 200rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity2/activity2')">自选2</button>
  <button style="width: 200rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini' type='warn' plain @click="go('/pages/activity3/activity3')">自选3</button>

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

.header{padding:0rpx 200rpx;width:600rpx;height:0;border:1px solid gray;}

.box1con{display:flex; justify-content: space-between;padding:10rpx 50rpx;}

.index.box1{text-align:center;padding:10rpx 50rpx; }

.txt{ font-size:54rpx;}

</style>
