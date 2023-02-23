import axios from "axios";

const API = axios.create({baseURL: `http://localhost:8800`})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
//?Auth
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);