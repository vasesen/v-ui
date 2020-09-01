<template>
  <div class="topNav">
    <!-- <span 
      @click="toggleMenu"
      class="toggleMenu">
      </span> -->
      <close-button  @click="toggleMenu"  v-model:isActive="isActive"   />
    <div class="logo" >
      V-UI</div>
    <ul class="menu">
      <li>主页</li>
      <li>文档</li>
    </ul>
    
    <div class="language">
      <select name="语言" id="">
        <option value="1">中文</option>
        <option value="2">ENGLISH</option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import CloseButton from './closeButton.vue'
import { inject, Ref, ref } from 'vue'
export default {
  components:{CloseButton}, 
  setup(){
    let isActive = ref(false)
    const menuVisible = inject<Ref<Boolean>>('menuVisible')
    const toggleMenu = ()=> {
      menuVisible.value = !menuVisible.value
      isActive.value = !menuVisible.value
    }
    return{toggleMenu,isActive}
  }
}
</script>
<style lang="scss" scoped>
.topNav{
  background: #799665;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  .logo {
    max-width: 6em;
    margin-right: auto;
  }
  .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    li{
      margin:0 1em;
      cursor: pointer;
      :hover{
        color:rgb(245,135,175,1)
      }
    }
  }
  .toggleMenu{
    
    width:24px;
    height: 24px;
    background: red;
    display: none;
    // position: relative;
    // left: 16px;
    // top: 50%;
    // transform:translateY(-50%);
  }
  @media (max-width: 500px) {
    >.menu{
      display: none
    }
    .logo{
      margin:0 auto
    }
    .toggleMenu{
      display: inline-block;
    }
  }
}
</style>