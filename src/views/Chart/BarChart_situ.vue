<template>
    <div class="w-full md:w-[70%]">
        <canvas id="BarChart_situ" ></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        // console.log('component mounted.');
    
        const ctx = document.getElementById('BarChart_situ');
        const BarChart_situ = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Brainstroming', 'Driving Questioning', 'Intro-Lectures', 'Body-Lectures', 'Group Learning', 'Summarzing','Further Instructions','Ending'],
                datasets: [{
                    label: 'Situational',
                    data: [12, 19, 3, 5, 2, 3,7,8],
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
        BarChart_situ;
    }
}
</script>

<style>

</style>