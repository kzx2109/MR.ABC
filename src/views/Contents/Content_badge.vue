<template>
    <div class="w-full h-full my-24">
        <div class="w-full h-full flex flex-col justify-center items-center my-8 xl:my-12 2xl:my-20">
            <div class="w-2/3 h-full relative flex flex-col rounded-md ">
                <Round></Round>
            </div>
        </div>
    </div>
</template>

<script>
import Round from '../Round.vue';

export default {
    components: { Round }
}
</script>

<style>

</style>