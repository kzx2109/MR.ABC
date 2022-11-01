<template>
<!-- :class="this.isAppear==false?'hidden':''" -->
    <div class="relative  w-full md:w-2/3 h-full flex justify-center items-center" >
        <div class="bg-[#5F758A] w-full h-[350px] md:h-[500px] flex-col flex"  :class="this.father==false?'hidden':''">
                <div class="flex w-full h-1/6">
                    <!-- <span  class="w-1/2 h-full p-4 text-lg font-black">{{year}}/{{month}}/{{day}}</span> -->
                    <span  class="w-1/2 h-full p-4 text-lg font-black">{{this.clickyear}}/{{this.clickmonth}}/{{this.clickday}}</span>
                    <div class="w-1/2 h-full flex justify-end" >  
                        <svg xmlns="http://www.w3.org/2000/svg" @click="clickchild()"  fill="currentColor" class="w-14 h-14 cursor-pointer bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
                    </div>
                </div>
                <!--  -->
                <div class="w-full px-6 h-2/3 flex justify-center items-center overflow-y-auto" id="style-3">
                    <div class="w-full flex h-full  underline whitespace-pre-line underline-offset-4 leading-10 text-base md:text-lg ">
                        <a v-if="!isEdit">{{upfeedback}}</a>
                        <textarea v-model="upfeedback" v-else class="block w-full px-3 py-1.5 text-lg font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                         rows="3"></textarea>
                    </div>   
                </div>
                <div class="h-1/6 w-full flex my-2">
                    <div class="h-full w-11/12 flex items-center justify-center">
                        <StarRating :starnum="star" :clickd="clickday" :clicky="clickyear" :clickm="clickmonth"></StarRating>
                    </div>
                    <div class="h-full w-1/12 flex items-center justify-end px-2">
                        <div class="hover:bg-slate-800 hover:text-white cursor-pointer border-2 rounded-md border-black">
                          <a v-if="!isEdit" @click="isEdit=!isEdit" class="py-1 px-2">Edit</a>
                           <a v-else @click="updatefeedback()" class="py-1 px-2">Confirm</a>
                        </div>
                    </div>
                </div>
            </div> 
    </div>
</template>

<script>
import StarRating from "./StarRating.vue";
export default {
    props: {
        father: {
            default: Boolean
        },
        clickday:{
            default:String
        },
        clickmonth:{
            default:String
        },
        clickyear:{
            default:String
        } ,
        feedback:{
            type:String
        },
        star:{
            default:0
        },
        clickdate:{
            default:String
        }

    },
    data() {
        return {
            fatherValue: {
                default: Boolean
            },
            day:"",
            month:"",
            year:"",
            isEdit:false,
            memberId:localStorage.getItem("memberId"),
            diaryDate:"",
            diaryFeedback:"",
            diaryStar:"",
            upfeedback:this.feedback,
            keepfeedback:"",
            keepinput:false
        };
    },
    watch: {
        'feedback': function(newVal) {
            this.upfeedback = newVal;
        }
    },
    methods: {
        clickchild() {
            this.fatherValue = this.father;
            this.fatherValue = !this.fatherValue;
            console.log(this.fatherValue);
            this.$emit("chlid", this.fatherValue);
        },
        updatefeedback(){
            this.isEdit = !this.isEdit;
            this.$emit("updatefeedback", this.upfeedback);
        },
    },
    components: { StarRating },
}
</script>

<style>
/* //捲軸底色 */
#style-3::-webkit-scrollbar-track {
  
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
}
/* //捲軸寬度 */
#style-3::-webkit-scrollbar {

  width: 10px;
  background-color: black;
}
/* //捲軸本體顏色 */
#style-3::-webkit-scrollbar-thumb {
  background-color: #8c8c8c;
}
</style>