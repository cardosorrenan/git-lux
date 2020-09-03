import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const baseUrl = 'https://api.github.com';

export default new Vuex.Store({
  state: {
    user: {},
    repos: [],
    notFound: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setFindedUser(state, key) {
      state.notFound = key;
    },
    setRepos(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    async getUserWithRepos({ commit }, username) {
      await axios.get(`${baseUrl}/users/${username}`)
        .then((response) => {
          commit('setUser', response.data);
          commit('setFindedUser', true);
        })
        .catch(() => {
          commit('setFindedUser', false);
        });
      await axios.get(`${baseUrl}/users/${username}/repos`)
        .then((response) => {
          commit('setRepos', response.data);
        });
    },
  },
});
