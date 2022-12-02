<!--
 * @Author: renjintao jintao2001@126.com
 * @Date: 2022-11-02 16:58:46
 * @LastEditors: renjintao jintao2001@126.com
 * @LastEditTime: 2022-12-01 10:43:53
 * @FilePath: \vue3demo3\vue3-demo\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   首页
   <p>a:{{a}}</p>
   <p>b:{{b}}</p>
   <p>boo:{{boo}}</p>
   <p>obj:{{obj}}</p>
   <button @click="update">submit</button>
   <div>firstName:<input type="text" v-model="firstName"></div>
   <div>lastName:<input type="text" v-model="lastName"></div>
    <div>fullName:{{fullName}}</div>
    <button @click="updateName">updateName</button>
     <div>watchstr:<input type="text" v-model="str"></div>
</template>

<script lang="ts">
import { defineComponent, ref,reactive,toRefs,computed,watch,watchEffect} from 'vue';


export default defineComponent({
  name: 'HomeView',
  setup(){
  //   let a=ref(1)
  //   let b=ref(2)
  //   let bol=ref(true);
  //   const obj=ref({"a":123});
  //  const submit=()=>{
  //     a.value++;
  //     b.value++;
  //     bol.value=!bol.value;
  //   }
  //   return {
  //     a,
  //     b,
  //     bol,
  //     obj,
  //     submit
  //   }

  const state=reactive(
    {
      a:1,
      b:2,
      boo:false,
      obj:{
        a:123
      }
    })
  const update=()=>{
    state.a++
    state.b++
    state.boo=!state.boo
    state.obj.a++;
  }

  //修改属性
  let firstName=ref(1235)
  let lastName=ref(2356)

  const user= reactive({
    firstName:"Jorry",
    lastName:"Ron"
  })
  // const fullName=computed(()=>{
  //  return user.lastName+user.firstName
  // })
 const fullName=computed({
   get()
   {
     return user.lastName+user.firstName
   },
   set(value:string)
   {
     const name=value.split(" ");
     user.firstName=name[1]
     user.lastName=name[0]
   }
 })
  const updateName=()=>{
    fullName.value="张 天"
  }
  //监听 ref类型
  const str=ref("123"); 
//   watch(str,(newValue,oldValue)=>{
//     console.log(newValue,oldValue);
    
//   })

// //监听 obj
//    watch(()=>user.firstName,(newValue,oldValue)=>{
//     console.log(newValue,oldValue);
    
//   })

  //监听 array
  //  watch([str,()=>user.firstName],(newValue,oldValue)=>{
  //   console.log(newValue,oldValue);
    
  // })

  watchEffect(()=>{
    fullName.value=user.lastName+" "+user.lastName
  })


  return{
    ...toRefs(state),
    update,
    ...toRefs(user),
    fullName,
    updateName,
    str
  }
  }
});
</script>
