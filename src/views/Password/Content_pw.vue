<template>
    <div class="w-full h-full flex flex-col justify-center items-center mt-16 xl:my-12 2xl:my-36">
        <div class="w-4/5 xl:w-2/3 h-full relative flex flex-col bg-[#76767681] rounded-md" >
            <div class="text-[#9dccf7] font-black text-base  xl:text-xl m-3 md:m-4">
                Modify Password
            </div>
            <div class="flex flex-col items-center mx-10 my-2">
                <div class="w-3/5 text-white text-sm mb:text-lg">
                    Input your new Password
                </div>
                <!-- 輸入新密碼  -->
                <input type="password" placeholder="new password" ref="newValue"
                class="focus:border-white focus:outline-none w-4/5 md:w-3/5 h-10 my-4 mb:my-8 rounded-md bg-transparent
                 border-2 text-[#cacaca] pl-4 border-[#cacaca]" >
            </div>
            <div class="flex flex-col items-center mx-10 my-2">
                <div class="w-3/5 text-white text-sm mb:text-lg">
                    Check your new Password
                </div>
                <!-- 確認密碼  -->
                <input type="password" placeholder="press password again" ref="checkValue" 
                class="focus:border-white focus:outline-none w-4/5 md:w-3/5 h-10  my-4 mb:my-8 rounded-md bg-transparent
                 border-2 text-[#cacaca] pl-4 border-[#cacaca]">
            </div>
            <div class="flex w-full h-full justify-center items-center">
                <div @click="checkValue()"  class="hover:opacity-80 text-sm md:text-base flex w-1/6 h-8 mt-3 mb-10 bg-[#9CB3C8] rounded-md  justify-center items-center  font-bold cursor-pointer">
                     Send
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { updatePassword ,getmemberData } from '@/service/member';

export default {
    date(){
        return{
            new:'',
            check:'',
            // memberId:localStorage.getItem("memberId"),
            memberPassword:'',
        }
    },
    methods:{
        checkValue(){
            this.new=this.$refs.newValue.value;
            this.check=this.$refs.checkValue.value;
            // console.log(this.new,this.check);
            if(this.new==''||this.check==''){
                alert("密碼或確認密碼尚未輸入");
            } else if(this.new!=this.check){
                alert("請確認密碼");
            }else{
                alert("成功");
                this.memberPassword=this.new
                updatePassword({
                    memberId:localStorage.getItem("memberId"),
                    memberPassword:this.memberPassword
                }).then((res)=>{
                    console.log(res.data);
                    location.href='/profile';
                })
            }
        }
    },
}
</script>

<style>

</style>