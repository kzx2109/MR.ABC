<template>
    <div class="w-full md:w-[70%]">
        <canvas id="Area_sh"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getAvgIBC } from '@/service/mempractice'; 
export default {
    data(){
        return{
            memberId:localStorage.getItem('memberId'),
            avgIntro:[],
            avgBody:[],
            avgdate:[],
            avgCon:[],
            dateArray:[],
            count:0,
        }
    },
    methods:{
        AvgIBC(){
            getAvgIBC({
                memberId:this.memberId,
                kindId:1
            }).then((res)=>{
                this.count=res.data.length;
                console.log(res.data);
                for(let i =0;i<this.count;i++){
                    this.dateArray[i]=res.data[i].date.split('-').join('/');
                    if(res.data[i].structureId==1){
                        // this.avgdate[i]=res.data[i];
                        this.avgIntro[i]=parseInt(res.data[i].avg);
                    }else{
                        this.avgIntro[i]=0;
                    }
                    if(res.data[i].structureId==2){
                        this.avgBody[i]=parseInt(res.data[i].avg);
                    }else{
                        this.avgBody[i]=0;
                    }
                    if(res.data[i].structureId==3){
                        this.avgCon[i]=parseInt(res.data[i].avg);
                    }else{
                        this.avgCon[i]=0;
                    }
                }
                // console.log(this.avgdate);
                console.log(this.avgCon);
                console.log(this.avgIntro);
                console.log(this.avgBody);
                console.log(this.dateArray);
                this.LineChart()
            })
        },
        LineChart(){
            const ctx = document.getElementById('Area_sh');
            const Area_sh = new Chart(ctx, {
            type: 'line',
            data: {
                // labels: ['2022/09/21','2022/09/22','2022/09/23','2022/09/24','2022/09/25'],
                labels: this.dateArray,
                datasets: [{
                    label: 'Introduction',
                    // data: [50,51,60,62,70,0,0,0,0],
                    data:this.avgIntro,
                    // fill: {
                    //     target: '1',
                    //     target:'origin',
                    //     above: 'rgba(238, 230, 135,0.5)', 
                    //     below: 'rgb(0, 0, 255)',

                    // },
                    borderColor: 'rgba(238, 230, 135)',
                    tension: 0.1,
                    backgroundColor:'rgba(238, 230, 135,0.5)'
                },{
                    label: 'Body',
                    // data: [70,60,70,60,100,0,0,0,0],
                    data:this.avgBody,
                    // fill: {
                    //     target: '2',
                    //     target:'origin',
                    //     above: 'rgba(206, 192, 248,0.5)', 
                    //     below: 'rgba(0, 0, 255)'
                    // },
                    borderColor: 'rgba(117, 103, 161)',
                    tension: 0.1,
                    backgroundColor:'rgba(117, 103, 161,0.5)'
                },{
                    label: 'Conclusion',
                    // data: [10,10,20,30,40,0,0,0,0],
                    data:this.avgCon,
                    // fill: {
                    //     target: '3',
                    //     target:'origin',
                    //     above: 'rgba(126, 201, 183,0.5)', 
                    //     below: 'rgb(0, 0, 255)'
                    // },
                    borderColor: 'rgba(126, 201, 183)',
                    tension: 0.1,
                    backgroundColor:'rgba(126, 201, 183,0.5)'
                },
               ]
            },

        });
           return Area_sh;
        }
    },
    mounted(){
        // console.log('component mounted.');
        this.AvgIBC();
        // this.LineChart();

    }
}
</script>

<style>

</style>