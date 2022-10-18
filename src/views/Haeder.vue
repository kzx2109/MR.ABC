<template>
    <div class="z-50 fixed w-full h-[10%] md:h-1/12 p-2  flex flex-row border-b-2 bg-[#16324F]">
        <div class="w-1/2  md:w-1/3 h-full  text-xl font-bold text-[#FFFFFF]">
            <div class="w-full md:w-1/2 mx-2 flex  items-center h-full cursor-pointer">
                <router-link :to="'/'"><img class="w-36" src="@/assets/LOGO-no.png"></router-link>
            </div>
        </div>

        <div class="w-2/3 h-full items-center  font-bold flex justify-end">
            <!--  -->
            <a class="flex md:text-xl mx-4 my-6  xl:text-2xl"  v-if="this.fullWidth>768">
                <div class="text-[#FFFFFF] mx-4 cursor-pointer ">Subscribe</div>
                <div class="text-[#FFFFFF] mx-4 cursor-pointer"><router-link :to="'/login'">Login</router-link></div>
                <div class="text-[#FFFFFF] mx-4 cursor-pointer"><router-link :to="'/register'">Register</router-link></div>
            </a>
            <a v-else>
                <div class="w-1/2 md:w-2/3 h-full m-4 items-center  text-xl font-bold flex  flex-row justify-end">
                    <div class=" cursor-pointer">
                        <svg class="w-9 text-white" viewBox="0 0 24 24"  @click="show = !show">
                            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                        </svg>
                    </div>
                    <div class="relative">
                        <div v-show="show" class="absolute right-0 py-2 mt-12 rounded-md shadow-xl ">
                            <router-link to="" class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                            Subscribe
                            </router-link>
                            <router-link to="/login" class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                            Login
                            </router-link>
                            <router-link to="/register" class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100">
                            Register
                            </router-link>
                           
                        </div>
                    </div>
                </div>
            </a>          
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fullWidth:0,
            fullHieght:0,
            show:false
        }
    },
    methods:{
        getWidth(){
            this.fullWidth =window.innerWidth
            window.onresize=()=>{
                this.fullWidth=window.innerWidth
            }
            // console.log(this.fullWidth);
            
        },
      
    },
    mounted(){
      
        this.getWidth()
        
    }
}
</script>

<style>

</style>