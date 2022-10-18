<template>
    <div class="relative w-full h-full flex my-10 ">
        <div class="flex w-11/12 h-full flex-col mx-10 bg-white/75 p-5">
            <div class="flex w-full h-full justify-between ">
                <div class=" w-full h-1/2">
                    <Frame_Practice >
                        <template #title >
                            Average Score by Situational Unit 
                        </template>
                        <template #chart>
                           <BarChart_situ></BarChart_situ>
                        </template>
                    </Frame_Practice>
                    <Frame_Practice>
                        <template #title>
                            Average Score by Situational Framework
                        </template>
                        <template #chart>
                            <AreaChart_situ></AreaChart_situ>
                        </template>
                    </Frame_Practice>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import Frame_Practice from '../Frame_Practice.vue';
import Dayuse from '../Chart/LineChart_Dayuse.vue';
import GradeAvg from '../Chart/LineChart_GradeAvg.vue';
import PieChart_shadow from '../Chart/pieChart_shadow.vue';
import PieChart_situ from '../Chart/pieChart_situ.vue';
import BarChart from '../Chart/BarChart_sh.vue';
import LineChart_Dayuse from '../Chart/LineChart_Dayuse.vue';
import LineChart_GradeAvg from '../Chart/LineChart_GradeAvg.vue';
import BarChart_situ from '../Chart/BarChart_situ.vue';
import AreaChart_situ from '../Chart/AreaChart_situ.vue';

export default {
    components: { Frame_Practice, Dayuse, GradeAvg, PieChart_shadow, PieChart_situ, BarChart, PieChart_shadow, PieChart_situ, Frame_Practice, PieChart_shadow, Frame_Practice, PieChart_shadow, PieChart_situ, LineChart_Dayuse, LineChart_GradeAvg, BarChart_situ, AreaChart_situ }
    
}
</script>

<style>

</style>