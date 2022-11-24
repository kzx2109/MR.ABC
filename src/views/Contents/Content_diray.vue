<template>
    <div class="relative flex justify-start flex-col md:flex-row w-full h-full md:my-24 ">
        <div id="calendar" class="w-full md:w-1/3 h-full my-2">
            <div class="text-[30px] leading-[100px] border-b-4 border-white text-center text-white 
                            flex justify-between w-full h-1/3">
                <span class="cursor-pointer" @click="prevM">&lt;</span>
                <p>{{year}}-{{month}}<span class="back" @click="backDay"></span></p>
                <span class="cursor-pointer"  @click="nextM">&gt;</span>
            </div>
            <div class="h-2/3 w-full ">
                <div class="justify-items-centerplace-items-center w-full grid-cols-7 grid">
                    <div class="justify-center cursor-pointer w-[50px] md:w-[30px] xl:w-[50px] text-center text-[25px] md:text-[20px]  xl:text-[25px] font-semibold h-[50px] md:h-[30px] xl:h-[50px] leading-[60px] md:leading-9 xl:leading-[60px] items-center  text-slate-500" v-for="(item,index) in prev" :key="index">{{item}}</div>
                    <div class="justify-center cursor-pointer text-white  w-[50px] md:w-[30px] xl:w-[50px] text-center text-[25px] md:text-[20px]  xl:text-[25px] font-semibold h-[50px] md:h-[30px] xl:h-[50px] leading-[60px] md:leading-9 xl:leading-[60px] items-center hover:bg-indigo-400  hover:text-white hover:rounded-full"
                    v-for="(item, index) in current" :key="'current-'+index"  :class="currentMonth(index)"  @click="clickfather(index)">{{item}}</div>
                    <div class="justify-center cursor-pointer w-[50px] md:w-[30px] xl:w-[50px] text-center text-[25px] md:text-[20px]  xl:text-[25px] font-semibold h-[50px] md:h-[30px] xl:h-[50px] leading-[60px] md:leading-9 xl:leading-[60px] items-center text-slate-500" v-for="(item,index) in next" :key="'next-'+index">{{item}}</div>
                </div>
            </div>
        </div> 
        <!-- :class="isShow==true?'':'hidden'" :isShow="isShow"  :class="isShow==true?'':'hidden'"  @isDisappear ="disappear"-->
        <div class="w-full md:w-2/3 md:mx-10 my-8 md:my-0">
            <DirayText :clickc="clickcheck" @updatefeedback="updateFeedBack" :father="isAppear" :clickdate="clickDate" :feedback="diaryFeedback" :star="diaryStar" :clickday="clickD" :clickmonth="clickM" :datechoose="Datechoose" :clickyear="clickY"  @chlid="passValue" :class="clickfathercss()"></DirayText>            
        </div>   
    </div>
</template>

<script>
import { updateFeedback,getDiary,insertdiary } from '@/service/diary';
import DirayText from '../DirayText.vue'
export default {
    data() {
        return {
            prev: [],
            current: [],
            next: [],
            year: "",
            month: "",
            week: ["日", "一", "二", "三", "四", "五", "六"],
            isAppear:true,
            Datechoose:false,
            clickY:0,
            clickM:0,
            clickD:0,
            clickDate:"",
            memberId:localStorage.getItem("memberId"),
            diaryFeedback:"",
            diaryDate:"",
            diaryStar:0,
            clickcheck:false
            
        };
    },
    methods: {
        getToDay(){
            const date = new Date;
            this.clickD=date.getDate();
            this.clickM=date.getMonth()+1;
            this.clickY=date.getFullYear();
            this.clickDate=this.clickY+"-"+this.clickM+'-'+this.clickD;
            // console.log(date.getDay());
            console.log(this.clickD);
        },
        clickfather(data){
            if(this.clickcheck==false){
                const date = new Date;
                this.clickD=date.getDate();
            }else{
                this.clickD=data+1;
            }
             
            this.clickM=this.month;
            this.clickY=this.year;
            this.clickDate=this.clickY+"-"+this.clickM+'-'+this.clickD;
            // console.log(this.clickDate);
            this.isAppear=true;
            this.clickcheck=true;
            getDiary({
                memberId:this.memberId,
                diaryDate:this.clickDate
            }).then((res)=>{
                if(res.data==0){
                    this.diaryStar=0;
                    this.diaryFeedback=""
                }else{
                    this.diaryStar=res.data.diaryStar;
                    this.diaryFeedback=res.data.diaryFeedback;
                }
            })
        },
        insert(){
            insertdiary({
                memberId:this.memberId,
                diaryDate:this.clickDate,
                diaryFeedback:this.diaryFeedback
            }).then((res)=>{

            })
        },
        clickfathercss(){
            if(this.isAppear==true){
                return 'appear'
            }
            return 'disappear'
        },
        passValue:function(fatherValue){
            // console.log(fatherValue);
            this.isAppear=fatherValue
        },
        currentInfo(year, month) {
            let date = new Date();
            this.year = year || date.getFullYear(); //当年
            this.month = month || date.getMonth() + 1; //当月
            let currentDate = new Date(this.year, this.month, 0); //当月最后一天
            let currentArr = [...Array(currentDate.getDate()).fill(1)]; //创建当月数组，填充1
            this.current = currentArr.map((item, index) => item + index); //做数组处理
            /*上月*/
            let prevDate = new Date(this.year, this.month - 1, 0); //上月最后一天
            let prevArr = [...Array(prevDate.getDay() + 1).fill(prevDate.getDate())]; //创建上月数组，填充最后一天
            this.prev = prevArr.map((item, index) => item - index).sort((a, b) => a - b); //做数组处理
            /*下月*/
            let nextArr = [...Array(6 - currentDate.getDay()).fill(1)]; //创建下月数组，填充1
            this.next = nextArr.map((item, index) => item + index);
        },
        prevM() {
            let year, month;
            if (this.month !== 1) { //不是一月，月份递减，年份不变
                month = --this.month;
                year = this.year;
            }
            else { //否则年份递减，月份变为12
                month = 12;
                year = --this.year;
            }   
            this.currentInfo(year, month);
        },
        nextM() {
            let year, month;
            if (this.month < 12) {
                month = ++this.month;
                year = this.year;
            }
            else {
                month = 1;
                year = ++this.year;
            }
            this.currentInfo(year, month);
        },
        currentDay() {
            let date = new Date();
            if (this.year === date.getFullYear() && this.month === date.getMonth() + 1) { //如果是当年当月
                // this.month=date.getMonth()+1
                this.isDay = date.getDate() - 1; //获取到今天的号数，因为index是从0循环，所以这里-1
            }
            else {
                this.isDay = "";
            }
        },
        currentMonth(data) {
            let date = new Date();
            if (this.year == date.getFullYear() && this.month == date.getMonth() + 1 && this.isDay == data) {
                return "active";
                
            }
            return "";
        },
        backDay() {
            this.currentInfo();
            this.currentDay();
        },
        updateFeedBack(value){
            // console.log(value);
            this.diaryFeedback=value;
            updateFeedback({
                memberId:this.memberId,
                diaryDate:this.clickDate,
                diaryFeedback:this.diaryFeedback
            }).then((res)=>{
                console.log(res);
                if(res.data=='fail'){
                    insertdiary({
                        memberId:this.memberId,
                        diaryDate:this.clickDate,
                        diaryFeedback:this.diaryFeedback
                    }).then((res)=>{
                        console.log(res);
                    })
                }
            })
        },
    },
    mounted() {
        this.currentInfo();
        this.currentDay();
        this.getToDay();
        // if(this.clickcheck==false){
        //      this.getToDay();
        // }
        this.clickfather(this.clickDate);
        
    },
    components: { DirayText }
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}

/* .body,.weeks{
	display: flex;
	flex-wrap: wrap;
	border:1px solid #00b4ff;
} */
/* .week{
	width: 14%;
	text-align: center;
	font-size: 25px;
	color: #fff;
	line-height: 65px;
} */


.current{
	color: #FFFFFF;
    cursor: pointer;
     /* padding: 20px; */
    /* width: 1/2;
    height: 1/2; */
}
.active{
	background: #D9D9D9;
    border-radius: 9999px;
    cursor: pointer;
	color:cornflowerblue;
}
/* .back{
	background: #f17437;
	border-radius:3px;
	width: 40px;
	height: 40px;
	display: inline-block;
	line-height: 40px;
	margin-left: 10px;
}
.back:active{
	background: #e8560e;
} */
.disappear{
    visibility: hidden;
}
.appear{
    display: inline;
}
</style>