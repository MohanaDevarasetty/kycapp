import Vue from 'vue'
import Vuex from 'vuex'

import httpClient from '../shared/services/httpClient';
import {vm} from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    logoutPopUpActive: false,
    loginFailed: false,
    loggedIn: false,
    loadedPrivileges: false,
    tokenResponse: {
      userId: '',
      accessToken: '',
      tokenType: '',
      refreshToken: '',
      expiresIn: 0,
      scope: ''
    },
    userResponse: {
      authorities: [],
      details: {
        remoteAddress: '',
        sessionId: '',
        tokenValue: '',
        tokenType: '',
        decodedDetails: ''
      },
      authenticated: false,
      userAuthentication: {
        authorities: [],
        details: {
          grant_type: '',
          username: ''
        },
        authenticated: false,
        principal: {},
        credentials: '',
        name: ''
      },
      principal: {},
      credentials: '',
      oauth2Request: {
        clientId: '',
        scope: [],
        requestParameters: {
          grant_type: '',
          username: ''
        },
        resourceIds: [],
        authorities: [],
        approved: false,
        refresh: false,
        redirectUri: '',
        responseTypes: [],
        extensions: {},
        refreshTokenRequest: '',
        grantType: ''
      },
      clientOnly: false,
      name: ''
    },
    mfaUserId: 0
  },
  mutations: {
    updateLogin(state, payload) {
      state.loading = payload;
    },
    updateTokenResponse(state, payload) {
      state.loading = true;
      state.tokenResponse = payload;
    },
    updateUserResponse(state, payload) {
      state.loading = true;
      state.loggedIn = true;
      state.userResponse = payload;
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
    }
  },
  modules: {
  },
  getters: {
    tokenResponse: state => state.tokenResponse,
    userName: state => state.userResponse.principal.userName
  }
})
