import axios from "axios";
const userAxios = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
});
const apiUrl="http://127.0.0.1:8000/api";

export function getDiary(contents){
    const api=`${apiUrl}/getdiary`;
    const content={
        memberId:contents.memberId,
        diaryDate:contents.diaryDate
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getFeedback(contents){
    const api =`${apiUrl}/getfeedback`;
    const content = {
        memberId:contents.memberId,
        diaryDate:contents.diaryDate
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getStar(contents){
    const api =`${apiUrl}/getstar`;
    const content={
        memberId:contents.memberId,
        diaryDate:contents.diaryDate
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function updateFeedback(contents){
    const api = `${apiUrl}/updatefeedback`;
    const content = {
        memberId:contents.memberId,
        diaryDate:contents.diaryDate,
        diaryFeedback:contents.diaryFeedback
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
