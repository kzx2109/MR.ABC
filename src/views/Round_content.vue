<template>
   <div class="w-1/4 h-full m-4 flex flex-col items-center justify-center">
        <div class="w-[180px] md:w-[128px] xl:w-[180px] h-[180px] md:h-[128px] xl:h-[180px] rounded-full border-white border-2 flex flex-col">
            <slot name="photo"></slot>
        </div>
        <div class="bg-[#76767681] text-center w-[100px] md:w-full rounded-md  my-2 xl:my-3 py-2 px-1 xl:px-10">
            <div class="text-white text-base  xl:text-xl ">
                <slot name="title"></slot>
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