<template>
    <div class="w-full h-full flex flex-col justify-center items-center my-8 xl:my-12 2xl:my-20">
        <div  class="w-4/5 xl:w-2/3 h-full relative flex flex-col bg-[#76767681] rounded-md ">
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
                        <span v-if="!this.isEdit" class="text-white text-sm md:text-base px-2">{{this.memberEmail}}</span>
                        <input type="email" v-else class="form-control flex justify-items-center w-full h-full px-3 py-1.5 text-base
                                              font-normal  text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300
                                              rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                              focus:outline-none" v-model="memberEmail">
                    </div>
                </div>
                <div class="w-1/4">
                    <svg v-if="!isEdit" @click="isEdit=!isEdit" class="cursor-pointer w-6 h-6  hover:text-[#9dccf7] text-white" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" @click="upEmail()" class="cursor-pointer w-6 h-6 bi bi-check2 text-white" fill="currentColor"  viewBox="0 0 16 16"> <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/> </svg>
                </div>
            </div>
            <!-- PW -->
            <Password_file>
            </Password_file>
            <!-- Gender -->
            <Gender_file :getGender="memberGender" @updateitem="updateItem" >
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
// import Bus from '@/service/bus';
import { getmemberData ,updateEmail,updateGender} from '@/service/member';
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
            memberDCount:'',
            getgenderitem:''
        }
    },
    methods:{
        memberData(){
            getmemberData({
                memberId:this.memberId
            }).then((res)=>{
                this.mData = res.data;
                console.log(res);
                this.memberEmail=this.mData.memberEmail;
                this.memberAccount=this.mData.memberAccount;
                this.memberGender=this.mData.memberGender;
                this.memberTitle=this.mData.memberTitle;
                this.memberDCount=this.mData.memberDCount;
            })
        },
        upEmail(){
            this.isEdit=!this.isEdit;
            // console.log(this.memberEmail);
            updateEmail({
                memberId:this.memberId,
                memberEmail:this.memberEmail
            }).then((res)=>{
                // this.memberEmail=res.memberEmail;
            });
        },
        updateItem(value){
            this.memberGender=value;
            updateGender({
                memberId:this.memberId,
                memberGender:this.memberGender
            }).then((res)=>{
                console.log(res);
                
            })
        },
        // elementPassword(){
        //     Bus.$emit('val',this.memberPassword);
        // }
    },
    mounted(){        
        this.memberData();
    }
}
</script>

<style>

</style>