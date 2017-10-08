
import User from '@/models/User'
import { Auth as API } from '@/api'





const logoutAction = ({ commit, state, dispatch }, username) => {

  commit('AUTH_LOGOUT');
}

const loginAction = ({ commit, state, dispatch }, username) => {

  commit('AUTH_LOGOUT');

  let pr = new Promise((resolve, reject) => {

    API.login(username).then(result => {

      let { success, message, user } = result;

      if (success) {
        commit('AUTH_LOGIN', user) //this will automatically convert to Auth/AUTH_LOGIN in global scope
      }

      resolve({ success, message })

    }).catch(err => {

      reject(err)
    })



  })

  return pr;
};

export default {
  namespaced: true,

  state: {
    loggedIn: false,
    user: new User({ id: 0, name: "", username: "" })
  },

  actions: {
    login: loginAction,
    logout: logoutAction
  },

  mutations: {
    AUTH_LOGIN(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    AUTH_LOGOUT(state) {
      state.loggedIn = false;
      state.user = new User();
    }
  },
  getters: {

    getUserFullname: ({ user, loggedIn }) => {
      let name = loggedIn && user && user.name ? user.name : "<not logged in>"
      return name;
    },

    getIsLoggedIn: ({ loggedIn }) => {
      return loggedIn || false;
    },

    id: ({ user, loggedIn }) => {
      if (!loggedIn || (!user && !user.id)) {
        //do not return value unless current user is logged in
        return null;
      }
      else {
        return user.id;
      }
    }

  }
};
