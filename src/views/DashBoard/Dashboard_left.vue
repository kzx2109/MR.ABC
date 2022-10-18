<template>
    <div class="w-full h-full px-12 py-10 md:flex justify-center items-center hidden">
         <div class="relative w-full h-96 flex flex-col justify-evenly text-white">
             <div class="flex w-full h-1/2 flex-row items-center ">
                <div class="w-1/3 h-full flex justify-center items-center">
                    <!-- <img class="w-1/2 h-2/3 xl:w-full xl:h-2/3"width="20" height="20"  @click="show = !show"  src="@/assets/user.png"> -->
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-10 bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg>
                </div>
                <div class="w-2/3 flex justify-center flex-col h-full">
                    <div class="p-2 text-xl font-black">Kitty</div>
                    <div class="px-2 text- ">EMI Student</div>
                </div>
            </div>
            <div class="w-full h-1/2">
                <div class="cursor-pointer px-2 py-2 text-lg hover:bg-indigo-400 hover:translate-x-6 hover:shadow-xl rounded-md "><router-link :to="'/home'">Practice Chart</router-link></div>
                <div class="px-2 py-2 text-lg  hover:bg-indigo-400 hover:translate-x-6 hover:shadow-xl cursor-pointer rounded-md "><router-link :to="'/profile'">Profile</router-link></div>
                <div class="px-2 py-2 text-lg  hover:bg-indigo-400 hover:translate-x-6 hover:shadow-xl cursor-pointer rounded-md "><router-link :to="'/diray'">Diary</router-link></div>
                <div class="px-2 py-2 text-lg  hover:bg-indigo-400 hover:translate-x-6 hover:shadow-xl cursor-pointer rounded-md "><router-link :to="'/badge'">Badge</router-link></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>