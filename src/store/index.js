import Vue from 'vue'
import Vuex from 'vuex'

import { login, getUserDetails } from '../shared/services/authService'

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
      return {
        ...state,
        loading: payload
      }
    },
    updateTokenResponse(state, payload) {
      return {
        ...state,
        loading: true,
        loggedIn: false,
        tokenResponse: payload
      }
    },
    updateUserResponse(state, payload) {
      return {
        ...state,
        loading: true,
        loggedIn: true,
        userResponse: payload
      }
    }
  },
  actions: {
    authLogin(payload) {
      return new Promise(() => {
        login(payload).then(res => {
          sessionStorage.setItem(btoa('_farmerEnterprise'), 'true');
          if (res && res['userId'] && res['accessToken']) {
            this.commit(this.updateLogin, true);
            this.commit(this.updateTokenResponse, res).then(() => {
              this.dispatch('authTokenSuccess', res);
            });
          }
        })
          .catch(error => {
            console.log(error);
          });
      });
    },
    authTokenSuccess(context) {
      if (context.state.tokenResponse.accessToken) {
        return new Promise(() => {
          getUserDetails().then(res => {
            this.dispatch('authLoginSuccess', res);
          })
        })
      }
    },
    authLoginSuccess(context, payload) {
      if (context.state.tokenResponse.accessToken && payload) {
        this.commit('updateUserResponse', payload).then(() => {
          this.$router.push("/home/kycs");
        });
      }
    }
  },
  modules: {
  },
  getters: {

  }
})
