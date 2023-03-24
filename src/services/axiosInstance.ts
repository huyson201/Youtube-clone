import axios from "axios";
import configs from "./youtubeApiConfigs";

declare module 'axios' {
    export interface AxiosRequestConfig {
        _retry?: boolean
    }
}

const axiosInstance = axios.create({
    baseURL: configs.baseUrl,
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        key: "AIzaSyCya4NAMr4jQU4bzP45iRFfC4xlFtGpHLo"
    }
})


export default axiosInstance;
