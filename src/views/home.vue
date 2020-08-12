<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>V-UI</h1>
      <h2>暂不适合放在生产环境中使用</h2>
      <p>
        <a class="a-button">GitHub</a>
        <router-link to="/doc" ><span class="a-button">START</span></router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/topnav.vue'
//const Topnav:Object = ()=>import('../components/topnav.vue') 
export default {
  components:{
    Topnav
  }
}
</script>
<style lang="scss" scoped>
.banner{
  display:flex;
  flex-direction:column ;
  text-align: center;
  color: #696B66;
  //background:rgb(255,198,195,1);
  //height: 100v;
  h1,h2{
    padding: 16px;
  }
  p{
    padding: 16px;
    .a-button{
      border: 1px solid #696B66;
      padding: 8px 32px;
      margin:  32px;
      border-radius: 32px;
      outline: none;
      &:hover{
        color:#84A76D ;
        border-color: #84A76D;
        background: #696B66;
        transition: .6s all;
      }
    }
  }
}
</style>
