<template>
    <div class="w-full h-full my-5">
         <div class="w-full h-1/6 flex flex-row justify-center items-center">
            <div class="w-1/4 flex text-base md:text-lg text-white justify-end  mx-6">
                <slot name="title"></slot>
            </div>
            <div class="w-2/4 h-full">
                <div class="w-2/3 text-end p-2 text-white">
                    <slot v-if="!this.isEdit" class="" name="data"></slot>
                    <a v-else >
                        <div class="box">
                            <section>
                                <!-- <p>date (default)</p> -->
                                <date-picker
                                    v-model="value1"
                                    format="YYYY-MM-DD"
                                    type="date"
                                    placeholder="Select date"
                                    class="w-[130px] md:w-full"
                                ></date-picker>
                            </section>
                        </div>
                    </a>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    components:{DatePicker},
    data(){
        return{
            isEdit:false,
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
        }
    }

}
</script>

<style>

</style>