import axios from "axios";

const API = axios.create({baseURL: `http://localhost:8800`})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }

    return req;
});
//?Auth
//?signup
export const signUp = async (formData) => {
    const response = await API.post(`/user/signup`, formData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}
//?login
export const signIn = async (formData) => {
    const response = await API.post(`/user/signin`, formData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

export const logOut = () => {
    localStorage.removeItem("user")
}
