<template>
<div>
  <h1 class="header1">博雅学堂| 粤剧第一课</h1>
  <img class="logo" src="https://i0.hdslb.com/bfs/album/edd48c060074066c8d30c847052b091c869a3cb5.jpg@.webp" alt="1.">
  <h3 class="header3">活动时间：1月1日 上午8:00-11:30</h3>
  <img class="logo" src="https://i0.hdslb.com/bfs/album/ac6762e4a063b890ad8c56de4a9c879c81308a08.jpg@.webp" alt="2.">
  <h3 class="header3">活动地点：D5d 201</h3>
  <img class="logo" src="https://i0.hdslb.com/bfs/album/1304e90f969c07a4e5adbd563156675b20abd4ce.jpg@.webp" alt="3.">
  <h3 class="header3">报名时间：12月31日中午12时至晚6时</h3>
  <img class="logo" src="https://i0.hdslb.com/bfs/album/e97ae444015e9d04a1bf4ee1a7dacdabcc13e81b.jpg@.webp" alt="4.">
  <h3 class="header3">主讲嘉宾：xxx</h3>
  <h2 class="header2">活动介绍</h2>
  <h4 class="greyline"></h4>
  <div>
  <h3 class="para_title">粤剧第一课：走进粤剧</h3>
  <p class="para">粤剧于2009年列入人类非物质文化遗产代表作名录，如今，粤剧入选“世遗”已步入第二个十年。11月29日又将迎来一年一度的“粤剧日”，从粤剧节期间的多项活动以及多方反馈来看，新时期粤剧的传承与发展始终是人们关注的话题。相关部门和业界也在努力探索，希望引领人们一起走进粤剧的百花深处。</p>
  <img class="pic" src="https://img1.baidu.com/it/u=1568875690,243587937&fm=253&fmt=auto&app=138&f=JPEG?w=742&h=500">
  </div>
  <h2 class="header2">活动评价</h2>
  <h4 class="greyline"></h4>
  <div>
    <img class="profile_photo" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F25%2F20200625025317_JUSUj.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646640037&t=f4c67e6ea720424b3e5868d5ad711fc7">
    <h3 class="profile_name">江承儒</h3>
    <img class="ranking" src="https://img0.baidu.com/it/u=2266172358,1984986812&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500">
    <p class="comment">好，很好，非常好，明天会更好</p>
  </div>
    <li class="clickbutton"
  @click="go('/pages/activity_join_form/activity_join_form')">立即报名</li>
</div>
</template>
 
<script>
import {ref} from 'vue'
import Taro from '@tarojs/taro'

export default {
  setup(props, context) {
    // data
    // method
    const usedUrl ="https://mp.weixin.qq.com/s/v8quadnbYUrEtIfOmOFpzw"
    const go = (url) => {
      Taro.navigateTo({url})
    }

    return {
      go,
    }
  }
}
</script>
<style>
.logo{
margin-left: 5%;
margin-top: 5%;
width: 20px;
height: 20px;
line-height: 20px;
text-align: center;
}
.header1{
margin-left: 5%;
top: 87px;
width: 350px;
height: 36px;
color: rgba(16, 16, 16, 100);
font-size: 28px;
text-align: left;
font-family: PMZDBiaoTi-regular;
}
.header2{
margin-left: 5%;
top: 453px;
width: 80px;
height: 30px;
color: rgba(16, 16, 16, 100);
font-size: 20px;
text-align: left;
font-family: SourceHanSansSC-black;
}
.header3{
margin-left: 10%;
margin-top: -5%;
width: 300px;
height: 24px;
color: rgba(16, 16, 16, 100);
font-size: 14px;
text-align: left;
font-family: PingFangSC-regular;
}
.para_title{
  margin-left: 5%;
top: 142px;
width: 300px;
height: 28px;
color: rgba(16, 16, 16, 100);
font-size: 18px;
text-align: left;
font-family: PingFangSC-regular;
}
.para{
  margin-left: 5%;
top: 142px;
width: 300px;
height: 24px;
color: rgba(16, 16, 16, 100);
font-size: 14px;
text-align: left;
font-family: PingFangSC-regular;
}
.greyline{
  margin-left: 5%;
top: 688px;
width: 313px;
height: NaNpx;
border: 1px solid rgba(187, 187, 187, 100);
}
.clickbutton{
margin-left: 30%;
top: 901px;
padding-top: 5%;
width: 125px;
height: 50px;
line-height: 29px;
border-radius: 20px 20px 20px 20px;
color: rgba(16, 16, 16, 100);
font-size: 20px;
text-align: center;
box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
font-family: Arial;
border: 4px solid rgba(245, 34, 45, 100);
}
.pic{
margin-left: 5%;
margin-top: 28%;
width: 295px;
height: 169px;
}
.profile_photo{
margin-left: 3%;
margin-top: 3%;
width: 35px;
height: 39px;
line-height: 20px;
text-align: center;
border: 1px solid rgba(187, 187, 187, 100);
}
.profile_name{
margin-left: 15%;
margin-top: -12%;
width: 42px;
height: 24px;
color: rgba(16, 16, 16, 100);
font-size: 14px;
text-align: left;
font-family: PingFangSC-regular;
}
.ranking{
margin-left: 15%;
margin-top: -3%;
width: 21px;
height: 16px;
line-height: 20px;
background-color: rgba(238, 145, 150, 100);
text-align: center;
border: 1px solid rgba(187, 187, 187, 100);
}
.comment{
margin-left: 5%;
margin-top: 3%;
width: 200px;
height: 24px;
color: rgba(16, 16, 16, 100);
font-size: 14px;
text-align: left;
font-family: PingFangSC-regular;
}
</style>