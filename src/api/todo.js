//@flow
import axios from 'axios'
import querystring from 'querystring'
import Task from '../models/Task'

const url: string = 'http://jsonplaceholder.typicode.com/todos';

export const create = (task: Task, maxId : number): Promise<any> => {
    //the json API doesn't actually create new records, so getToDoList call always returns the default list;
    //this caused incorrect id assignment ( always resolved to 201)
    //as a workaround, now I am getting the maxId from the state and passing it in, until I find a solution


    if (!task.validate()) {
        return Promise.reject({ success: false, message: "invalid input" })
    }
    if (task.id >= 1) {
        //treat positive id as already existing item
        return Promise.reject({ success: false, message: "task is already generated at the server" })
    }

    //let maxId = 0; // start from 0

    return getToDoList().then(results => {

        /*
        let { data } = results;
        data = data || [];

        //json is sorted by id, but decided not to rely on it
        data.forEach(item => {
            if (item && item.id && maxId < item.id) {
                maxId = item.id;
            }
        })
        */
        //id resolution mock : this should be server api's job. 
        maxId++;
        task.setId(maxId); 

  
        return axios.post(url, querystring.stringify(task)).then( response =>{

            return new Promise ( (resolve, reject ) => {
                if ( response.status === 201 ){
                    //created

                    resolve ( {
                        success : true,
                        message : response.statusText,
                        data : response.data
                    })
                }
                else{
                    reject ( {
                        success : false,
                        message : response.statusText,
                        data : null
                    })
                }
            });
           
        })

    })





}

export const getToDoList = (params: ?any): Promise<any> => {

    return new Promise((resolve: Function, reject: Function) => {

        axios.get(url, { params } ).then(response => {

            resolve({ success: true, data: response.data })


        }).catch((err: any) => {

            reject({ success: false, err })
        })
    })


}

export const getToDoListForUser = (userId: number): Promise<any> => {

    /*
    return new Promise((resolve: Function, reject: Function) => {

        axios.get(url, { params: { userId } }).then(response => {

            resolve({ success: true, data: response.data })


        }).catch((err: any) => {

            reject({ success: false, err })
        })
    })
    */
    return getToDoList ( { userId});
}