<template>
    <!-- template for the modal component -->
    <transition v-if="showModal" name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <form v-on:submit.prevent="handleSubmit">

                        <div class="modal-header">
                            <h2>Add To Do </h2>
                        </div>

                        <div class="modal-body">
                            <span>Title</span>
                            <input name='title' v-model="title" v-validate:title="titleValidationRule" :class="{ 'title-input':true,  'input': true, 'is-danger': errors.has('title')}" @input="onTitleChange" />
                            <i v-show="errors.has('title')" class="fa fa-warning"></i>
                            <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>

                        </div>

                        <div class="modal-footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <button class="btn btn-primary btn-block ">
                                            <!--child sbould not modify parent's data/prop. emit close event so that parent component can properly handle it-->
                                            submit
                                        </button>
                                    </div class="col">
                                    <div class="col">
                                        <!-- don't want to submit on cancel now do we? -->
                                        <button type="button" class="btn btn-secondary btn-block col" @click="handleCancel">
                                            <!--child sbould not modify parent's data/prop. emit close event so that parent component can properly handle it-->
                                            cancel
                                        </button>
                                    </div class="col">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import { Validator } from 'vee-validate';
import { createNamespacedHelpers } from 'vuex'
const debounce = require('lodash/debounce')
const titleMaxLength = 60;
const titleMinLength = 1
const titleValidationRule = `required|max:${titleMaxLength}`
let validationMessageDictionary = {

    en: {
        custom: {
            title: {
                required: 'Title cannot be empty.',
                max: `Title cannot be longer than ${titleMaxLength} characters.`,
                //min: `title must be at least ${titleMinLength} characters long.`
            }
        }
    }
}
let validator = new Validator({
    title: titleValidationRule
})
validator.updateDictionary(validationMessageDictionary);

const { mapGetters, mapActions } = createNamespacedHelpers('ToDo');



export default {

    props: ["showModal", "userId"],

    data: function() {
        return {
            title: "",
            validationMessage: ""
        }
    },
    created() {
        this.handleSubmit = debounce(this.handleSubmit,1000,{leading:true})
    },
    mounted : function(){
        

    },
    computed: {
        titleValidationRule() {
            return titleValidationRule
        }
    },
    methods: {

        ...mapActions(["create"]),

        setValidationMessage: function(msg) {
            this.$data.validationMessage = msg || "";
        },

        resetProps: function() {
            this.$data.title = "";
            this.setValidationMessage("");
        },

        getProps: function() {
            return { title: this.$data.title, userId: this.$props.userId }
        },

        onTitleChange: function(e) {
        },
        handleCancel: function(e) {
            this.resetProps()
            this.$emit('close')
        },
        handleSubmit: function(e) {
      
            this.setValidationMessage("");

            let { title, userId } = this.getProps();

          

            let payload = { userId, title };

            this.$validator.validate("title", title).then(valid => {

                if (valid) {
                    this.create(payload).then(result => {
                        this.$emit('close')
                        this.resetProps()
                    }).catch(err => {
                        //to-do : handle later
                        console.error(err)
                    })
                }
                else {
                    //to-do : find a way to handle errors
                    this.setValidationMessage("Add to-do failed");
                }
            });
        },

       
    }


}
</script>


<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    min-width: 300px;
    width: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.title-input {
    width: 100%;
}
</style>