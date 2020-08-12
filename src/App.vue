<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
export default {
  name:'App',
  setup(){
    const screenWidth = document.documentElement.clientWidth
    const menuVisible = ref(screenWidth<=500 ? false : true)
    provide('menuVisible',menuVisible)
  }
}
</script>>

