import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// ✅ Attach token to all requests
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// ✅ Redirect to login on 401/403
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
