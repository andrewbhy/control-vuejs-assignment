<template>
    <div :key="id" :class="{ completed : isCompleted }">
        <span>{{id}}</span>
        <input type="checkbox" id="checkbox" v-model="completed" @change="onCheckboxChange">
        <span class="title">{{title}}</span>
    </div>
   
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
.completed .title{
    text-decoration: line-through;
}

</style>