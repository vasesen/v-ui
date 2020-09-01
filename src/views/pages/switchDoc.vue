<template>
  <div style="background:white;height:100vh;width:100vw;">
    <v-switch 
      v-model:value="value" />
    <v-switch 
       />
  </div>
</template>
<script lang='ts'>
import vSwitch from '../../lib/switch/switch.vue'
import CloseButton from '../../components/closeButton.vue'
import { ref } from 'vue'
export default {
  components:{vSwitch,CloseButton},
  setup(){
    const value = ref(false)
    const disabled = ref(false)
    return {value,disabled}
  }
}
</script>