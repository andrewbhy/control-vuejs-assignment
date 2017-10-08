
<template>
    <a v-if="isLoggedIn" href="/logout">Logout</a>
    <a v-else href="/login">Login</a>
</template>

<script>
export default {

     props : ['isLoggedIn']
}
</script>

<style>
a { 
     color : white;
     text-decoration:none; 
}
</style>