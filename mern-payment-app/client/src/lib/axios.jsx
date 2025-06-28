import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Automatically attach token if available
API.interceptors.response.use(
    res => res,
    err => {
        if (err.response?.status === 401 || err.response?.status === 403) {
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
);


export default API;
