<template>
    <div class="w-full md:w-[70%]">
        <canvas id="BarChart_situ" ></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getcompletion } from '@/service/mempractice';
import {getstruAllcount} from '@/service/unit';
export default {
    data(){
        return {
            memberId:localStorage.getItem('memberId'),
            stru1:0,
            stru2:0,
            stru3:0,
            allcount1:0,
            allcount2:0,
            allcount3:0,
            allcount:[],
            count:[]
        }
    },
    methods:{
        Allcount(){
            getstruAllcount({
            }).then((res)=>{
                this.allcount1=res.data[0].count;
                this.allcount2=res.data[1].count;
                this.allcount3=res.data[2].count;
                for(let i=0 ;i<res.data.length;i++){
                    this.allcount[i]=res.data[i].count;
                }
                // console.log(this.allcount);
            });
        },
        getcount(){
            getcompletion({
                memberId:this.memberId,
                kindId:2
            }).then((res)=>{
                // console.log(res);
                for(let i=0 ;i<res.data.length;i++){
                    this.count[i]=(res.data[i].count/this.allcount[i])*100;
                    // console.log(res.data[i].count);
                }
                console.log(this.count);
                this.BarChart();
            });
            
        },
        BarChart(){
            const ctx = document.getElementById('BarChart_situ');
            const BarChart_situ = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Introdution','Body','Conclusion'],
                datasets: [{
                    label: 'Situational',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        'rgba(104, 108, 120, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        'rgba(104, 108, 120, 1)',
                        
                        
                    ],
                    borderWidth: 1
                }],
            },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            return BarChart_situ;
        }
    },
    mounted(){
        // console.log('component mounted.');
        this.Allcount(); 
        this.getcount();
        
        
    }
}
</script>

<style>

</style>