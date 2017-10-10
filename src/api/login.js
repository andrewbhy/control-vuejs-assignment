import axios from 'axios'
import User from '@/models/User'

const login = ( username ) => {

    console.log(username)
    if( !username ) {
       return Promise.reject("username is not provided");
    }

    let returnPromise = new Promise( (resolve,reject)=> {
        try{
            axios.get(`http://jsonplaceholder.typicode.com/users`,{ params: { username} }).then(response => {
                // JSON responses are automatically parsed.
                // if status is not 200, it should be handled in catch block
                let { status , data } = response;
                let count = ( data || [] ).length;

                if ( count == 1 ) {
                    let user =  new User( data[0] );
                    resolve( { success : true , message : "ok", user})
                }
                else if( count == 0 ){
                    resolve ( { success : false, message : "authentication failed."})
                }
                else {
                    //well.... this shouldn't really happen should it now? assuming username is unique?
                    resolve ( { success : false, message : "catastropic failure"})
                }

            })
        }
        catch(err){
            console.log('axios threw exception')
            console.log(err)
        }

    } );

    return returnPromise;
}

export { login }

