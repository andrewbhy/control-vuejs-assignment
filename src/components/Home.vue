
<template>
<div>
    <div v-if="isToDoVisible()"> 
        <ToDoList v-bind:user-id="userId" v-bind:user-full-name="getUserFullname"/>
    </div>

    <div v-else>
        <h1>Hello World </h1>
    </div>
</div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'
import ToDoList from './ToDo/ToDoList.vue'

const { mapGetters } = createNamespacedHelpers('Auth');

export default {
    data() {
        return {
           
        }
    },
    components : {ToDoList},
    computed : {
         ...mapGetters(['getUserFullname','getIsLoggedIn','userId']) 
    },

    methods : {
         isToDoVisible : function() {
            return this.getIsLoggedIn
         }
    }
}
</script>