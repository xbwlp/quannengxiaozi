<template>
  <view class="index">
    <view>
      <img src="" alt="" />
  </view>
    <div>
   
    <view class=h2>我预约的活动</view>
    <view class=h2>我的评价</view>

  <view class='button'>
  <button style="width: 220rpx;height: 130rpx;  border-radius: 50rpx;" 
  size='mini'  plain@click="go('/pages/my_login/my_login')">点击登录</button>

    <button @click="go('/pages/my_login/my_login')">点击登录</button>
    <button @click="go('/pages/my_register/my_register')">点击注册</button>
  </view>
  
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
.h2{display:flex;color:red;justify-content:start;}
.button::after{border:1rpx solid; color:red;}
</style>
