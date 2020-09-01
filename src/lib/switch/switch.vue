<template>
  <button 
    class="v-switch"
    @click="toggle" 
    :disabled = "disabled"
    :class="{checked:value}">
    <span :class="{childChecked:value}"></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name:'v-switch',
  props:{
    value:{
      type:Boolean,
      default:true
    },
    disabled:{
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
<style lang="scss">
$h: 22px ;
$h2: $h - 4px;
.v-switch{
  padding: 1px;
  cursor: pointer;
  height: $h;
  width: $h*2;
  border-radius: $h /2 ;
  margin:4px;
  background: #cecfde;
  box-shadow:  1px 1px 2px #a9aab6,
    1px 1px 2px #f3f4ff;
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
    box-shadow: inset 1px -1px 2px #a9aab6,
    inset -1px 1px 2px #f3f4ff;
}
.v-switch.checked>span {
  left: calc(100% - #{$h2} - 4px);
}
.checked{
  box-shadow: inset  1px 1px 2px #a9aab6,
  inset  1px 1px 2px #f3f4ff;
  height: $h + 2px;
  top:2px;
}
.childChecked{
  box-shadow: inset -1px 1px 2px #a9aab6,
  inset 1px -1px 2px #f3f4ff;
  height:$h - 1px;
  width: $h - 1px;
}
button:focus {
  outline: none;
}
</style>