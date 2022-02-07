<template>
  <h1>
  </h1>
  <div id="tupian">
    <img src="../../img/a.png">
  </div>
  <div id="xingming">
    <form>
      <input type = "text" required placeholder="请输入姓名" class = "input">
    </form>
  </div>
  <div id="xuehao">
    <form>
      <input type = "text" required placeholder="请输入学号" class = "input">
    </form>
  </div>
  <div id="shouji">
    <form>
      <input type = "text" required placeholder="请输入手机号" class = "input">
    </form>
  </div>
  <div id="mima">
    <form>  
      <input type = "text" required placeholder="请输入密码" class = "input">
    </form>
  </div>
  <div id="yanzheng">
    <form>
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
  font-size:16px;
  text-align: left;
  margin-top: 10px;
  margin-bottom:10px;
  margin-left:45px;
}
div{
  margin-left:23px;
  margin-right:12px;
  margin-bottom:13px;
  border: 1px solid black;
  border-radius: 3px;
}
#yanzheng{
  margin-right:192px;
}
#tupian{ 
  margin-top:58px;
  margin-left:96px;
  margin-right:97px;
  margin-bottom:41px;
}
</style>