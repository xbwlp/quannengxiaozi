<template>
  <div>
    <h1>注册</h1>
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