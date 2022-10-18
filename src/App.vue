<template>
    <div id="app"  class=" bg-[#16324F]">
      <!-- <Particles></Particles> -->
       <router-view/>
    </div>
</template>

<script>
import Particles from './views/Particles.vue';
import Haeder from './views/Haeder.vue';

export default {
    components: { Particles, Haeder }
};
</script>
<style scoped>
/* body {
 background-color: #16324F; 
 font-family: "Microsoft JhengHei"; 
}

* {
  width: 100%;
  height: 100%;
  background-color: #16324F;
  padding: 0; 
  margin: 0; 
  box-sizing: border-box;
} */
* {
  background-color: #16324F; 
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%; 
}
</style>
