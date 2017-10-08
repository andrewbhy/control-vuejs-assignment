import axios from 'axios'


const login = ( username ) => {

    console.log(username)
    if( !username ) {
       return Promise.reject("username is not provided");
    }

    let returnPromise = new Promise( (resolve,reject)=> {
        try{
            axios.get(`http://jsonplaceholder.typicode.com/users`)
            .done(response => {
            // JSON responses are automatically parsed.
                console.log(response)
                resolve(response)

            }).catch( err => {
                console.log('get failed')
                console.log(err)
                reject(err)
            })
        }
        catch(err){
            console.log('axios threw exception')
            console.log(err)
        }

    } );

    return returnPromise;
}

export default login

