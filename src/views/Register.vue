<template>
  <div class="w-full h-full flex flex-col">
    <Haeder></Haeder>
    <Particles></Particles>
    <div>
      <Frame_register></Frame_register>
    </div>
    
  </div>
</template>

<script>
import Haeder from './Haeder.vue'
import Particles from './Particles.vue'
import Frame_register from './Frame_register.vue'
export default {
  components:{
    Haeder,
    Particles,
    Frame_register
}
}
</script>

<style>

</style>