import * as API from '@/api'
import Task from '@/models/Task'


const findTaskFromState = (state, { userId, id }) => {

    let taskList = state.taskList || [];
    let arrayIndex = -1;

    let item = taskList.find((item, index) => {

        arrayIndex = index;
        return (item.id === id) && (item.userId === userId)
    })

    return { index: arrayIndex, item }
}

const initialState = {
    maxId : -1,
    taskList: []
}

let actions = {

    load: ({ commit }, userId) => {

        return API.ToDo.getToDoListForUser(userId).then((result) => {
            API.ToDo.getMaxId().then( result2=>{
                commit("TODO_SETMAXID", result2.data)
                commit("TODO_LOAD", result.data)
            })
        })

    },

    update: ({ commit, state }, taskPayload) => {

        let originalTask = null;
        let { index, item } = findTaskFromState(state, taskPayload);

        if (item) {
            //create copy of task, incase api call goes wrong; we want to revert
            originalTask = new Task(item);
        }

        //optimistic, update state first
        commit("TODO_UPDATE", { index, task: taskPayload })

    },

    create: ({ commit, state }, taskPayload) => {

        let {taskList,maxId} = state;
        let newTask = new Task( Object.assign( { id : maxId + 1}, taskPayload) );//api doesn't generate new record. assigning new id from store instead

        //optimistic
        commit("TODO_ADD", { task: newTask });

      

        return API.ToDo.create(newTask,maxId+1).then(result => {

            return new Promise((resolve, reject) => {

                let { success, message, data } = result;

                if (success) {
                    resolve({success})
                }
                else{
                    reject( result );
                }

            })

        }).catch((err)=>{
            commit("TODO_ADD_CANCEL", newTask.id ); //remove from store; need testing
        })


    }


}

let mutations = {
    AUTH_LOGOUT : (state) =>{
      
        //attemp 1 : didn't work
        //state.maxId = initialState.maxId;
        //state.taskList = initialState.taskList;

        //attemp 2 : didn't clear the actual state when examined in vue devtool
        //state = Object.assign({},initialState)  

        state.maxId = 0;
        state.taskList = [];
    },
    TODO_SETMAXID : (state,data) =>{
        state.maxId = data;
    },
    TODO_LOAD: (state, data) => {
        state.taskList = data || [];
    },
    TODO_ADD: (state, payload) => {

        let { taskList } = state;
        let { task } = payload;
        state.maxId++;
        state.taskList = [...taskList, task]; // append at end
    },
    TODO_ADD_CANCEL: (state,id) => {
        
        let { taskList } = state;

        let removeIndex = taskList.findIndex( (item)=>{
            return item.id === id
        })

        if(removeIndex >= 0){
            state.maxId--;
            state.taskList = [
                ...taskList.slice(0, removeIndex),
                ...taskList.slice(removeIndex + 1)
            ]
        }

    },

    TODO_UPDATE: (state, payload) => {


        //state.taskList[payload.index] = payload.task;
        let { taskList } = state;
        let { index,task } = payload;

        state.taskList = [
            ...taskList.slice(0, index),
            task,
            ...taskList.slice(index + 1)
        ]
    }
}

let getters = {

    taskList: (state) => {

        return state.taskList || [];
    }
}


export default {
    namespaced: true,

    state:  Object.assign({},initialState),

    actions,
    mutations,
    getters


}

