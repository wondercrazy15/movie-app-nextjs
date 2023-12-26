import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://movie-app-backend-j12g.onrender.com/api',
    // timeout: 1000,
});

export default Axios