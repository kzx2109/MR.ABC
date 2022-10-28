<template>
    <div class="z-50 fixed w-full h-[8%] md:h-[10%]  flex flex-row border-b-2 bg-[#16324F]">
        <div class="w-1/2  md:w-1/3 h-full text-xl font-bold items-center   text-[#FFFFFF]">
            <div class="w-full md:w-1/2 mx-2 h-full flex  items-center">
                <img class="w-28 md:w-36" src="@/assets/LOGO-no.png">
            </div>
        </div>
        <div class="w-2/3 h-full items-center  mx-4  flex  flex-row justify-end">
            <div class="flex my-2 cursor-pointer">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" text-white w-10 md:w-12  mx-2 bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg> -->
                        <svg class="text-white w-10 md:w-12  mx-2" viewBox="0 0 24 24"  @click="show = !show">
                            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                        </svg>
                <!-- <div class="md:hidden text-white flex text-xs flex-col p-2 justify-start font-bold">
                    <div >Kitty</div>
                    <div>EMI Student</div>
                </div> -->
                
            </div>
            <div class="relative text-xl font-bold">
                <div v-show="show" class="absolute right-0 py-2 mt-12 rounded-md shadow-xl w-44">
                    <div class="text-white flex text-xs flex-col p-2 justify-start font-bold">
                        <div>{{this.memberAccount.charAt(0).toUpperCase()+this.memberAccount.slice(1)}}</div>
                        <div>{{this.memberTitle}}</div>
                    </div>
                    <router-link to="/home" class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                    Practice chart
                    </router-link>
                    <router-link to="/profile" class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                    Profile
                    </router-link>
                    <router-link to="/diray" class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                    Diary
                    </router-link>
                    <router-link to="/badge" class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                    Badge
                    </router-link>
                    <div @click="Signout()"  class="cursor-pointer block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                        Sign out
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { members,getmemberData } from '@/service/member';
export default {
    data(){
        return{
            show:false,
            Data:[],
            memberAccount:'',
            memberId:0,
            memberTitle:'',
            
        }
    },
    methods:{
        Signout(){
            localStorage.clear()
            this.$router.push('/');
        },
        memberData(){
            getmemberData({
                memberId:localStorage.getItem("memberId")
            }).then((res)=>{
                this.memberAccount=res.data.memberAccount;
                this.memberTitle=res.data.memberTitle;
                
            })
        },

    },
    mounted(){
       this.memberData();
    }

}
</script>

<style>

</style>