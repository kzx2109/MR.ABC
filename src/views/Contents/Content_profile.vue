<template>
    <div class="w-full h-full flex flex-col justify-center items-center my-8 xl:my-12 2xl:my-20">
        <div   class="w-4/5 xl:w-2/3 h-full relative flex flex-col bg-[#76767681] rounded-md ">
            <div class="m-2 px-2 py-4 text-center md:text-left text-[#9dccf7] text-base md:text-lg  border-b-2">My Profile</div>
            <!--"-->
            <!-- Account {item.memberAccount}}v-for="item in mData" :key="item.ID"-->
            <Member_field :getAccount="memberAccount">
            </Member_field>
            <!-- Email -->
            <div class="w-full h-1/6 flex flex-row justify-center items-center my-5">
                <div class="w-1/4 flex text-base md:text-lg text-white justify-end mx-6">
                    Email
                </div>
                <div class="w-2/4 h-full ">
                    <div class="w-2/3 flex justify-end">
                        <div class="text-white text-sm md:text-base px-2">{{this.memberEmail}}</div>
                    </div>
                </div>
                <div class="w-1/4"></div>
            </div>
            <!-- PW -->
            <Password_file :getPasswd="memberPassword">
            </Password_file>
            <!-- Gender -->
            <Gender_file :getGender="memberGender">
            </Gender_file>
            <!-- Title -->
            <div class="w-full h-1/6 flex flex-row justify-center items-center my-5">
                <div class="w-1/4 flex text-base md:text-lg text-white justify-end mx-6">
                    Title
                </div>
                <div class="w-2/4 h-full ">
                    <div class="w-2/3 flex justify-end">
                        <div class="text-white text-sm md:text-base px-2">{{this.memberTitle}}</div>
                    </div>
                </div>
                <div class="w-1/4"></div>
            </div>
            <!-- CountDay -->
            <div class="w-full h-1/6 flex flex-row justify-center items-center my-5">
                <div class="w-1/4 flex text-base md:text-sm text-white justify-end mx-6">
                    Cumulative Login Days
                </div>
                <div class="w-2/4 h-full ">
                    <div class="w-2/3 flex justify-end">
                        <div class="text-white px-2">{{this.memberDCount}}</div>
                        <div class="text-white px-2">Days</div>
                    </div>
                </div>
                <div class="w-1/4"></div>
            </div>
                       
        </div>
    </div>
</template>

<script>
import Member_field from './Member_field.vue';
import Button from '../Button.vue';
import Gender_file from '../Profile/Gender_file.vue';
import BrithDay_file from '../Profile/BrithDay_file.vue';
import Password_file from '../Profile/Password_file.vue';
import { getmemberData } from '@/service/member';
export default {
    // props:{
    //     item:Object
    // },
    components: { Member_field, Button, Gender_file, BrithDay_file, Password_file },
    data(){
        return{
            isEdit:false,
            mData:[],
            memberId:localStorage.getItem("memberId"),
            memberAccount:"",
            memberEmail:"",
            memberPassword:"",
            memberGender:"",
            memberTitle:"",
            memberDCount:''
        }
    },
    methods:{
        memberData(){
            getmemberData({
                memberId:this.memberId
            }).then((res)=>{
                this.mData = res.data;
                // console.log(this.mData[0].memberDCount);
                this.memberEmail=this.mData[0].memberEmail;
                this.memberAccount=this.mData[0].memberAccount;
                this.Password=this.mData[0].memberPassword;
                this.memberGender=this.mData[0].memberGender;
                this.memberTitle=this.mData[0].memberTitle;
                this.memberDCount=this.mData[0].memberDCount;
            })
        }
    },
    mounted(){
        this.memberData();
    }
}
</script>

<style>

</style>