<template>
<!-- template for the modal component -->
  <transition  v-if="showModal" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <form v-on:submit.prevent="handleSubmit">
            
            <div class="modal-header">
                <h2>Add To Do </h2>
            </div>

            <div class="modal-body">
                <span>Title</span><input v-model="title" @input="onTitleChange"/>
                {{validationMessage}}
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <button class="btn btn-primary" > <!--child sbould not modify parent's data/prop. emit close event so that parent component can properly handle it-->
                        submit
                    </button>
                    <!-- don't want to submit on cancel now do we? -->
                    <button type="button" class="btn btn-primary"  @click="handleCancel"> <!--child sbould not modify parent's data/prop. emit close event so that parent component can properly handle it-->
                        cancel
                    </button>
                </slot>
            </div>
            </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const { mapGetters,mapActions } = createNamespacedHelpers('ToDo');

const validate = ( { userId,title }) => {

    let isValid = true;
    let message = "";
    
    if( !userId || userId <= 0 ){
        isValid = false;
        message = "applciation error, userId is not found. "
        //this is app error and not a user error; need to handle it differently
    }

    if ( !title || title.length  == 0 ){
        isValid = false;
        message = "Title cannot be empty";
    }

    return {
        isValid, message
    }

}

export default {

    props : ["showModal","userId"],

    data : function() {

        return {
            title : "",
            validationMessage : ""
        }
    },

  


    methods : {

        ...mapActions(["create"]),

        setValidationMessage : function (msg) {
            this.$data.validationMessage = msg || "";
        },

        resetProps: function(){
            this.$data.title = ""; 
            this.setValidationMessage("");
        },

        getProps : function() {
            return { title : this.$data.title, userId : this.$props.userId }
        },
       
        onTitleChange : function(e) {
       
            this.setValidationMessage("");

            let { title, userId } = this.getProps()
            let { isValid , message } = validate({userId,title})

            this.setValidationMessage(message);

        },
        handleCancel : function(e) {
            this.resetProps()
            this.$emit('close')
        },
        handleSubmit : function(e) {
            
            this.setValidationMessage("");

            let { title, userId } = this.getProps()

            let payload = { userId,title };
            let { isValid , message } = validate(payload)

            if( isValid ){
                this.create(payload).then( result => {
                    this.$emit('close')
                    this.resetProps()
                }).catch( err => {
                    //to-do : handle later
                })
            }
            else {
                this.setValidationMessage(message);
            }

        }
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
  width : 600px;
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
</style>