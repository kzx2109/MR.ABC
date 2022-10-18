<template>
    <div class="w-full h-full my-5">
         <div class="w-full h-1/6 flex flex-row justify-center items-center">
            <div class="w-1/4 flex text-base md:text-lg text-white justify-end  mx-6">
                Modify Password
            </div>
            <div class="w-2/4 h-full">
                <div class="w-2/3 text-end p-2 text-white">
                    <span v-if="!this.isEdit"></span>
                    <input type="password" class="form-control flex justify-items-center w-full h-2/3 px-3 py-1.5 text-base
                                              font-normal  text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300
                                              rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                              focus:outline-none" v-else name="data">
                    
                </div>
            </div>
            <div class="w-1/4">
                <svg v-if="!isEdit" @click="isEdit=!isEdit" class="cursor-pointer w-6 h-6  hover:text-[#9dccf7] text-white" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" @click="isEdit=!isEdit" class="cursor-pointer w-6 h-6 bi bi-check2 text-white" fill="currentColor"  viewBox="0 0 16 16"> <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/> </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isEdit:false,
            word:'22222',
            getword:''
        }
    },
    props:{
        getPasswd:String
    },
    methods:{
        re(){
            // const newstr=this.getPasswd.replace(/2/g,"*");
            // for(var i=0;i<this.word.length;i++){
            //    return this.getword.concat("*",this.getword);
            // } 
            // console.log();
            // return this.word.length;
            // return this.word.replace(this.word.substring(0),'*');
        }
    }

}
</script>

<style>

</style>