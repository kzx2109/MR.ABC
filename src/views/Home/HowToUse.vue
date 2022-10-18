<template>
    <div class="w-full h-full my-40 md:my-48 xl:my-56">
        <div data-aos-easing="linear" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos="fade-down" 
            class="relative flex justify-center items-center text-5xl md:text-7xl xl:text-8xl p-10  font-mono text-white">
            How To Use</div>
        <!-- <div class="flex flex-row items-center">
            <div data-aos="flip-down" data-aos-anchor-placement="top-center" data-aos-easing="" data-aos-duration="1500"
             class=" relative w-1/3 items-center h-full text-white  font-semibold flex flex-col justify-evenly">
                <div class="text-base md:text-3xl xl:text-4xl py-8 md:py-10 xl:py-20">HoloLens View</div>
                <div class="text-base md:text-3xl xl:text-4xl py-10 md:py-14 xl:py-20">自我評分</div>
                <div class="flex flex-col items-center text-base md:text-3xl xl:text-4xl py-10 md:py-14 xl:py-20">
                    <div class="p-2">Learing Progress</div>
                    <div>學習進度</div>
                </div>
            </div>
            <div class="w-2/3 h-full flex justify-center">
                <div class="w-5/6  h-[400x] bg-slate-600">1</div>
            </div>
            
        </div>
         -->
         <div class="relative flex justify-center items-center w-full my-20 h-full ">
            <div class="absolute w-2/3 h-full ">
                <div class="w-full flex flex-row items-end h-1/6">
                    <div class="w-1/5 rounded-t-lg cursor-pointer flex justify-center items-center bg-[#76767681]" @click="click1()" :class="isHeight1==true?'h-24':'h-16'" >
                        <div class="text-white text-xl">View</div>
                    </div>
                    <div class="w-1/5 rounded-t-lg flex justify-center items-center cursor-pointer bg-[#76767681]" @click="click2()" :class="isHeight2==true?'h-24':'h-16'">
                        <div class="text-white text-xl">Self-Rating</div>
                    </div>
                    <div class="w-1/5  rounded-t-lg flex justify-center items-center cursor-pointer bg-[#76767681]" @click="click3()" :class="isHeight3==true?'h-24':'h-16'">
                        <div class="text-white text-lg ">Learning Situation</div>
                    </div>
                </div>
                <div class="w-full h-5/6 bg-[#76767681]">
                    2222
                </div>
            </div>
         </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            isHeight1:false,
            isHeight2:false,
            isHeight3:false,
        }
    },
    methods:{
        click1(){
            this.isHeight1=true
            console.log(this.isHeight1); 
            if(this.isHeight1==true){
                this.isHeight2=false
                this.isHeight3=false
            }
        },
        click2(){
            this.isHeight2=true
            console.log(this.isHeight1); 
            if(this.isHeight2==true){
                this.isHeight1=false
                this.isHeight3=false
            }
        },
        click3(){
            this.isHeight3=true
            console.log(this.isHeight1); 
            if(this.isHeight3==true){
                this.isHeight2=false
                this.isHeight1=false
            }
        },

        
    },
    mounted(){
        // this.change()
        // this.click()
    }
}
</script>

<style scoped>
.activeHigh{
    height:160px ;
}
.activeLow{
    height:80px ;
}

</style>