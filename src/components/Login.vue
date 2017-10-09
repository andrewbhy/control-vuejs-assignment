<template>
    <div>
        <h1>Login please!!</h1>
        <form v-on:submit.prevent="onSubmit"> <!--submit.prevent should prevent reloading-->
            <input v-model="username" @input="onInput" ></input>
            <button class="">Login</button>

            {{validationMessage}}
            <div>
            {{loginErrorMesage}}
            </div>
        </form>
    </div>
</template>


<script>

import {createNamespacedHelpers} from 'vuex'
const { mapActions } = createNamespacedHelpers('Auth');
let actions =  {...mapActions(['login'])}


const usernameRegex = /^[a-zA-Z0-9._-]+$/;
const usernameMinLength = 3;
const usernameMaxLength = 15;



export default {
    
    data : function(){

        return {
            username : null,
            valid : true,
            validationMessage : "",
            loginErrorMesage : ""
        }
    },

  
    methods : {
       
        ...mapActions(['login']),

        setLoginErrorMessage: function (msg){

             this.$data.loginErrorMesage = msg;
        },

        onSubmit : function() {

            
  
            
            //start of new login attempt; reset value
            this.setLoginErrorMessage("");

            let router = this.$router;
            let username = this.$data.username || '';
            if( this.validateInput(username)){
                    //call login action
                
                    //login(username)

                    let x = this.login(username).then( result => {

                        let { success, message } = result;
              
                        if ( success ) {
                            this.setLoginErrorMessage("");
                            router.push('/');
                        }
                        else {
                            //expose entire error message for now
                            this.setLoginErrorMessage(message);
                        }


                    }).catch( err =>{


                    })
                
            }

        },
        onInput : function() {

            this.setLoginErrorMessage("");

            this.validateInput()
        },
        validateInput : function() {

            //writing it this way as a practice on closure
            let setResult = function (ctx) {
                return function(valid,msg){
                    ctx.$data.valid = valid;
                    ctx.$data.validationMessage = msg;

                    return valid
                }
            }
            setResult = setResult(this);
            
         

            if(!this.$data.username ){
               return setResult(true,"");
            }
            else{

                let username = this.$data.username || ""
        
                if ( username.length < usernameMinLength ) {
                    return setResult(false, `user name must be between ${usernameMinLength} to ${usernameMaxLength} characters `)
                    
                }

                if( !usernameRegex.exec(username) ){
                    //regex failed to find match
                    return setResult(false,'username must be alphanumeric (letters a-z,A-Z, numbers 0-9)')
                }

                
             
            }

            return setResult(true,"");
        }
    }
}
</script>

<style>
</style>