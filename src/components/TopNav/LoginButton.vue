
<template>
    <!--
    this makes clicking hard...
    <a v-if="isLoggedIn" @click="handleLogout" >Logout</a>
    -->

    <!--
        when clicking logout button, it also clicked the login button when using href property
        switching to @click event for flow control
        <a v-else v-bind:href="url()">Login</a>
    -->

    <!-- this handles click event reliably, and is of better design ( separation of concern )-->
    <div class="nav-btn nav-btn-alt" v-if="isLoggedIn" @click="handleLogout" ><a >Logout</a></div>
    <div class="nav-btn nav-btn-alt" v-else @click="handleLogin"><a>Login</a></div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const { mapActions } = createNamespacedHelpers('Auth');
let actions =  {...mapActions(['logout'])}


export default {

     props : ['isLoggedIn'],
     methods : {

         ...mapActions(['logout']),
         handleLogout : function() {

             this.logout();
      
             this.$router.push('/')
         },

         handleLogin : function() {
            this.$router.push('/login')
         },

         url : function() {

             return "/login";
         }

     }
}
</script>

<style>
a { 
     color : white;
     text-decoration:none; 
}




.nav-btn {
    box-sizing: border-box;
    height: 38px;
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
    cursor : pointer;
}

.nav-btn-alt {
    border: 1px solid #5892ca;
    background: transparent;
    box-shadow: initial!important;
}
.nav-btn-alt:hover {
    border : 1px solid white;
}
</style>