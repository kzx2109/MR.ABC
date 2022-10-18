<template>
    <div class="w-full h-full my-48 flex justify-center items-center flex-col">
        <div class=" relative w-[70%] ml-12 flex flex-col justify-center items-center">
            <img :src="require('@/assets/Vectary.png')"> <!-- top-[500px] left-[500px] -->
            <three3DVue></three3DVue>
            <!-- <div class="absolute mt-48 text-white text-7xl">And Now ... </div> -->
            
        </div>
        <div class="w-full flex justify-center ">
            <router-link to="/login">
                <div class="border-4 shadow-md shadow-slate-900 border-[#000000]  text-white relative cursor-pointer text-2xl md:text-4xl xl:text-6xl p-2 md:p-4">
                    Get Start !
                </div>
            </router-link>
                
            </div>
    </div>
</template>

<script>
import three3DVue from '../three3D.vue'
export default {
   components:{
    three3DVue
   }
}
</script>

<style>

</style>