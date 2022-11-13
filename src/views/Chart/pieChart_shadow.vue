<template>
    <div class="w-[45%]" >
        <canvas id="mychart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getunitNum } from '@/service/mempractice';
export default {
    data(){
        return{
            memberId:localStorage.getItem("memberId"),
            kindId:1,
            num:0
        }
    },
    methods:{
        getNum(){
            getunitNum({
                memberId:this.memberId,
                kindId:this.kindId
            }).then((res)=>{
                // this.read=res
                this.num=res.data.toString();
                this.num=this.num*10
                // console.log(this.num);
                this.getchart();
            })
        },
        getchart(){
            
            const ctx =document.getElementById('mychart');
            const mychart = new Chart(ctx, {
                
            type: 'pie',
            data: {
                labels: [
                    'Completed',
                    'Uncompleted',
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [this.num,100-this.num],
                    backgroundColor: [
                    'rgb(60, 83, 153)',
                    'rgb(104, 108, 120)',
                    ],
                    hoverOffset: 4
                }]
                
            },
        });
            return mychart;
        }
    },
    watch:{
        num:function(){
            // this.$data._chart.update();
        }
    },
    mounted(){
        this.getNum();
    },
    
}
</script>

<style>

</style>