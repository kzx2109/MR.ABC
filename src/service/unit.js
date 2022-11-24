import axios from "axios";

const userAxios = axios.create({
    baseURL:"http://127.0.0.1:8000/api"
});
const apiUrl ="http://127.0.0.1:8000/api";
export function getstruAllcount(){
    return userAxios.get(`${apiUrl}/struallcount`);
}
