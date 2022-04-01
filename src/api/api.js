import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.englishpatient.org/',
    headers: {}
});

export const authAPI = {
    async me() {
        return await instance.get(`users/me`);
    },

    async login(email, password) {
        return await instance.post(`login`, { email, password })
    },
}