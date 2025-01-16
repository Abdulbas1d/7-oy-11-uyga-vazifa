import axios from "axios";

export const registerApi = axios.create({
    baseURL: "https://auth-rg69.onrender.com/api/"
})