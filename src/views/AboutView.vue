<!--
 * @Author: renjintao jintao2001@126.com
 * @Date: 2022-11-02 16:58:46
 * @LastEditors: renjintao jintao2001@126.com
 * @LastEditTime: 2022-12-01 17:32:55
 * @FilePath: \vue3demo3\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Child msg="hello word" msg2="hello vue3" @onemit="getfn">
    <template #aaa>我是插槽</template>
  </Child>
</template>
<script lang="ts">
  import {
    ref,
    provide
  } from 'vue';
  ////// @ts-ignore
  import Child from './Child.vue';
  export default {
    components: {
      Child
    },
    setup() {
      const getfn = (val:any) => {
        console.log(val)
      }
      const color = ref("red");
      provide("color", color)
      return {
        getfn,
        color
      }
    }
  }
</script>