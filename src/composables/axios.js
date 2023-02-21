
import axios from 'axios';

export const myAxios = axios.create({
    withCredentials: false,
    baseURL: "https://server-crudapp.onrender.com/"
})
