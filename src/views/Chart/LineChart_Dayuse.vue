<template>
    <div class="w-[70%]">
        <canvas id="Dayuse"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getTimes } from '@/service/mempractice';
export default {
    data(){
        return{
            memberId:localStorage.getItem('memberId'),
            count:[],
            date:[]

        }
    },
    methods:{
        Times(){
            getTimes({
                memberId:this.memberId
            }).then((res)=>{
                console.log(res.data);
                for(let i =0;i<res.data.length;i++){
                    this.count[i]=res.data[i].count;
                    this.date[i]=res.data[i].practiceDate.split('-').join('/');
                  
                } 
                this.LineChart();
            })
        },
        LineChart(){
            const ctx = document.getElementById('Dayuse');
            const Dayuse = new Chart(ctx, {
                // labels : Utils.months({count: 7}),
                type: 'line',
                data: {
                    labels: [this.date[6],this.date[5],this.date[4],this.date[3],this.date[2],this.date[1],this.date[0],],
                    datasets: [{
                        label: 'Total Practice Time by Day',
                        data: [this.count[6],this.count[5],this.count[4],this.count[3],this.count[2],this.count[1],this.count[0]],
                        fill: false,
                        borderColor: 'rgb(25, 45, 105)',
                        tension: 0.1,
                        backgroundColor:'rgb(4, 15, 48)'
                    }]
                },
            });
            return Dayuse;
        }
    },
    mounted(){
        // this.LineChart();
        this.Times();
    }
        

}
</script>

<style>

</style>