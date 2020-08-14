<template>
  <div>
    <Switch 
      v-model:disabled = "isDisabled"
      v-model:value="value" />
  </div>
</template>
<script lang='ts'>
import Switch from './switch.vue'
import { ref } from 'vue'
export default {
  components:{Switch},
  setup(){
    const value = ref(true)
    const isDisabled = ref(false)
    return {value,isDisabled}
  }
}
</script>