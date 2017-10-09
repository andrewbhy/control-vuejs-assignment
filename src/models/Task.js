//@flow
export default class Task {

    id : number
    userId : number
    title : string
    completed : boolean

    constructor( args : Object ){

        let { id, userId,title, completed } = Object.assign( { id: -1, userId: -1 ,title : "", completed : false }, ( args || {} ) ); //destructuring assignment!!
        
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;

    }

    validate = () => {

        let isValid = true;

        if(!this.title) { isValid = false;} //empty titled to-do item is not allowed
        if(!this.userId || this.isValid === -1) { isValid = false;} //no user
        return isValid;
    }

    setId = (id : number) => {

        if( this.id === -1 ){
            this.id = id;
        }
        else{
            throw "Invalid Operation.  You cannot modify the id of a task instance once the id has been acquired from the server"
        }
    }

 

}