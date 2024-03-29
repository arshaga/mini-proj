import axios from "axios"

export const URL = "http://localhost:8990/form/"

const axiosPrivate = axios.create({
    baseURL: URL,
    withCredentials:true
});
export default axiosPrivate