import httpClient from './httpClient';


function login(loginDetails) {
    return httpClient.post('', loginDetails);
}

function signUp(signUpDetails) {
    return httpClient.post('', signUpDetails);
}

function signUpVerification(signUpDetails) {
    return httpClient.post('', signUpDetails);
}

function getUserDetails(){
    return httpClient.get('');
}

export default {
    login,
    signUpVerification,
    signUp,
    getUserDetails
}
