<template>
<div>
  <h1 class="header1">填写报名信息</h1>
  <form action="#">
    <h2 class="header2">1.姓名</h2>
    <input class="bracket" type="text" placeholder="请在此填入您的姓名" required>
  <view class="page-body">
    <view class="page-section">
      <text class="header2">2.学院</text>
      <view>
        <picker mode="selector" :range="selector" @change="onChange">
          <view class="picker">
            请在此选择您的学院：{{selectorChecked}}
          </view>
        </picker>
      </view>
    </view>
  </view>
    <h2 class="header2">3.学号</h2>
    <input class="bracket" type="text" placeholder="请在此填入您的学号" required>
    <h2 class="header2">4.专业及班级</h2>
    <input class="bracket" type="text" placeholder="请在此填入您的专业及班级" required>
    <h2 class="header2">5.联系方式</h2>
    <input class="bracket" type="text" placeholder="请在此填入您的电话号码" required>
    <h2 class="header2">6.请再次确认联系方式</h2>
    <input class="bracket" type="text" placeholder="请在此重新填入您的电话号码" required>
    <h2 class="header2">7.身份证号码</h2>
    <input class="bracket" type="text" placeholder="请在此填入您的身份证号码" required>
    <button class="button" type="submit">提交</button>
  </form>
</div>
</template>
 
<script>
import {ref} from 'vue'
import Taro from '@tarojs/taro'

export default {
    data() {
      return {
        selector: ['铭诚书院', '峻德书院', '生物医学科学与工程学院（研究生）', '吴贤铭智能工程学院（研究生）', '分子科学与工程学院（研究生）', '微电子学院（研究生）', '材料科学与工程学院', '工商管理学院', '公共管理学院', '外国语学院', '马克思主义学院', '计算机科学与工程学院', '软件学院', '环境与能源学院', '生物科学与与工程学院', '新闻与传播学院', '设计学院', '法学院（知识产权学院）', '经济与金融学院', '电子商务系', '旅游管理系', '中澳班', '医学院', '其他学院'],
      }
    },
    methods: {
      onChange: function(e) {
        this.selectorChecked = this.selector[e.detail.value]
      }
    }
  }
</script>
<style lang="scss">
.header1{
margin-left: 5%;
top: 117px;
width: 200px;
height: 30px;
color: rgba(16, 16, 16, 100);
font-size: 20px;
text-align: left;
font-family: PMZDBiaoTi-regular;
}
.bracket{
margin-left: 5%;
top: 271px;
width: 241px;
height: 28px;
line-height: 20px;
border-radius: 3px;
background-color: rgba(255, 255, 255, 100);
color: rgba(193, 194, 197, 100);
font-size: 14px;
text-align: left;
font-family: Arial;
border: 1px solid rgba(220, 224, 231, 100);
}
.button{
margin-left: 30%;
margin-top: 10%;
padding-top: 3%;
width: 136px;
height: 48px;
line-height: 26px;
border-radius: 3px;
background-color: rgba(251, 104, 104, 100);
color: rgba(255, 255, 255, 100);
font-size: 18px;
text-align: center;
font-family: Arial;
}
.header2{
margin-left: 5%;
top: 392px;
width: 150px;
height: 20px;
color: rgba(16, 16, 16, 100);
font-size: 14px;
text-align: left;
font-family: SourceHanSansSC-regular;
}
.picker{
margin-left: 5%;
top: 340px;
width: 241px;
height: 31px;
background-color: rgba(255, 255, 255, 100);
color: rgba(65, 80, 88, 100);
font-size: 14px;
text-align: left;
font-family: Microsoft Yahei;
}
</style>
