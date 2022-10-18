<template>
    <div class="flex flex-col w-full h-full">
        <Header></Header>
        <ParticlesVue></ParticlesVue>
        <Title></Title>
        <IntroduceVue></IntroduceVue>
        <EquipmentVue></EquipmentVue>
        <HowToUseVue></HowToUseVue>
        <SubscritionVue></SubscritionVue>
        <StartVue></StartVue>
        <Footer></Footer>
        <TOTop></TOTop>
    </div>
</template>
<script>
import TitleVue from './Title.vue'
import Header from './Haeder.vue'
import ParticlesVue from './Particles.vue'
import IntroduceVue from './Home/Introduce.vue'
import EquipmentVue from './Home/Equipment.vue'
import HowToUseVue from './Home/HowToUse.vue'
import SubscritionVue from './Home/Subscrition.vue'
import StartVue from './Home/Start.vue'
import Title from './Title.vue'
import Footer from './Footer.vue'
import TOTop from './TOTop.vue'
export default {
    components:{
        Header,
        ParticlesVue,
        IntroduceVue,
        EquipmentVue,
        HowToUseVue,
        SubscritionVue,
        StartVue,
        TitleVue,
        Title,
        Footer,
        TOTop
    }
}
</script>

<style>

</style>