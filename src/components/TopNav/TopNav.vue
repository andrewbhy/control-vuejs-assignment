<template>
  <div class="top-nav">
    <div class="content-container" >
    <div class="logo-container">
        <Logo/>
    </div>

    <div class="top-nav-menu right">
        <section > 
            <ul class="right">
                <li class="nav-btn"><LoginButton/></li>
            </ul>
        </section>
    </div>
    </div>

  </div>
</template>

<script>
//import '@/styles/lib.less'
import Logo from '@/components/Logo.vue' // note that the extension .vue is needed unlike .js files
import LoginButton from './LoginButton.vue'
export default {
  name: 'app',

  //components are defined at the top level; not inside data() function
  components: { Logo , LoginButton}
}
</script>

<style >
.top-nav {
    height:79px;

    background-color:  #14212c;;
    width : 100%;
    top : 0px;

}
.right {
    float : right;
}
.top-nav ul {
    list-style: none;
}
.logo-container {
    position : absolute;
    padding-left: 10px;
    padding-top : 20px;
}
.top-nav-menu {
  
    padding-top : 8px;
    padding-right: 10px;
    color: white;


}
/* grabbing login button style from control's website */
.nav-btn-alt {
    border: 1px solid #5892ca;
    background: transparent;
    box-shadow: initial!important;
}
.nav-btn {
    box-sizing: border-box;
    height: 33px;
    margin-right: 10px;
    padding: 10px 15px!important;
    border-radius: 3px;
    background: #3A98F3;
    font-family: Lato, Helvetica, Arial, Lucida, sans-serif;
    color: #fff !important;
    line-height: normal!important;
    font-size: 14px!important;
    font-weight: 600;
    border: 0;
    transition: all 300ms;
}


</style>
