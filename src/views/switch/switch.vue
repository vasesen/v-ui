<template>
  <button 
    @click="toggle" 
    :class="{checked:value}">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props:{
    value:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context) {
    const toggle = () =>{
      //context.emit()
    }
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  cursor: pointer;
  height: $h;
  width: $h * 2;
  border: none;
  background: rgb(121, 150, 101);
  border-radius: $h / 2;
  outline: none;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
   transition: left 250ms;
}
button.checked>span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>