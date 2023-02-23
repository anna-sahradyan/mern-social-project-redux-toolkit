import axios from 'axios'

const API_URL = '/user/';
//? Register user
const register = async (formData) => {
    const response = await axios.post(API_URL, formData)

    if (response.data) {
        localStorage.setItem('profile', JSON.stringify(response.data))
    }

    return response.data
}
const authService = {
    register,

}

export default authService;