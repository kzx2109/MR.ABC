<template>
    <div class="flex flex-col w-full h-full">
        <Header_After></Header_After>
        <Particles></Particles>
        <Mainboard>
            <template #left>
                <Dashboard_left></Dashboard_left>
            </template>
            <template #right>
                <Content_pw></Content_pw>
            </template>
        </Mainboard>
    </div>
</template>

<script>
import Header_After from '../Header_After.vue';
import Particles from '../Particles.vue';
import Mainboard from '../Mainboard.vue';
import Dashboard_left from '../DashBoard/Dashboard_left.vue';
import Content_pw from './Content_pw.vue';
export default {
    components: { Header_After, Particles, Mainboard, Dashboard_left, Content_pw }
}
</script>

<style>

</style>