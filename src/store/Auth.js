
import User from '@/models/User'
export const MUTATION_TYPES = {

}

export default {
    namespaced: true,
    state: {
      loggedIn : false,
      user : { firstName : '', lastName : '' }
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
    }
};