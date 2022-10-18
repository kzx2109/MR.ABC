<template>
    <div class="w-full h-full flex my-[212.5px] md:my-[261px] xl:my-[126px] justify-center items-center" :class="this.sWidth>760?'flex-row':'flex-col'">
        <!-- <div class="relative w-1/2 h-full flex md:my-30 xl:my-48 md:px-18 xl:px-36">
            <img  src="@/assets/Login_Logo.png">
        </div> -->
        <div class="relative w-1/2 h-full flex ">
            <div class="w-full h-full md:w-3/5 md:h-2/3 bg-[#76767681] flex flex-col  shadow-slate-50 rounded-md shadow-lg">
                <div class="text-[#9dccf7] font-black text-base xl:text-xl m-2 md:m-4">Login</div>
                <div class="flex flex-col justify-center items-center my-2">
                    <input type="text" placeholder="帳號"  class=" focus:border-white focus:outline-none w-4/5 xl:w-3/4  h-12 md:h-14 xl:h-16 my-2 xl:my-8 rounded-md bg-transparent border-2 text-[#cacaca] pl-4 border-[#cacaca]">
                    <input type="password" placeholder="密碼"  class=" focus:border-white focus:outline-none w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 my-8 rounded-md bg-transparent border-2 text-[#cacaca] pl-4 border-[#cacaca]">
                    <div class="hover:opacity-80 w-4/5 xl:w-3/4 h-12 md:h-14 xl:h-16 mt-3 mb-10 bg-[#9CB3C8] rounded-lg flex justify-center items-center text-lg font-bold cursor-pointer">登入</div>
                </div>
                <div class="w-full h-full flex">
                    <div class="w-1/3 h-full m-3">
                        <div class="h-full text-sm md:text-base cursor-pointer hover:text-white">忘記密碼</div>
                    </div>
                    <div class="w-2/3 h-full flex justify-end m-3 cursor-default">
                        <div class="text-sm md:text-base">新教師？</div>
                        <div class="text-[#9dccf7] text-sm md:text-base cursor-pointer hover:text-white"><router-link :to="'/register'">註冊</router-link></div> 
                    </div>                          
                    </div>
           
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            sWidth:0,
            
            
        }
    },
    methods:{
        getWidth(){
            this.sWidth =window.innerWidth
            window.onresize=()=>{
                this.sWidth=window.innerWidth
            }
            
        }
    },
    mounted(){
      
        this.getWidth()
        
    }

}
</script>

<style>

</style>