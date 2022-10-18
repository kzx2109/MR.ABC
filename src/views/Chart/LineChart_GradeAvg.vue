<template>
    <div class="w-[70%]">
        <canvas id="GradeAvg"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        const ctx = document.getElementById('GradeAvg');
        const GradeAvg = new Chart(ctx, {
            // labels : Utils.months({count: 7}),
            type: 'line',
            data: {
                labels: ['2022/09/19','2022/09/20','2022/09/21','2022/09/22','2022/09/23','2022/09/24','2022/09/25'],
                datasets: [{
                    label: 'Average Score by Day',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                   borderColor: 'rgb(25, 45, 105)',
                    tension: 0.1,
                    backgroundColor:'rgb(4, 15, 48)'

                }]
            },
        });
        GradeAvg;
    }

}
</script>

<style>

</style>