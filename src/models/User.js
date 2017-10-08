

export class User {

    constructor ( args ){

        //user data has many other properties but we are only interested in the following for now
        let { id, name, username, email} = Object.assign( { id : -1, name : "", username : "", email :"" }, ( args || {} ) ); //destructuring assignment!!

      
        this.id = id;
        this.name = name;
        this.username = username;
        this.eail = email;
 
    }

}