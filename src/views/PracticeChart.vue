<template>
    <div class="flex flex-col w-full h-full"> 
        <Header_After></Header_After>
        <particles></particles>
        <Mainboard>
            <template #left>
                <Dashboard_left></Dashboard_left>
            </template>
            <template #right>
                <Content_practice></Content_practice>
            </template>
        </Mainboard>
    </div>
</template>

<script>
import Header_After from './Header_After.vue';
import Particles from './Particles.vue';
import Mainboard from './Mainboard.vue';
import Dashboard_left from './DashBoard/Dashboard_left.vue';
import Content_practice from './Contents/Content_practice.vue';
export default {
    components: { Header_After, Particles, Mainboard, Dashboard_left, Content_practice }
}
</script>

<style>

</style>