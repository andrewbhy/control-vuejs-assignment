<template>
  <div class="top-nav">

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
</template>

<script>
import Logo from '@/components/Logo.vue' // note that the extension .vue is needed unlike .js files

export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { Logo }
}
</script>

<style>
.top-nav {
    height:79px;
    position: fixed;
    background-color: #14212c;
    width : 100%;
    top : 0px;
    /*padding : 20px;*/
}
.logo-container {
    position : absolute;
   
}
.top-nav-menu {

    color: white;

}
</style>
