import axios from "axios";

const userAxios = axios.create({
    baseURL:"http://127.0.0.1:8000/api"
});
const apiUrl ="http://127.0.0.1:8000/api";

export function getunitNum(conetnts){
    const api = `${apiUrl}/getunitnum`;
    const content = {
        memberId:conetnts.memberId,
        kindId:conetnts.kindId
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}