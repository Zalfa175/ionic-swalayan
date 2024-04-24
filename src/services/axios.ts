import  Axios  from "axios";
import { token } from "./user";
import { watch } from "vue";
import { watchIgnorable } from "@vueuse/core";

export const axios = Axios.create({
    baseURL: 'http///127.0.0.1:8000/api/',
    timeout: 10000,
});

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Authorization'] = 'Bearer' + token.value;

watch(token, (newVal) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + token.value;
    console.log({"New token" : 'Bearer' + token.value})
});