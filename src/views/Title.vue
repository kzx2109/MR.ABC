<template>
    <div class="w-full h-full flex flex-row relative justify-center items-center my-40 md:my-48 xl:my-56">
        <div class="w-1/2 h-full flex justify-center items-center">
            <div class="w-full h-full opacity-50  drop-shadow-2xl"  data-aos="fade-right" data-aos-duration="600" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                <img :src="require('@/assets/Login_Logo.png')">
            </div>
        </div>
        <div class="flex flex-col text-white justify-center w-1/2 h-full">
            <div class="my-4 h-1/2 text-5xl md:text-7xl xl:text-8xl" data-aos-easing="linear" data-aos-delay="300"  data-aos-duration="500" data-aos="fade-down">MR.ABC </div>
            <div class="my-4 text-4xl h-1/2 md:text-6xl xl:text-7xl" data-aos-easing="linear" data-aos-delay="600" data-aos-duration="1000" data-aos="fade-down">EMI 教師訓練系統</div>
        </div>
    </div>
</template>

<script>
export default {
   
   
}

</script>

<style  >
.fade-1-enter-active,
.fade-1-leave-active{
    transition:opacity 4s;
}
.fade-1-enter,
.fade-1-leave-to{
    opacity: 0;
}
.fade-2-enter-active,
.fade-2-leave-active{
   
    transition:opacity 4s ;
    
}

.fade-2-enter,
.fade-2-leave-to{
      /* transition-delay: 30s; */
      
    opacity: 0;
}
</style>