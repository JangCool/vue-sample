/**
 * Front-end에서 사용할 Date 유틸 스크립트를 정의한다.
 * 
 * @author 장진철(zerocooldog@pionnet.co.kr)
 * @since 2020.06.29
 */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc)
dayjs.extend(duration)

const date = {

    /**
	 * 현재 날짜 구함.
	 * 
	 * @return Date 객체
	 */
	today : function():Date {
		return dayjs().toDate();
	},
	
	
	/**
	 * 문자열 날짜 형식 Date객체로 변환.
	 * format 생략 가능.
	 * format을 지정 할 경우 strDateValue 날자 형식과, format 날짜 형식이 일치 하여야 한다.
	 * 
	 * @param strDateValue 문자열 날자 형식
	 * @param format 날짜 형식. (생략 가능)
	 * @return Date 객체
	 */
	parseDate : function(strDateValue: string, format: string){
		if(!format){
			return dayjs(strDateValue).toDate();
		}
		return dayjs(strDateValue, format).toDate();
    },
    
    /**
     * 
     * @param {*} beforeDateTime 
     * @param {*} afterDatetime 
     */
    durationAsMilliseconds : (beforeDateTime, afterDatetime) =>{
        let t1 = dayjs(beforeDateTime);
        let t2 = dayjs(afterDatetime)
        return dayjs.duration(t2.diff(t1)).asMilliseconds();

    },
    
    /***
	 * UTC 데이트 형식을 일반 포맷 형식으로 변경 한다.
	 * '2019-07-18T17:04:56.527+0900' -> 2019-07-18 17:04:56
	 * 
	 * @param utcTypeDateValue UTC포맷 문자열
	 * @param format 날짜 형식 ex) yyyy-MM-dd HH:mm:ss
	 * @return String
	 */
    formatUTC : function(utcTypeDateValue: string | Date, format?: string) {
        //@ts-ignore
		return new Date(dayjs(utcTypeDateValue).valueOf()).format(format || 'yyyy-MM-dd HH:mm:ss');
    },

    /**
     * milisecond를 Local Date (new Date()) 형식으로 변경한다.
     * @param {*} utcMilisecond UTC milisecond
     * @return Date
     */
    format: function(milisecond: number, format?:string):string{
        //@ts-ignore
        return new Date(milisecond).format( format || 'yyyy-MM-dd HH:mm:ss')
    },

    /**
     * UTC 형태의 milisecond를 Local Date (new Date()) 형식으로 변경한다.
     * @param {*} utcMilisecond UTC milisecond
     * @return Date
     */
    toLocalAtUTC: function(utcMilisecond: number):Date{
        return dayjs(dayjs.utc(utcMilisecond).format('YYYY-MM-DDTHH:mm:ss')).toDate()
    },
    
    /**
     * 현재 시간 기준으로 몇분 전인지 출력.
     * 
     * @param {*} createdAt 
     */
    displayedAt: function(currentDatetime, createdAt) {

        const today = date.toLocalAtUTC(currentDatetime);
        const timeValue= date.toLocalAtUTC(createdAt);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 7) {
            return `${betweenTimeDay}일전`;
        }
        //@ts-ignore
        return timeValue.format('yyyy-MM-dd HH:mm:ss');
    },

    /**
    * Converts a day number to a string.
    *
    * @param {Number} dayIndex
    * @return {String} Returns day as string
    */
    dayOfWeekAsString: (dayIndex) => {
        return [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ][dayIndex] || '';
    },

    /**
     * 시작, 종료 시간 까지 1분 간격으로 조회 범위 반환.
     * @param startDatetime 시작 시간
     * @param endDatetime 종료 시간.
     * @returns 
     */
    getDateTimeRange : (startDatetime:number, endDatetime:number, timeDivision?:number ) => {
        
        const dateTimeRange:{
            startDatetime: number,
            endDatetime: number 
        }[] = [];

        const division = timeDivision || 1;

        const dateTimeGap = endDatetime - startDatetime;

        //시작, 종료 시간이 몇분정도 인지 구한다. - 1분기준으로 나눔.
        const minute = Math.ceil(dateTimeGap / (60 * 1000 * division));
        console.log(dateTimeGap, minute)


        const search:{
            startDatetime: number,
            endDatetime: number 
        } = {
            startDatetime: startDatetime,
            endDatetime:  endDatetime 
        };

        for (let index = 0; index < minute ; index++) {
            
            if( search.startDatetime > endDatetime){
                break;
            }

            if( index > 0){
                search.startDatetime = search.endDatetime;
            }

            search.endDatetime = search.startDatetime + ((60 * 1000) * division) ;


            //조회 종료 시간이 조회 조건 종료 시간 보다 크면 안되기 때문에 마지막 종료시간을 맞춰준다.
            if( search.endDatetime > endDatetime){
                search.endDatetime = endDatetime;
            }

            dateTimeRange.push({
                startDatetime: search.startDatetime,
                endDatetime:  search.endDatetime
            });
        }

        return dateTimeRange;
    }
}

export default date