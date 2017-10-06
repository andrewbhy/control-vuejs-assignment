<template>
  <div id="app">

    <TopNav></TopNav>
   
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue' // note that the extension .vue is needed unlike .js files

export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { TopNav }
}
</script>

<style>
body {
  margin : 0px !important;
  padding : 0px !important;
}
#app {
  top : 0px;
}


/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
