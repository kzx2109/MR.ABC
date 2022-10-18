<template>
    <div class="w-[70%]">
        <canvas id="Dayuse"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        const ctx = document.getElementById('Dayuse');
        const Dayuse = new Chart(ctx, {
            // labels : Utils.months({count: 7}),
            type: 'line',
            data: {
                labels: ['2022/09/19','2022/09/20','2022/09/21','2022/09/22','2022/09/23','2022/09/24','2022/09/25'],
                datasets: [{
                    label: 'Total Practice Time by Day',
                    data: [0,1,1,2,2,3,3,4,7],
                    fill: false,
                    borderColor: 'rgb(25, 45, 105)',
                    tension: 0.1,
                    backgroundColor:'rgb(4, 15, 48)'

                }]
            },
        });
        Dayuse;
    }

}
</script>

<style>

</style>