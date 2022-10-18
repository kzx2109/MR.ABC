<template>
    <div class="w-full h-full">
        <!-- flex justify-center -->
        <div class="my-4 flex items-center flex-col">
            <div class="flex justify-center">
                <div class=" w-full h-full flex justify-center text-base font-bold border-2 rounded-xl border-black m-2  p-2">
                     <slot name="title"></slot>
                </div>
            </div>
            <slot name="chart"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>