const initialstate = () => {
    return {
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
    }
};

export default initialstate;