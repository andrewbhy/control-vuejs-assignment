//@flow
import axios from 'axios'
import type { AxiosXHRConfigBase } from 'axios'

import querystring from 'querystring'
//$FlowFixMe
import Task from '../models/Task'



const url: string = 'http://jsonplaceholder.typicode.com/todos';

export const create = (task: Task): Promise<any> => {



    if (!task.validate()) {
        return Promise.reject({ success: false, message: "invalid input" })
    }

    return getToDoList().then(results => {

        return axios.post(url, querystring.stringify(task)).then(response => {

            return new Promise((resolve, reject) => {
                if (response.status === 201) {
                    //created

                    resolve({
                        success: true,
                        message: response.statusText,
                        data: response.data
                    })
                }
                else {
                    reject({
                        success: false,
                        message: response.statusText,
                        data: null
                    })
                }
            });

        })

    })





}

export const getToDoList = (params: ?Object): Promise<any> => {

    return new Promise((resolve: Function, reject: Function) => {

        //$FlowFixMe
        axios.get(url, { params }).then(response => {

            resolve({ success: true, data: response.data })


        }).catch((err: any) => {

            reject({ success: false, err })
        })
    })


}

export const getToDoListForUser = (userId: number): Promise<any> => {
    return getToDoList({ userId });
}

export const getMaxId = (): Promise<any> => {

    /*
        taskList.forEach(item => {
            if (item && item.id && maxId < item.id) {
                maxId = item.id;
            }
        })

    */
    return getToDoList().then((response) => {

        return new Promise((resolve, reject) => {
            if (response.success) {

                let taskList = response.data;
                let maxId = 0;
                taskList.forEach(item => {
                    if (item && item.id && maxId < item.id) {
                        maxId = item.id;
                    }
                })
                resolve({ sucess : response.success, data: maxId})
            }
            else {
                reject(response)
            }
        })
    })


    //return new Promise( (resolve,reject)=>{ resolve({ success : true, data : 200 }) } );
}