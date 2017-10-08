
import User from '@/models/User'


export default {
    namespaced: true,

    state: {
      loggedIn : false,
      user : new User({ id : 0, name :"test user", username : "test@test.com"})
    },

    actions : {
     

    },

    mutations : {
      login ( state , user ) {
        state.loggedIn = true;
        state.user = user;
      },
      logout ( state ) {
        state.loggedIn = false;
        state.user =  new User();
      }
    },
    getters : {
      
      getUserFullname: ( { user,isLoggedIn } ) => {
       
        let name = isLoggedIn && user && user.name ? user.name : "<not logged in>"
        return name;
      },

      getIsLoggedIn : ( {isLoggedIn}) => {
        return isLoggedIn || false;
      }

    }
};