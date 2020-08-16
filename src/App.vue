<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import  router  from './router/router'
export default {
  name:'App',
  setup(){
    const screenWidth = document.documentElement.clientWidth
    const menuVisible = ref(screenWidth<=640 ? false : true)
    provide('menuVisible',menuVisible)
    router.afterEach(
      ()=> menuVisible.value = screenWidth<= 640 ===true ?  false : true
    )
  }
}
</script>>

