<template>
  <div id="app">

    <TopNav/>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './styles/lib.less'
import TopNav from '@/components/TopNav/TopNav.vue' // note that the extension .vue is needed unlike .js files

export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { TopNav }
}
</script>

<style lang="less">

.content-container {
  width : 80%;
  margin : auto;
}

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
