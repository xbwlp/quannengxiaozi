<template>
  <div class="index">
    <div>
      <div class="content">
        <div class="all tras" style="left: 0">
          <div class="shopshow"><img src="img/activity-current.png" alt="" /></div>
          <div class="shopshow"><img src="img/activity.png" alt="" /></div>
          <div class="shopshow"><img src="img/home-current.png" alt="" /></div>
          <div class="shopshow"><img src="img/me-current.png" alt="" /></div>
          <div class="shopshow"><img src="img/me.png" alt="" /></div>
          <div class="shopshow"><img src="img/rights-current.png" alt="" /></div>
          <div class="shopshow"><img src="img/activity-current.png" alt="" /></div>
        </div>
        <div class="circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="btn">
          <div></div>
          <div>></div>
        </div>
      </div>
    </div>
    {{ msg }}
    <div class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)"
        >点我</nut-button
      >
    </div>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// var all = document.getElementsByClassName('all')[0]
// var shopshow = document.getElementsByClassName('shopshow')
// var content = document.getElementsByClassName('content')[0]
// var count = 0
// var img = document.getElementsByTagName('img')[0]
// var length = parseInt(window.getComputedStyle(img).width)
// var speed = 1000
// var circle = document.getElementsByClassName('circle')[0].children
// var index = 0
// var timer = null
// var btn = document.getElementsByClassName('btn')[0].children

// function move () {
//   all.className = 'all tras'
//   count += 1
//   all.style.left = -(count * length) + 'px'

//   setTimeout(function () {
//     if (count >= shopshow.length - 1) {
//       all.className = 'all'
//       count = 0
//       all.style.left = '0px'
//     }

//     index = count
//     addcolor()
//   }, 500)
// }
export default {
  name: 'Index',

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

    return {
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
* {
  padding: 0;
  margin: 0;
}

.content {
  width: 400px;
  height: 300px;
  margin: auto;
  border: solid 1px gray;
  overflow: hidden;
  position: relative;
}

.all {
  width: 2800px;
  height: 300px;
  position: absolute;
}

.shopshow {
  width: 400px;
  height: 300px;
  float: left;
}

img {
  width: 100%;
  height: 100%;
}

.tras {
  transition: left 0.5s ease-in;
}

.circle {
  width: 120px;
  height: 12px;
  font-size: 0;
  line-height: 12px;
  position: absolute;
  bottom: 20px;
  left: 140px;
}

.circle > div {
  border: solid 2px #fff;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0 4px;
}

.bgc {
  background-color: #fff;
}

.btn {
  position: absolute;
  width: 100%;
  height: 30px;
  top: 125px;
  left: 0;
}

.btn > div:nth-child(1) {
  width: 30px;
  height: 30px;
  background-color: #e2e2e2;
  border-radius: 0 50% 50% 0;
  text-align: center;
  line-height: 30px;
  float: left;
  font-size: 18px;
  color: #a89c9c;
}

.btn > div:nth-child(2) {
  width: 30px;
  height: 30px;
  background-color: #e2e2e2;
  border-radius: 50% 0 0 50%;
  text-align: center;
  line-height: 30px;
  float: right;
  font-size: 18px;
  color: #a89c9c;
}
</style>
