<template>
    <transition name="fade">
    <div :key="id" :class="{ completed : isCompleted }">
        <!--<span>{{id}}</span>-->
        <input type="checkbox" id="checkbox" v-model="completed" @change="onCheckboxChange">
        <span class="title-container"><span class="title">{{title}}</span></span>

      
    </div>
    </transition>
   
</template>
<script>
import Task from '@/models/Task'

import {createNamespacedHelpers} from 'vuex'
const { mapGetters,mapActions } = createNamespacedHelpers('ToDo');



export default {
    name : "Task",
    props : ["task"],

    data : function(){
        let {id,userId,title,completed} = this.$props.task;

        return {
            id,userId,title,completed
        }

    },

    computed : {
        isCompleted : function() {
            return this.$data.completed
        }
    },

    methods : {
        ...mapActions(["update"]),

        onCheckboxChange : function(e) {
          
            let { id,userId,title,completed} = this.$data
            this.update({
                id,
                userId,
                title,
                completed
            })
        },
       

    }
}
</script>
<style>
.completed .title-container {
    text-decoration: line-through; 
 
  
}
.completed .title{
    color : darkgray;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>