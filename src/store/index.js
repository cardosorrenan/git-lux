import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const cliendId = process.env.VUE_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET;
const baseUrl = 'https://api.github.com';

export default new Vuex.Store({
  state: {
    user: [],
    notFound: false,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setFindedUser(state, key) {
      state.notFound = key;
    },
  },
  actions: {
    async getUsers({ commit }, name) {
      await axios.get(`${baseUrl}/users/${name}?client_id=${cliendId}&client_secret=${clientSecret}`)
        .then((response) => {
          commit('setUsers', response.data);
          commit('setFindedUser', true);
        })
        .catch(() => {
          commit('setUsers', []);
          commit('setFindedUser', false);
        });
    },
  },
  modules: {
  },
});
