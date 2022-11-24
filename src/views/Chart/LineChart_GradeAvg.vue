<template>
    <div class="w-[70%]">
        <canvas id="GradeAvg"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getAvgbyDay } from '@/service/mempractice';
export default {
    data(){
        return{
            memberId:localStorage.getItem("memberId"),
            count:0,
            avg1:0,
            avg2:0,
            avg3:0,
            avg4:0,
            avg5:0,
            avg6:0,
            avg7:0,
            date1:'',
            date2:'',
            date3:'',
            date4:'',
            date5:'',
            date6:'',
            date7:'',
            data:[],
            avgArray:[{avg:0}],
            dateArray:[],
        }
    },
    methods:{
        getavg(){
            getAvgbyDay({
                memberId:this.memberId
            }).then((res)=>{
                this.count=res.data.length;
                this.data=res.data.reverse();
                console.log(this.data);
                for(let i =0;i<this.count;i++){
                    this.avgArray[i]=parseInt(this.data[i].avg);
                    this.dateArray[i]=this.data[i].date.split('-').join('/');
                }
                console.log(this.dateArray);
                this.avg1=this.avgArray[0];
                this.avg2=this.avgArray[1];
                this.avg3=this.avgArray[2];
                this.avg4=this.avgArray[3];
                this.avg5=this.avgArray[4];
                this.avg6=this.avgArray[5];
                this.avg7=this.avgArray[6];
                this.lineChart();
            })
        },
        lineChart(){
            const ctx = document.getElementById('GradeAvg');
            const GradeAvg = new Chart(ctx, {
            // labels : Utils.months({count: 7}),
            type: 'line',
            data: {
                labels:[this.dateArray[0],this.dateArray[1],this.dateArray[2],this.dateArray[3],this.dateArray[4],this.dateArray[5],this.dateArray[6]],
                datasets: [{
                    label: 'Average Score by Day',
                    data: [this.avg1,this.avg2,this.avg3,this.avg4,this.avg5,this.avg6,this.avg7],
                    fill: false,
                    borderColor: 'rgb(25, 45, 105)',
                    tension: 0.1,
                    backgroundColor:'rgb(4, 15, 48)'

                }]
            },
        });
        return GradeAvg;
        }
    },
    // computed:{
    //     replacedate:function(str){
    //         // console.log(this.date7);
    //         str.split('-').join('/');
            
    //     }
    // },
    mounted(){
        this.getavg();
    }

}
</script>

<style>

</style>