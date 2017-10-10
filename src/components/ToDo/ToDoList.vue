<template>
    <div>
    <div class="todoheader">

        <div style="overflow:hidden;padding-top:10px;">
            <!--overflow hidden contains the float and gives them height-->
            <div style="float:left"><span> {{userFullName}}'s To Do </span></div>
            <div style="float:right"> <button  class="btn btn-primary btn-block" style="width:100px;padding:5px;margin:1px;" @click="showAddMenu = !showAddMenu">Add</button></div>
        </div>
     
    </div>
    <hr/>
    <div class="container" > 
       

        <!-- listing to $emit("close") from child component and toggling visibility -->
        <AddToDo v-bind:showModal="showAddMenu" v-bind:userId="userId" v-bind:title="newTitle" @close="showAddMenu = false"/>

        <div class="row">
            <div class="col">
                <h1>To-Dos</h1>
                <ul>
                    <!--In 2.2.0+, when using v-for with a component, a key is now required.-->
                    <Task v-for="item in getIncompleteTaskList" v-bind:task="item"  :key="item.id"/>
                </ul>
            </div>
            <div class="col">
                <h1> Completed </h1>
                <ul>
                    <Task v-for="item in getCompletedTaskList" v-bind:task="item"  :key="item.id"/>
                </ul>
            </div>
        </div>
    </div>
    </div>

</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const { mapGetters,mapActions } = createNamespacedHelpers('ToDo');
import Task from './Task.vue'
import AddToDo from './AddToDo.vue';

export default {

    components: { Task, AddToDo },
    props : ["userId","userFullName"],
    data : function() {

        return {

            validUserId : true, //we can use this to display error when invalid userId is passed in
            showAddMenu : false,
            
            newTitle : ""

        }

    },
    //computed properties are cached based on their dependencies, whereas methods will evaluate everytime it is called
    computed : {
        ...mapGetters(["taskList"]),


        getCompletedTaskList : function(){

            let taskList = this.taskList;

            let filteredList = taskList.filter( ( item ) => {
                if(item && item.completed ) {
                    return true;
                }
                return false;
            })

            return filteredList;

        },

        getIncompleteTaskList : function(){
            let taskList = this.taskList;

            let filteredList = taskList.filter( ( item ) => {
                if(item && item.completed ) {
                    return false;
                }
                return true;
            })

            return filteredList;

        }
    },
    
    methods : {
        ...mapActions(["load"]),

        keyMonitor : function(e) {
            console.log(e.key)
        },

        _validateUserID : function(userId) {
            let isValid = true;
            if ( userId && userId >= 0) {
                //valid userid
                isValid = true;
            }
            else {
                isValid = false;
            }
            this.$data.validUserId  = isValid;
            return isValid;
        }
    },
    //vuejs component lifecycle
    //https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    // v-if toggle goes through the full lifecycle from beforeCreate to destroyed.
    // meaning that everytime user logs in in this app new todolist component is created
    beforeCreate: function(){ console.log("ToDoList control beforeCreate")},
    created: function(){ 
        console.log("ToDoList control created");

        
        
    },
    beforeMount: function(){ console.log("ToDoList control beforeMount")},
    mounted : function() { 
        
        console.log("ToDoList control mounted")
        let userId = this.$props.userId;
        this._validateUserID(userId);

        this.load (userId);

    },
    beforeUpdate: function(){ console.log("ToDoList control beforeUpdate")},
    updated:function(){ console.log("ToDoList control updated")},
    beforeDestroy:function(){ 
        console.log("ToDoList control beforeDestroy")

       
    },
    destroyed:function(){ console.log("ToDoList control destroyed")}
}

</script>


<style>




</style>