<template>
    <div class="w-[45%]">
        <canvas id="situ"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        // console.log('component mounted.');
        const ctx = document.getElementById('situ');
        const situ = new Chart(ctx, {
            type: 'pie',
            data: {
                 labels: [
                    'Completed',
                    'Uncompleted',
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [70,30],
                    backgroundColor: [
                    'rgb(60, 83, 153)',
                    'rgb(104, 108, 120)',
                    ],
                    hoverOffset: 4
                }]
                
            },
        });
       situ;
    }
}
</script>

<style>

</style>