<template>
<div>
  <h1>自选2</h1>
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
<style lang="less" scoped>
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.85rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      text-align: center;
      // padding: 7px 0;
      border-top: 1px solid #eaeaea;
      font-size: 0.1rem;
      img {
        width: 0.2rem;
        height: 0.2rem;
        margin: 5px auto 0px;
      }
      &.active {
        color: #ff5621;
        font-weight: bold;
      }
    }
  }
}
</style>