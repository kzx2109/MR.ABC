<template>
    <div class="w-full h-full flex flex-col justify-center items-center my-36">
        <!-- :class="this.toast==false ? 'hidden':'' " -->
        <div class="relative w-2/3 md:w-2/5  xl:w-1/3 h-full p-2 md:p-4 bg-[#76767681] flex flex-col shadow-slate-50 rounded-md shadow-lg">
            <div class="m-2 text-[#9dccf7] text-lg font-black xl:text-xl">Register</div>
            <div class="flex justify-center items-center flex-col py-2">
                <input type="text" v-model="account" placeholder="Account" class="focus:text-white focus:border-white focus:outline-none w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 my-4 xl:my-8 rounded-md bg-transparent border-2 text-[#cacaca] pl-4 border-[#cacaca]">
                <input type="password" v-model="password" placeholder="Password" class="focus:text-white focus:border-white focus:outline-none w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 my-4  xl:my-8 rounded-md bg-transparent border-2 text-[#cacaca] pl-4 border-[#cacaca]">
                <input type="password" v-model="checkpassword" placeholder="再次確認" class="  focus:text-white focus:border-white focus:outline-none w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 my-4  xl:my-8 rounded-md bg-transparent border-2 text-[#cacaca] pl-4 border-[#cacaca]" :class="this.ischeck==false? 'border-red-600': 'border-[#cacaca]'" >
                <div @click="insert()" class="hover:opacity-80 w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 my-10 bg-[#9CB3C8] rounded-lg flex justify-center items-center text-lg font-bold cursor-pointer">註冊</div>
                <!-- <div class="w-96 h-12 text-[#9dccf7] mb-10 rounded-lg flex justify-center items-center text-lg font-bold cursor-pointer">-使用 Google 帳號登入-</div> -->
            </div>
            
        </div>
       
    </div>
</template>

<script>
import { insertMember,getmemberId } from '@/service/member';
export default {
    data(){
        return{
            account:'',
            password:'',
            checkpassword:'',
            ischeck:true,
            toast:false,
        }
    },
    methods:{
        insert(){
            if(this.password==this.checkpassword){
                insertMember({
                    memberAccount:this.account,
                    memberPassword:this.password
                }).then((res)=>{
                    alert("successfully");
                });
                getmemberId({
                    memberAccount:this.account,
                    memberPassword:this.password
                }).then((res)=>{
                    console.log(res.data[0]);
                    const key = res.data[0].memberId;
                    if(key){
                        localStorage.setItem('memberId',key);
                        this.$router.push('/home');
                        alert('將跳轉至首頁');
                    }
                    else{
                        alert('失敗');
                    };      
                })
            }else{
                this.ischeck=false;
            }
            
        }
    }
}
</script>

<style>

</style>