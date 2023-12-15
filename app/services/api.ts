import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

const get = async <T>(url: string) => {
    const response = await instance.get<T>(url);
    return response.data;
};

export default {
    get,
};
