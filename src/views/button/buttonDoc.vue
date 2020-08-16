<template>
  <div>
    <div style="height:50px"></div>
    <v-button > checked </v-button>
    <v-button > button </v-button>
    <v-button
      theme="text"  
    >1</v-button>
    <v-button
      theme="link"  
    >checked</v-button>
    <v-button> text </v-button>
    <v-button> 新拟物 </v-button>
  </div>
</template>
<script lang="ts">
import vButton from  '../../lib/button/button.vue'
export default {
  name:'ButtonDoc',
  components:{vButton}
}
</script>