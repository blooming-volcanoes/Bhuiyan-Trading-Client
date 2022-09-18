/* eslint-disable class-methods-use-this */
import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

class HttpReq {
    async get(url, config) {
        const { data } = await instance.get(url, config);
        return data;
    }

    async post(url, payload, config) {
        const { data } = await instance.post(url, payload, config);
        return data;
    }

    async put(url, payload, config) {
        const { data } = await instance.put(url, payload, config);
        return data;
    }

    async delete(url, config) {
        const { data } = await instance.delete(url, config);
        return data;
    }
}

const httpReq = new HttpReq();

export default httpReq;
