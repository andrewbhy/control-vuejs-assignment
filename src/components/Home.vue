
<template>
<div>
  

    <div v-if="isToDoVisible()"> 
        <h1>{{getUserFullname}}'s To Do </h1>

        <ToDoList v-bind:user-id="userId"/>
    </div>

    <div v-else>
        <h1>Please login to use Todo </h1>
    </div>

</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const { mapGetters } = createNamespacedHelpers('Auth');

import ToDoList from './ToDo/ToDoList.vue'

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