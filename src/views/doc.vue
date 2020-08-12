<template>
  <div>
    <topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h3>组件列表</h3>
        <ol>
          <li>
            <router-link to="/doc/icons">Icon组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/topnav.vue' 
import { inject,Ref } from 'vue'
export default {
  components:{
    Topnav
  },
  setup(){
    const menuVisible = inject<Ref<Boolean>>('menuVisible')
    return {menuVisible}
  }
}
</script>
<style lang="scss" scoped>
aside{
  background: oldlace;
  width: 150px;
  padding: 16px;
  h3{
    margin-bottom: 4px;
  }
  ol{
    li{
      padding: 4px  0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 56px;
    left: 0;
  }

}
</style>