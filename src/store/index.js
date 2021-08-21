import Vue from 'vue'
import Vuex from 'vuex'

import httpClient from '../shared/services/httpClient';
import initialstate from './initialState';
import {vm} from '../main';

Vue.use(Vuex)


export default new Vuex.Store({
  state: initialstate(),
  mutations: {
    updateLogin(state, payload) {
      state.loading = payload;
    },
    updateTokenResponse(state, payload) {
      state.loading = true;
      state.tokenResponse = payload;
    },
    updateUserResponse(state, payload) {
      state.loading = false;
      state.loggedIn = true;
      state.userResponse = payload;
    },
    resetState(state) {
      Object.assign(state, initialstate());
    }
  },
  actions: {
    authLogin: ({commit, dispatch},payload) => {
      return new Promise((resovle, reject) => {
        httpClient.post('http://demo0415326.mockable.io/checkmock', payload).then((res) => {
          sessionStorage.setItem(btoa('_farmerEnterprise'), 'true');
          sessionStorage.setItem('isLoggedIn', true);
          if (res && res.data && res.data['userId'] && res.data['accessToken']) {
            commit('updateLogin', true);
            commit('updateTokenResponse', res.data);
            dispatch('authTokenSuccess', res.data.accessToken);
            resovle(res.data);
          }
        },
          (err) => {
            console.log(err);
            reject(err);
          })
      })
    },
    authTokenSuccess: ({dispatch},token) => {
      return httpClient.get(`http://demo0415326.mockable.io/getfileConnections`).then(res => {
        if (res && res.data) {
          console.log(token)
          dispatch('authLoginSuccess', res.data)
        }
      })
    },
    authLoginSuccess:({commit}, payload) => {
      if (payload) {
        commit('updateUserResponse', payload)
        vm.$router.push("/home/kycs");
      }
    },
    authLogout: ({commit}) => {
      sessionStorage.clear();
      localStorage.clear();
      commit('resetState');
      vm.$router.push("/login");
    }
  },
  modules: {
  },
  getters: {
    tokenResponse: state => state.tokenResponse,
    userName: state => state.userResponse.principal.userName,
    isLoading: state => state.loading
  }
})
