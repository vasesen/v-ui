<template>
  <div>
    <v-switch 
      v-model:value="value" />
    <v-switch 
       />
  </div>
</template>
<script lang='ts'>
import vSwitch from '../../lib/switch/switch.vue'
import { ref } from 'vue'
export default {
  components:{vSwitch},
  setup(){
    const value = ref(false)
    const disabled = ref(false)
    return {value,disabled}
  }
}
</script>