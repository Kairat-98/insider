import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://6648c9234032b1331bec6b65.mockapi.io',
});

export default axiosApi;