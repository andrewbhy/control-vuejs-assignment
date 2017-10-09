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


let actions = {

    load: ({ commit }, userId) => {

        return API.ToDo.getToDoListForUser(userId).then((result) => {
            commit("TODO_LOAD", result.data)
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

        let {taskList} = state;
        let maxId = 1;
        taskList.forEach(item => {
            if (item && item.id && maxId < item.id) {
                maxId = item.id;
            }
        })

        let newTask = new Task(taskPayload)
        return API.ToDo.create(newTask,maxId).then(result => {

            return new Promise((resolve, reject) => {

                let { success, message, data } = result;

                if (success) {
           
                    commit("TODO_ADD", { task: data });

                    resolve({success})
                }
                else{
                    reject( result );
                }

            })

        })


    }


}

let mutations = {

    TODO_LOAD: (state, data) => {

        state.taskList = data || [];

    },
    TODO_ADD: (state, payload) => {

        let { taskList } = state;
        let { task } = payload;
   
        state.taskList = [...taskList, task]; // append at end
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

    state: {

        taskList: []

    },

    actions,
    mutations,
    getters


}

