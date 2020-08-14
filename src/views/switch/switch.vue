<template>
  <button 
    @click="toggle" 
    :disabled = "isDisabled"
    :class="{checked:value}">
    <span :class="{childChecked:value}"></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props:{
    value:{
      type:Boolean,
      default:true
    },
    isDisabled:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context) {
    const toggle = () =>{
        context.emit('update:value',!props.value)
    }
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px ;
$h2: $h - 4px;
button{
  cursor: pointer;
  height: $h;
  width: $h*2;
  border-radius: $h /2 ;
  background: #cecfde;
  box-shadow:  1px 1px 2px #afb0bd,
    1px 1px 2px #edeeff;
  border:none;
  position: relative;
}
span{
    position: absolute;
    top: 1px;
    left: 1px;
    height: $h;
    width: $h;
    background: #cecfde;
    border-radius: $h2 / 2;
    transition: left 250ms;
    box-shadow: inset 1px -1px 2px #afb0bd,
    inset -1px 1px 2px #edeeff;
}
button.checked>span {
  left: calc(100% - #{$h2} - 4px);
}
.checked{
  box-shadow: inset  1px 1px 2px #afb0bd,
  inset  1px 1px 2px #edeeff;
  height: $h + 2px;
}
.childChecked{
  box-shadow: inset -1px 1px 2px #afb0bd,
  inset 1px -1px 2px #edeeff;
  height:$h - 1px;
  width: $h - 1px;
}
button:focus {
  outline: none;
}
</style>