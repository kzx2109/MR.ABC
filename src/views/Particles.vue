<template>
    <div>
        <vue-particles
            class="fixed mt-20 w-[100%] h-[100%] bg-[#16324F]"
            color="#39AFFD"
            :particleOpacity="0.7"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            lineColor="#8DD1FE"
            :lineWidth="1"
            :lineLinked="true"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:true,
            hasRun:false
        }
    },
    methods:{
        show(){
            setInterval(this.isShow=!this.isShow)
        },
    },
    mounted(){
        this.show();

    }
   
}

</script>

<style  >
.fade-1-enter-active,
.fade-1-leave-active{
    transition:opacity 4s;
}
.fade-1-enter,
.fade-1-leave-to{
    opacity: 0;
}
.fade-2-enter-active,
.fade-2-leave-active{
   
    transition:opacity 4s ;
    
}

.fade-2-enter,
.fade-2-leave-to{
      /* transition-delay: 30s; */
      
    opacity: 0;
}
</style>