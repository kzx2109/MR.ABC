<template>
    <div class="w-full h-full my-40 md:my-48 xl:my-56  ">
        <div data-aos-easing="linear" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos="fade-down"
         class=" w-full h-full relative text-5xl md:text-7xl xl:text-8xl p-10 font-mono text-white flex justify-center items-center">Our Equipment</div>
        <div class="flex flex-row justify-evenly m-2 xl:m-20 " >
            <div data-aos="zoom-out" data-aos-easing="ease-in-out-sine" data-aos-duration="1000" data-aos-anchor-placement="top-center"
             class="w-[250px] md:w-[375px] xl:w-[500px] h-[250px] md:h-[375px] xl:h-[500px] rounded-xl"><img class="relative" :src="require('@/assets/HoloLens2D.png')"></div>
            <div data-aos="flip-down" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-back" data-aos-duration="1500" class="relative text-white text-xl md:text-3xl xl:text-4xl font-semibold flex flex-col items-center justify-evenly">
                <div>搭配 HoloLens</div>
                <div class="flex flex-col items-center">
                    <div>
                        混合實境
                    </div>
                    <div>
                        (Mixed Reality)
                    </div>
                </div>
                <div>虛實操作</div>
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