<template>
    <div class="w-full h-full my-5">
         <div class="w-full h-1/6 flex flex-row justify-center items-center">
            <div class="w-1/4 text-base md:text-lg flex text-white justify-end mx-6">
                Account
            </div>
            <div class="w-2/4 h-full">
                <div class="w-2/3 text-end p-2 text-white">
                    <span>{{getAccount}}</span>
                    <!-- <input type="text" class="form-control flex justify-items-center w-full h-full px-3 py-1.5 text-base
                                              font-normal  text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300
                                              rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                              focus:outline-none"  > -->
                </div>
            </div>
            <div class="w-1/4">
            </div>
        </div>
    </div>
</template>

<script>
import {updatememberData} from '@/service/member';
export default {
    data(){
        return{
            // isEdit:false
        }
    },
    props:{
        // item:Object
        getAccount:String
    },
    methods:{
        
    }

}
</script>

<style>

</style>