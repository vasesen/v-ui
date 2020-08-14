<template>
  <div class="layout">
    <topnav class="nav" />
    <div>
      <aside v-if="menuVisible">
        <h3>组件列表</h3>
        <ol>
          <li>
            <router-link to="/doc/icons">Icon 图标</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
        </ol>
      </aside>
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<Boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background: rgb(229,234,238,1);
  .nav {
    flex-shrink: 0;
  }

  .content {
    flex-grow: 1;
    padding-top: 16px;
    padding-left: 166px;
    overflow: auto;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

aside {
  background: oldlace;
  position: fixed;
  width: 150px;
  padding: 16px;
  height: 100vh;
  h3 {
    margin-bottom: 4px;
  }
  ol {
    li {
      padding: 8px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 56px;
    left: 0;
  }
}
</style>