
<template>
    <a v-if="isLoggedIn" @click="handleLogout" >Logout</a>

    <!--
        when clicking logout button, it also clicked the login button when using href property
        switching to @click event for flow control
        <a v-else v-bind:href="url()">Login</a>
    -->

    <a v-else @click="handleLogin"> Login</a>
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
</style>