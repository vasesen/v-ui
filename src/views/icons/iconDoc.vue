<template>
  <div style="display:inline-flex">
    <div class="card">
      <v-icon name="right" />
      <v-icon name="jiazai" />
      <v-icon name="shijian" />
      <v-icon name="xing" />
      <v-icon name="zuo" />
       <v-icon name="fuzhi" />
        <v-icon name="shanchu" />
    </div>
    
    <div class="card">
        
    </div>
  </div>
</template>
<script lang="ts">
import vIcon from '../../lib/icons/icon.vue';
export default {
  name:'IconDoc',
  components:{vIcon}
}
</script>
<style lang="scss" scoped>
.card{
  height: 250px;
  width: 250px;
  border-radius: 50px;
  background: #d3d3df;
  box-shadow:  24px 24px 24px #adadb7, 
             -24px -24px 24px #f9f9ff;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>