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
export function getAvgbyDay(contents){
    const api = `${apiUrl}/getavgbyday`;
    const content = {
        memberId:contents.memberId
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getAvgIBC(contents){
    const api =`${apiUrl}/getavgibc`;
    const content={
        memberId:contents.memberId,
        kindId:contents.kindId
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getcompletion(contents){
    const api = `${apiUrl}/getcompletion`;
    const content={
        memberId:contents.memberId,
        kindId:contents.kindId
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getTimes(contents){
    const api = `${apiUrl}/gettimes`;
    const content={
        memberId:contents.memberId,
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}

