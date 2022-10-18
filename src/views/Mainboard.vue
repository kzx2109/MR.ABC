<template>
    <div class="flex w-full h-full mt-24">
        <div class="w-0 md:w-1/6 h-full  ">
            <slot name="left"></slot>
        </div>
        <div class="w-full md:w-5/6 h-full flex ">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>