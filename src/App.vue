<template>
  <div id="app">

    <TopNav></TopNav>
   
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/lib.less'
import TopNav from '@/components/TopNav.vue' // note that the extension .vue is needed unlike .js files

export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { TopNav }
}
</script>

<style lang="less">
body {
  margin : 0px !important;
  padding : 0px !important;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  top : 0px;
}
</style>
