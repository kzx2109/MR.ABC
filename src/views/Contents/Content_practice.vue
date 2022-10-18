<template>
    <div class="relative w-full h-full my-12 flex ">
        <div class="flex w-11/12 h-full flex-col mx-10 justify-center bg-white/75 p-5">
            <div class="flex w-full h-full justify-between flex-col">
                <div class="md:flex md:w-full md:h-1/2 ">
                    <Frame_Practice>
                        <template #title >
                            <a class="cursor-pointer" href="/shadowingchart">Shadowing Practice</a>
                        </template>
                        <template #chart>
                            <PieChart_shadow></PieChart_shadow>
                        </template>
                    </Frame_Practice>
                    <Frame_Practice>
                        <template #title>
                                <a class="cursor-pointer" href="/situationchart">Situation Practice</a>
                        </template>
                        <template #chart>
                            <PieChart_situ></PieChart_situ>
                        </template>
                    </Frame_Practice>
                </div>
                <div class="md:flex md:w-full md:h-1/2 ">
                    <Frame_Practice >
                        <template  #title>
                            Total Practice Time by Day
                        </template>
                    <template #chart>
                       <LineChart_Dayuse></LineChart_Dayuse>
                    </template>
                    </Frame_Practice>
                    <Frame_Practice>
                        <template #title>
                            Average Score by Day
                        </template>
                        <template #chart>
                            <LineChart_GradeAvg></LineChart_GradeAvg>
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

export default {
    components: { Frame_Practice, Dayuse, GradeAvg, PieChart_shadow, PieChart_situ, BarChart, PieChart_shadow, PieChart_situ, Frame_Practice, PieChart_shadow, Frame_Practice, PieChart_shadow, PieChart_situ, LineChart_Dayuse, LineChart_GradeAvg }
    
}
</script>

<style>

</style>