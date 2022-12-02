<!--
 * @Author: renjintao jintao2001@126.com
 * @Date: 2022-11-03 16:25:51
 * @LastEditors: renjintao jintao2001@126.com
 * @LastEditTime: 2022-11-10 11:33:24
 * @FilePath: \vue3demo3\src\views\child.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>msg:{{msg}}</div>
    <div>msg2:{{msg2}}</div>
    <slot name="aaa"></slot>
    <button @click="fn">提交</button>
    {{color}}
</template>
<script lang="ts">
    import { defineComponent,inject} from 'vue'
    export default defineComponent({
        name: 'Child',
        props: ["msg"],
        emit: ["onemit"],
        setup(props, {
            attrs,
            slots,
            emit
        }) {
            console.log(props, {
                attrs,
                slots,
                emit
            });
            const fn=()=>{
                emit("onemit",123)
            }
            const color=inject("color")
            return {
                msg2: attrs.msg2,
                fn,
                color
            }
        }
    })
</script>