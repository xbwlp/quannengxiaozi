<template>
  <h1>
  </h1>
  <div id="tupian">
  </div>
  <form>
    <div id="xuehao">
      <input type = "text" required placeholder="请输入学号" class = "input">
    </div>
    <div id="mima"> 
      <input type = "text" required placeholder="请输入密码" class = "input">
    </div>
   <button type="submit" id="zhuce">登录</button>
  </form>
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
  margin-left:15px;
}
div{
  margin-left:23px;
  margin-right:12px;
  margin-bottom:13px;
  border: 1px solid black;
  border-radius: 3px;
}
#tupian{ 
  border:none;
  margin-top:58px;
  margin-left:96px;
  margin-right:97px;
  margin-bottom:41px;
  height:164px;
  background-image: url("../../img/a.png") ;/*设置图片的地址*/
  background-size:182px 164px;    /*这里是图片的大小*/
  background-repeat:no-repeat ;  /*让图片不重复*/
  background-position: 0px 0px;
  padding-left: 33px; 
}
#zhuce{
  margin-top:38px;
  margin-left:122px;
  margin-right:121px;
  width: 132px;
  height: 51px;
  border-radius: 15px 15px 15px 15px;
  color: rgba(245, 34, 45, 100);
  font-size: 18px;
  text-align: center;
  font-family: Arial;
  border: 5px solid rgba(245, 34, 45, 100);
}
#xuehao{
  background-image: url("../../img/activity.png") ;/*设置图片的地址*/
  background-size:25px 25px;    /*这里是图片的大小*/
  background-repeat:no-repeat ;  /*让图片不重复*/
  background-position: 5px 5px;
  padding-left: 33px; 
}
#mima{
  background-image: url("../../img/activity.png") ;/*设置图片的地址*/
  background-size:25px 25px;    /*这里是图片的大小*/
  background-repeat:no-repeat ;  /*让图片不重复*/
  background-position: 5px 5px;
  padding-left: 33px; 
}
</style>