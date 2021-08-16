import httpClient from '../../shared/services/httpClient';

export default function setup() {
    httpClient.interceptors.response.use(
        response => {
            if (response.status === 200 || response.status === 201) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        error => {
            if (error.response.status) {
                switch (error.response.status) {
                    case 400:
                        alert("Bad Request");
                        break;
                    case 401:
                        alert("session expired");
                        break;
                    case 404:
                        alert('page not exist');
                        break;
                    case 500:
                        alert('Oops! Something went wrong');
                        break;
                    default:
                        alert('Oops! Something went wrong');
                        break;
                }
                return Promise.reject(error.response);
            }
        }
    );
}