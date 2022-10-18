<template>
    <div class="flex flex-col w-full h-full">
        <Header_After></Header_After>
        <Particles></Particles>
        <Mainboard>
            <template #left>
                <Dashboard_left></Dashboard_left>
            </template>
            <template #right>
                <Dashboard_right>
                    <Content_badge></Content_badge>
                </Dashboard_right>
            </template>
        </Mainboard>
    </div>
</template>

<script>
import Header_After from './Header_After.vue';
import Particles from './Particles.vue';
import Mainboard from './Mainboard.vue';
import Dashboard_left from "./DashBoard/Dashboard_left.vue";
import Dashboard_right from "./DashBoard/Dashboard_right.vue";
import Content_badge from './Contents/Content_badge.vue';
export default {
    components: { Header_After, Particles, Mainboard, Dashboard_left, Dashboard_right, Content_badge }
}
</script>

<style>

</style>