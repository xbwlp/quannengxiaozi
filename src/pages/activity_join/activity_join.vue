<template>
<div>
  <h1>报名详情</h1>
    <li
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
