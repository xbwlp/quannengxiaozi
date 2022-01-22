<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)"
        >点我</nut-button
      >
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
      <button @click="go('/pages/activity_sys/activity_sys')">SYS</button>
  <button @click="go('/pages/activity_hh/activity_hh')">HH</button>
  <button @click="go('/pages/activity_gic/activity_gic')">GIC</button>
  <button @click="go('/pages/activity_bb/activity_bb')">BB</button>
  <h1>魅力自选</h1>
  <button @click="go('/pages/activity1/activity1')">自选1</button>
  <button @click="go('/pages/activity2/activity2')">自选2</button>
  <button @click="go('/pages/activity3/activity3')">自选3</button>
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
</style>
