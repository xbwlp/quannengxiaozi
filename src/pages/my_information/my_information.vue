<template>
  <div>
    <image src="../../img/a.png" id="touxiang"></image>
    <p id="genghuan">更换头像</p>
    <p id="hengxian1"></p>
    <p id="xingming">姓名</p>
    <p id="xingminglan">lll</p>
    <p id="hengxian2"></p>
    <p id="shouji">注册手机</p>
    <p id="shoujilan">空</p>
    <p id="hengxian3"></p>
    <p id="xingbie">性别</p>
    <p id="xingbielan">kong</p>
    <p id="hengxian4"></p>
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
window.onload=function(){
}
</script>

<style lang="scss">
  #touxiang{
    position:absolute;
    margin-left: 137px;
    margin-top: 35px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  #genghuan{
    position:absolute;
    margin-left: 159px;
    margin-top: 145px;
    width: 56px;
    height: 20px;
    color: rgba(0, 114, 255, 100);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #hengxian1{
    position:absolute;
    margin-left: 0px;
    margin-top: 180px;
    width: 375px;
    height: NaNpx;
    border: 1px solid rgba(240, 240, 240, 100);
  }
  #xingming{
    position:absolute;
    margin-left: 10px;
    margin-top: 212px;
    width: 32px;
    height: 22px;
    color: rgba(16, 16, 16, 100);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #xingminglan{
    position:absolute;
    margin-left: 114px;
    margin-top: 213px;
    width: 42px;
    height: 20px;
    color: rgba(151, 151, 151, 100);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #hengxian2{
    position:absolute;
    margin-left: 10px;
    margin-top: 244px;
    width: 355px;
    height: NaNpx;
    border: 1px solid rgba(240, 240, 240, 100);
  }
  #shouji{
    position:absolute;
    margin-left: 10px;
    margin-top: 276px;
    width: 64px;
    height: 22px;
    color: rgba(16, 16, 16, 100);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #shoujilan{
    position:absolute;
    margin-left: 114px;
    margin-top: 277px;
    width: 77px;
    height: 20px;
    color: rgba(151, 151, 151, 100);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #hengxian3{
    position:absolute;
    margin-left: 10px;
    margin-top: 308px;
    width: 355px;
    height: NaNpx;
    border: 1px solid rgba(240, 240, 240, 100);
  }
  #xingbie{
    position:absolute;
    margin-left: 10px;
    margin-top: 340px;
    width: 32px;
    height: 22px;
    color: rgba(16, 16, 16, 100);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #xingbielan{
    position:absolute;
    margin-left: 114px;
    margin-top: 341px;
    width: 14px;
    height: 20px;
    color: rgba(151, 151, 151, 100);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  #hengxian4{
    position:absolute;
    margin-left: 10px;
    margin-top: 372px;
    width: 355px;
    height: NaNpx;
    border: 1px solid rgba(240, 240, 240, 100);
  }
</style>