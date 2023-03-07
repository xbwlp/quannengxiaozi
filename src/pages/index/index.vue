<template>
  <div class="index">
    <div class="content">
      <h1 class="wbk">
       <p class="wb">自管会</p>
       
      </h1>
     
      <a href="https://mp.weixin.qq.com/s/v8quadnbYUrEtIfOmOFpzw">
      <swiper
        class="test-h"
        indicator-color="#999"
        indicator-active-color="#333"
        :circular="true"
        :indicator-dots="true"
        :autoplay="true"
      >
        <swiper-item>
          <img src="https://i0.hdslb.com/bfs/new_dyn/3a8990ffe2c0dd5ad6c74b0b5138135b77047564.jpg@1036w.webp" alt="" />
        </swiper-item>
        <swiper-item>
          <img src="https://tiebapic.baidu.com/forum/pic/item/8fa619d5ad6eddc4aa9b94327cdbb6fd53663349.jpg?tbpicau=2023-03-08-05_a491c85c656efea6e24d17aeebba58b2" alt="" />
        </swiper-item>
        <swiper-item>
          <img src="https://i0.hdslb.com/bfs/new_dyn/9a2fe0eea22daba7cc738f93feca6e7e77047564.jpg@1036w.webp" alt="" />
        </swiper-item>
      </swiper>
      </a>
    </div>
    <img class="logo" src="https://i0.hdslb.com/bfs/album/6037044c50149418b6da831afb23415fe10a42bc.png@518w.webp" alt="">
    <h2 class="g">
    </h2>
    <h3 class="hh">“一站式”<br>自我管理自我服务委员会<br>GZIC Student Commitee</h3>
    <h4 class="gywm">
       <h5 class="hxwbk">
         <h6 class="xwbk">关于我们</h6>
       </h5>
       <h4 class="circle1"></h4>
       <h4 class="zghjj1">自管会简介</h4>
       <h4 class="slwb1">示例文本</h4>
       <h4 class="circle2"></h4>
       <h4 class="zghjj2">全能小自简介</h4>
       <h4 class="slwb2">示例文本</h4>
       <h4 class="circle2"></h4>
       <h4 class="zghjj2">品牌活动简介</h4>
       <h4 class="slwb2">示例文本</h4>
    </h4>
    <h5 class="stick"></h5>
   
    <h5 class="sheqvtongzhi">
    <img class="sheqvtongzhidetupian" src="https://i0.hdslb.com/bfs/album/61eb113432f147347ca64e200f3ca5b4a6eca58d.png@518w.webp" alt="">
    </h5>
    <h5 class="sqtz">社区通知</h5>
    <img class="xyd" src="https://i0.hdslb.com/bfs/album/4a26c83f6fd0fbc6f716bd0d8dce3cd15e4797d2.png@518w.webp" alt="">
    <h6 class="xqsw">校区事务</h6>
    
    <h6 class="xgz">  
    <h4 class="fjtz">放假通知，华南理工这样放假</h4>
    <h5 class="sticks"></h5>
    </h6>
    
    
     <img class="xyd2" src="https://i0.hdslb.com/bfs/album/7b96b4598234bb37b997c3cdedc8023ed820ed5f.png@518w.webp" alt="">
    <h5 class="xqsw2">书院事务</h5>
    <h5 class="xgz2">
    <h5 class="fjtz2">放假通知，华南理工这样放假</h5>
    </h5>
    <h5 class="sticks2"></h5>
     <img class="xyd3" src="https://i0.hdslb.com/bfs/album/be67d4733cfdba18722c9d0906d10be20b0afd0c.png@518w.webp" alt="">
    <h5 class="xqsw2">活动事务</h5>
    <h5 class="xgz2">
     <h6 class="fjtz3">放假通知，华南理工这样放假</h6>
     </h5>
    <h5 class="sticks2"></h5>
  
    
   
    <img class="img2" src="https://i0.hdslb.com/bfs/album/99e58e196186a0b61f817fbb7ee729ea5abe6183.jpg@518w.webp" alt="">
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

import { Swiper, SwiperItem } from '@tarojs/components'
export default {
  name: 'Index',
  components: {
    Swiper,
    SwiperItem
  },
  setup () {
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
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
    const page = ref(2)
    return {
      page,
      ...toRefs(state),
      handleClick
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
.content {
  height: 300px;
}
.bgc {
  background-color: #fff;
}
swiper{
  left: 0px;
  margin-top: 5%;
  padding-top: 5%;
  width: 375px;
  height: 280px;
  line-height: 20px;
  border-radius: 17px 17px 17px 17px;
  background-color: rgba(242, 66, 66, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  font-family: Arial;
}
.wbk{
  left: 0px;
  top: 44px;
  width: 375px;
  height: 44px;
  background-color: rgba(242, 66, 66, 100);
  color: rgba(238, 232, 232, 100);
  font-size: 18px;
  text-align: center;
  font-family: Microsoft Yahei;
}
.wb{
  font-size: 18px;
  text-align: center;
  font-family: Microsoft Yahei;
  line-height: 40px;
}
.logo{
  margin-left: -61%;
  margin-top: 18%;
  width: 93px;
  height: 112px;
  background-color: rgba(255, 255, 255, 100);
}
.g{
  margin-left: 22%;
  margin-top: -22%;
  width: 102px;
  height: NaNpx;
  border: 3px solid rgba(245, 34, 45, 100);
  background-color: rgba(245, 34, 45, 100);
  transform: rotate(-90deg);
}
.hh{
  margin-left: 144px;
  margin-top: -7%;
  width: 225px;
  height: 74px;
  color: rgba(245, 34, 45, 100);
  font-size: 20px;
  text-align: center;
  font-family: ZKGaoDuanHei-regular;
}
.gywm{
  left: 0px;
  margin-top: 13%;
  width: 357px;
  height: 571px;
  line-height: 20px;
  border-radius: 15px 15px 0px 0px;
  text-align: center;
  border: 9px solid rgba(245, 34, 45, 100);
}
.hxwbk{
  margin-left: 17.5%;
  margin-top: 5%;
  padding-top: 5%;
  width: 224px;
  height: 34px;
  line-height: 29px;
  border-radius: 20px 20px 20px 20px;
  background-color: rgba(245, 34, 45, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 20px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 100);
}
.xwbk{
   color: white;
   margin-top:-3%;
   font-size: 20px;
   text-align: center;
   font-family: Arial;
   border: 1px solid rgba(187, 187, 187, 100);
}
.circle1{
  margin-left: 7%;
  margin-top: 10%;
  width: 24px;
  height: 24px;
  line-height: 20px;
  background-color: rgba(245, 34, 45, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
  border-radius:50%;
}
.zghjj1{
  margin-left: 20%;
  margin-top: -7%;
  width: 120px;
  height: 26px;
  color: red;
  font-size: 18px;
  text-align: left;
  font-family: PingFangSC-semiBold;
}
.slwb1{
   margin-left: 20%;
   margin-top: 5%;
   width: 90px;
   height: 26px;
   color: rgba(245, 34, 45, 100);
   font-size: 16px;
   text-align: left;
   font-family: PingFangSC-semiBold;
}
.circle2{
  margin-left: 7%;
  margin-top: 30%;
  width: 24px;
  height: 24px;
  line-height: 20px;
  background-color: rgba(245, 34, 45, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
  border-radius:50%;
}
.zghjj2{
  margin-left: 20%;
  margin-top: -7%;
  width: 120px;
  height: 26px;
  color: red;
  font-size: 18px;
  text-align: left;
  font-family: PingFangSC-semiBold;
}
.slwb2{
   margin-left: 20%;
   margin-top: 5%;
   width: 90px;
   height: 26px;
   color: rgba(245, 34, 45, 100);
   font-size: 16px;
   text-align: left;
   font-family: PingFangSC-semiBold;
}
.stick{
  margin-left: 28%;
  margin-top: 10%;
  width: 150px;
  height: NaNpx;
  border: 5px solid rgba(245, 34, 45, 100);
  background-color: rgba(245, 34, 45, 100);
}
.sheqvtongzhi{
  margin-left: 27%;
  margin-top: 10%;
  
  left: 102px;
  top: 1266px; 
  width: 166px;
  height: 50px; 
  line-height: 29px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(245, 34, 45, 100);
  color: rgba(251, 251, 251, 100);
  font-size: 20px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 100);
 }
 .sqtz{
   margin-top: -11%;
   font-size: 20px;
   text-align: center;
   font-family: Arial;
   color: white;
 }
 .xyd{
   margin-left:-70%;
   margin-top: 10%;
   width: 48px;
   height: 48px;
 }
 .xqsw{
   margin-left: 25%;
   margin-top: -7%;
   width: 64px;
   height: 22px;
   color: rgba(245, 34, 45, 100);
   font-size: 16px;
   text-align: left;
   font-family: PingFangSC-regular;
 }
 .xgz{
   margin-left: 7%;
   margin-top: 5%;
   width: 308px;
   height: 122px;
   line-height: 20px;
   border-radius: 5px 5px 5px 5px;
   text-align: center;
   box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
   border: 3px solid rgba(245, 34, 45, 100);
 }
 .sticks{
   margin-left: 25%;
   margin-top: -8%;
   width: 66px;
   height: NaNpx;
   border: 4px solid rgba(245, 34, 45, 100);
   transform: rotate(-90deg);
   background-color: rgba(245, 34, 45, 100);
 }
 .xyd2{
   margin-left: -70%;
   margin-top: 30%;
   width: 37px;
   height: 37px;
 }
 .xqsw2{
   margin-left: 25%;
   margin-top: -7%;
   width: 64px;
   height: 22px;
   color: rgba(245, 34, 45, 100);
   font-size: 16px;
   text-align: left;
   font-family: PingFangSC-regular;
 }
 .xgz2{
   margin-left: 7%;
   margin-top: 5%;
   width: 308px;
   height: 122px;
   line-height: 20px;
   border-radius: 5px 5px 5px 5px;
   text-align: center;
   box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
   border: 3px solid rgba(245, 34, 45, 100);
 }
 .sticks2{
   margin-left: 25%;
   margin-top: -18%;
   width: 66px;
   height: NaNpx;
   border: 4px solid rgba(245, 34, 45, 100);
   transform: rotate(-90deg);
   background-color: rgba(245, 34, 45, 100);
 }
 .fjtz{
   margin-left: 45%;
   margin-top: 13%;
   width: 138px;
   height: 37px;
   color: rgba(16, 16, 16, 100);
   font-size: 14px;
   text-align: left;
   font-family: PingFangSC-regular;
 }
 .fjtz2{
   margin-left: 45%;
   margin-top: 13%;
   width: 138px;
   height: 37px;
   color: rgba(16, 16, 16, 100);
   font-size: 14px;
   text-align: left;
   font-family: PingFangSC-regular;
 }
 .fjtz3{
   margin-left: 45%;
   margin-top: 13%;
   width: 138px;
   height: 37px;
   color: rgba(16, 16, 16, 100);
   font-size: 14px;
   text-align: left;
   font-family: PingFangSC-regular;
 }
 .img2{
  margin-left: 0%;
  margin-top: 30%;
  width: 299px;
  height: 448px;
 }
.sheqvtongzhidetupian{
  margin-left: -70%;
  top: 1270px;
  width: 42px;
  height: 42px;
}
.xyd3{
  margin-left: -70%;
  margin-top: 30%;
  width: 39px;
  height: 39px;
}
.hsbk1{
  left: 0px;
  margin-top: 10%;
  width: 375px;
  height: 423px;
  line-height: 20px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>