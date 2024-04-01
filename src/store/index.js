import { createStore } from 'vuex';

export default createStore({
  state: {
    authToken: localStorage.getItem('authToken'),
    userRoles: localStorage.getItem('userRoles')|| [],
    user: localStorage.getItem('user')|| []
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    },
    setUserRoles(state, roles) {
      state.userRoles = roles;
    },
    setUser(state, user) {
        state.user= user;
    }
  },
  actions: {
    login({ commit }, { authToken, roles, user }) {
      commit('setAuthToken', authToken);
      commit('setUserRoles', roles);
      commit('setUser', user);
    },
    logout({ commit }) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRoles');
      localStorage.removeItem('user');
      commit('setAuthToken', null);
      commit('setUserRoles', []);
      commit('setUser', []);
    }
  }
});
