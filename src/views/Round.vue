<template>
    <div class="w-full h-full flex flex-col ">
        <div class="w-full h-1/2 justify-center items-center flex flex-col md:flex-row">
            <Round_content>
                <template #photo><img src="@/assets/D5badge.png"></template>
                <template #title>Cumulative<br> 5 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Cumulative 10 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Cumulative 15 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Cumulative 30 Days</template>
            </Round_content>
        </div>
        <div class="w-full h-1/2 justify-center items-center flex flex-col md:flex-row">
           <Round_content>
                <template #photo><img src=""></template>
                <template #title>Continuously <br>5 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Continuously 10 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Continuously 15 Days</template>
            </Round_content>
            <Round_content>
                <template #photo><img src=""></template>
                <template #title>Continuously 30 Days</template>
            </Round_content>
        </div>
        
        
        
    </div>
</template>

<script>
import Round_content from './Round_content.vue';
export default {
    components: { Round_content }
}
</script>

<style>

</style>