<template>
    <div class="w-full h-full flex flex-col ">
        <Haeder ></Haeder>
        <Particles></Particles>
        <!-- <FrameVue 
        data-aos-easing="ease-in-back" data-aos-anchor-placement="top-center" data-aos-duration="1000"></FrameVue> -->
       <!-- <Frame></Frame> -->
       <Frame_Login ></Frame_Login>
    </div>
</template>

<script>

import Particles from './Particles.vue'
import Haeder from './Haeder.vue';
import Frame_Login from './Frame_Login.vue';

export default {
    components:{
        Particles,
        Haeder,
        Frame_Login
    },
  
}
</script>

<style>

</style>