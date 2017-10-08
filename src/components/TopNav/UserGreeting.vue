
<template>
    <span v-if="isLoggedIn">welcome, {{fullname}}  </span>
</template>

<script>
export default {
    props : ['fullname','isLoggedIn']
}
</script>