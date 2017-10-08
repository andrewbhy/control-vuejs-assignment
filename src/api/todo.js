//@flow
import axios from 'axios'
import querystring from 'querystring'
import Task from '../models/Task'

const url: string = 'http://jsonplaceholder.typicode.com/todos';

export const createToDo = (task: Task): Promise<any> => {



    if (!task.validate()) {
        return Promise.reject({ success: false, message: "invalid input" })
    }
    if (task.id >= 1) {
        return Promise.reject({ success: false, message: "task is already generated at the server" })
    }

    let maxId = 0; // start from 0

    return getToDoListForUser(task.userId).then(results => {


        let { data } = results;
        data = data || [];

        data.forEach(item => {
            if (item && item.id && maxId < item.id) {
                maxId = item.id;
            }
        })

        maxId + 1;

        task.setId(maxId);

        return axios.post(url, querystring.stringify(task));

    })





}

export const getToDoListForUser = (userId: number) : Promise<any> => {

    return new Promise((resolve: Function, reject:Function) => {

        axios.get(url, { params: { userId } }).then(response => {
            debugger
            resolve( { success : true, data: response.data})


        }).catch( (err: any)=>{

            reject( {success : false, err})
        })
    })
}