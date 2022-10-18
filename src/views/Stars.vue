<template>
    <div class="login-container">
       <star></star>
    </div>
</template>

<script>
import Star from './Star.vue';
export default {
    beforeCreate:function(){
        document.getElementsByTagName('body')[0].className = 'body-bg'
    },
    components: { Star }
}
</script>

<style>
.body-bg{
    background-attachment: fixed;
    overflow: hidden;
}
.login-container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #050608;
}
</style>