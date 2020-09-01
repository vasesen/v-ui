<template>
  <div class="close-button" :class="{active:classes }">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>
<script lang="ts">
import { ref, computed } from 'vue'

export default {
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    const {isActive} = props
    console.log(1,isActive)
    const classes = computed((isActive)=>{
      return  isActive
    })

    return{classes}
  }
}
</script>
<style lang="scss" scoped>

.close-button{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background-color:#eeeeee;
  width:24px;
  height:24px;
  border-radius:4px;
  box-shadow: -2px -2px 6px 0px #fff9,
              -1px -1px 2px 0px #fff9,
              2px 2px 6px 0px #0002,
              1px 1px 2px 0px #0001,
              inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001,
              inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001;
  transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
  .line{
    background-color:lightcoral;
    box-shadow: 0px 0px 2px 0px rgba(240,128,128,0.3);
    width:20px;
    height:2px;
    border-radius:2px;
    margin:2px 0px 2px 0px;
    transition:margin 0.4s cubic-bezier(.79,.21,.06,.81),transform 0.4s cubic-bezier(.79,.21,.06,.81);
  }
    
  .line:nth-child(2){
    transform-origin:50% 50%;
  }
}

.active .close-button{
  box-shadow: 0px 0px 0px 0px #fff9,
              0px 0px 0px 0px #fff9,
              0px 0px 0px 0px #0001,
              0px 0px 0px 0px #0001,
              inset -7px -7px 20px 0px #fff9,
              inset -4px -4px 5px 0px #fff9,
              inset 7px 7px 20px 0px #0003,
              inset 4px 4px 5px 0px #0001;
  .line{
    margin:-2px;
  }
  .line:nth-child(1){
    transform:rotate(-45deg);
    
  }
  .line:nth-child(2){
    transform:scale(0)
  }
  .line:nth-child(3){
    transform:rotate(45deg)
  }
}
</style>