<template>
  <div>
    <h1>注册</h1>
    <form>
      <input type = "text" required placeholder="请输入姓名" class = "input">
      <input type = "text" required placeholder="请输入学号" class = "input">
      <input type = "text" required placeholder="请输入手机号" class = "input">
      <input type = "text" required placeholder="请输入密码" class = "input">
      <input type = "text" required placeholder="请输入验证码" class = "input">
      <button type = "submit">注册</button>
    </form>
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

    return {
      go,
    }
  }
}
</script>

<style lang="scss">
.input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
}
</style>