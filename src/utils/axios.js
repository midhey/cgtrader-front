import axios from "axios";

const apiInstance = axios.create({
    baseURL : 'http://localhost:8070/' ,
    timeout : 50000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default apiInstance;