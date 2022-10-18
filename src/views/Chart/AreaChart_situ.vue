<template>
    <div class="w-full md:w-[70%]">
        <canvas id="Area_sh" ></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        // console.log('component mounted.');
        const ctx = document.getElementById('Area_sh');
        const Area_sh = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2022/09/21','2022/09/22','2022/09/23','2022/09/24','2022/09/25'],
                datasets: [{
                    label: 'Introduction',
                    data: [50,51,60,62,70],
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
                    data: [70,60,70,60,100],
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
                    data: [10,10,20,30,40],
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
      Area_sh;

    }
}
</script>

<style>

</style>