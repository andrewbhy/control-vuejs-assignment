
<template>
<div>
    <div v-if="isToDoVisible()"> 
        <ToDoList v-bind:user-id="userId" v-bind:user-full-name="getUserFullname"/>
    </div>

    <div v-else style="margin-top:10px">
        <h1>Simple To-Do App</h1>
        <p>
            This is a simple To-Do app, developed with vue.js ( vuex for state management )
        </p>

        <strong>Please login to use the app</strong>

        <p>
            Authentication only requires username, and the list can be found here : 
            <a style="color:blue"href="http://jsonplaceholder.typicode.com/users">users</a>
        </p>
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