<template>
    <button 
      class="v-button"
      :class="classes"
      
      v-bind ="$attrs" >
      <slot />
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name:'v-button',
  inheritAttrs:false, //继承属性false,取消默认绑定
  props:{
    type:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default:"nomarl"
    }
  },
  setup(props,context){
    const {type,size}= props
    const  classes = computed(()=>{
      return { 
        [`v-type-${type}`]:type,
        [`v-size-${size}`]:size
      }
    })
    return {type}
  }
}
</script>
<style lang="scss">
$h:32px;
$radius:4px;
$theme:#cecfde;
.v-button{
  color: #ebebf1;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  height: $h;
  padding:0 2em;
  border-radius: $radius;
  border:none;
  background: $theme;
  box-shadow:  2px 2px 6px #a9aab6,
              -2px -2px 6px #f3f4ff;

  &+& { 
    margin-left: 8px;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner{
    border:0
  }

}

// .v-type-button{
//   &.v-size-big{

//   }
//   &.v-size-noraml{
    
//   }
//   &.v-size-samll{
    
//   }
// }


// .checked {
//   box-shadow: inset 2px 2px 6px #a9aab6,
//     inset -2px -2px 6px #f3f4ff;
// }
</style>