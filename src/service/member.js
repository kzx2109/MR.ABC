import axios from "axios";
// import { content, content } from "tailwindcss/defaultTheme";

const userAxios = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
});
const apiUrl = "http://127.0.0.1:8000/api";

export function members(){
    return userAxios.get(`${apiUrl}/members`);
};
  // 通常 function 名稱會和 API 網址一樣，方便使用
// contents為畫中觸發此function要傳入的內容
export function getmemberId(contents){
    const api =`${apiUrl}/getmemberid`;
    const content={
        // memberId:conetnts.memberId,
        memberAccount:contents.memberAccount,
        memberPassword:contents.memberPassword
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    });
};
export function getmemberData(contents){
    const api =`${apiUrl}/getmemberdata`;
    const content={
        memberId:contents.memberId,
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    });
}
export function updateEmail(contents){
    const api =`${apiUrl}/updatemail`;
    const content={
        memberId:contents.memberId,
        memberEmail:contents.memberEmail,
        // memberPassword:contents.memberPassword,
        // memberGender:contents.memberGender,
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    });
}
export function updateGender(contents){
    const api=`${apiUrl}/updategender`;
    const content={
        memberId:contents.memberId,
        memberGender:contents.memberGender
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function getmemberPassword(contents){
    const api = `${apiUrl}/getmemberpassword`;
    const content={
        memberId:contents.memberId,
        memberPassword:contents.memberPassword
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}
export function updatePassword(contents){
    const api =`${apiUrl}/updatepassword`;
    const content={
        memberId:contents.memberId,
        memberPassword:contents.memberPassword
    };
    return userAxios.post(api,content).then((res)=>{
        return res;
    })
}