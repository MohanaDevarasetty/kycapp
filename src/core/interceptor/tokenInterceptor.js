import httpClient from '../../shared/services/httpClient';

export default function setup() {
    httpClient.interceptors.request.use(function(config) {
        const token = 'test'
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}