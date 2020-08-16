<template>
  <svg class="v-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script lang="ts">
export default {
  name:'v-icon',
  props:{
    name:{
      type:String,
    }
  }
}
</script>
<style lang="scss">
.v-icon {
  height: 1.2em;
  width: 1.2em;
}
</style>