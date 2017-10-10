<template>
    <div class="vertical-center">

        <div id="form-login" class="form-group">
            <div class="form-inner-content-container">
                <h1>Login To View Or Add To-Dos</h1>

                <form v-on:submit.prevent="onSubmit">
                    <!--submit.prevent should prevent reloading-->

                    <div class="login-container">

                        <div class="username-input-group">

                            <div>
                                <input name='username' :class="{'input': true, 'is-danger': errors.has('username') }" v-validate:username="usernameValidationRule" v-model="username" @input="onInput">
                                </input>
                                <button class="">Login</button>
                            </div>
                            <i v-show="errors.has('username')" class="fa fa-warning"></i>
                            <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
                        </div>

                    </div>

                    <div>
                        {{loginErrorMesage}}
                    </div>

                </form>
            </div>
        </div>

    </div>
</template>


<script>

import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('Auth');
let actions = { ...mapActions(['login']) }

import { Validator } from 'vee-validate';


const usernameRegex = /^[a-zA-Z0-9._-]+$/;
const usernameMinLength = 3;
const usernameMaxLength = 15;
const usernameValidationRule = `required|regex:^[a-zA-Z0-9._-]+$|max:${usernameMaxLength}|min:${usernameMinLength}`;

let validationMessageDictionary = {

    en: {
        custom: {
            username: {
                required: 'Username is empty.',
                regex: 'username must be alphanumeric (letters a-z,A-Z, numbers 0-9) and cannot contain spaces.',
                max: `username cannot be longer than ${usernameMaxLength} characters.`,
                min: `username must be longer than ${usernameMinLength} characters.`
            }
        }
    }
}


let validator = new Validator({
    username: `required|regex:/^[a-zA-Z0-9._-]+$/|max:{${usernameMaxLength}}|min:{${usernameMinLength}}`
})

validator.updateDictionary(validationMessageDictionary);

export default {

    data: function() {

        return {
            username: null,
            valid: true,
            validationMessage: "",
            loginErrorMesage: ""
        }
    },

    created: function() {



    },
    computed: {
        usernameValidationRule() {
            return usernameValidationRule;
        }
    },

    methods: {

        ...mapActions(['login']),

        setLoginErrorMessage: function(msg) {

            this.$data.loginErrorMesage = msg;
        },

        onSubmit: function() {

            let username = this.$data.username;
            let router = this.$router

            this.$validator.validate("username", this.$data.username).then(valid => {

                if (valid) {
                    //authenticate user
                    let x = this.login(username).then(result => {
                        let { success, message } = result;
                        if (success) {
                            this.setLoginErrorMessage("");
                            router.push('/');
                        }
                        else {
                            //expose entire error message for now
                            this.setLoginErrorMessage(message);
                        }
                    }).catch(err => {
                        console.error(err);//just log for now
                    })

                }
                else {
                    //invalid input
                }
            })

        },
        onInput: function() {

            this.setLoginErrorMessage("");
            //this.validateInput()
        }
        
    }
}
</script>

<style>
.vertical-center {

    min-height: 100vh;
    height: 100vh;

    display: flex;
    justify-content: center;
}

.form-inner-content-container {
    position: relative;
    text-align: center;
}

.login-container {
    margin-top: 15%;
}

.username-input-group {


}

#form-login {
    align-content: center;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;

    margin: auto;
    position: relative;

    top: -100px;


    min-width: 200px;
    width: 80%;

    min-height: 200px;
    height: 60%;

    padding: 40px;
}
</style>