
<template>
<div>
  

    <div v-if="isToDoVisible()"> 
        <h1>{{getUserFullname}}'s To Do </h1>
    </div>

    <div v-else>
        <h1>Please login to use Todo </h1>
    </div>

</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const { mapGetters } = createNamespacedHelpers('Auth');
export default {
    data() {
        return {
           
        }
    },

    computed : {
         ...mapGetters(['getUserFullname','getIsLoggedIn']) 
    },

    methods : {


         isToDoVisible : function() {
       
            return this.getIsLoggedIn
         }
    }
}
</script>