<template>
  <div class="top-nav">
    <div class="content-container" >
    <div class="logo-container">
        <Logo/>
    </div>

    <div class="top-nav-menu right">
        <section > 
            <ul class="right">
                Login
            </ul>
        </section>
    </div>
    </div>

  </div>
</template>

<script>
import '@/styles/lib.less'
import Logo from '@/components/Logo.vue' // note that the extension .vue is needed unlike .js files

export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { Logo }
}
</script>

<style lang="less">
.top-nav {
    height:79px;
    position: fixed;
    background-color:  #14212c;;
    width : 100%;
    top : 0px;

}
.logo-container {
    position : absolute;
    padding-left: 10px;
    padding-top : 20px;
}
.top-nav-menu {
    float : right;
    padding-top : 10px;
    padding-right: 10px;
    color: white;

}
</style>
