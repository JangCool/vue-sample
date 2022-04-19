/**
 * Front-end에서 사용할 명령 상수 값을 정의한다.
 * commandType.속성명 형식으로 접근한다.
 * 
 * @author 장진철(zerocooldog@pionnet.co.kr)
 * @since 2020.06.29
 */
export default {

    // 대시보드에서 웹소켓 연결시 5~10분 간 데이터를 불러오기 위한 명령.
    OPEN_DASHBOARD_REALTIME_METRIC_RECORD_DATA : 'OPEN_DASHBOARD_REALTIME_METRIC_RECORD_DATA',

    //웹소켓 연결시 5~10분 간 데이터를 불러오기 위한 명령.
    OPEN_REALTIME_METRIC_RECORD_DATA : 'OPEN_REALTIME_METRIC_RECORD_DATA',

    // 실시간 대시보드 측정 지표 데이터.
	REALTIME_DASHBOARD_METRICS_DATA : 'REALTIME_DASHBOARD_METRICS_DATA',

    // 실시간 대시보드 X축 초기 집계 데이터
    REALTIME_DASHBOARD_INITIAL_AGGREGATION_DATA: 'REALTIME_DASHBOARD_INITIAL_AGGREGATION_DATA',

    // 실시간 대시보드 X축 집계 데이터
    REALTIME_DASHBOARD_AGGREGATION_DATA: 'REALTIME_DASHBOARD_AGGREGATION_DATA',


    //WAS 트랜잭션
    AGENT_TRANSACTION : 'AGENT_TRANSACTION',

    // CACHE 명령어 정의
    // CACHE : TTL 설정
    CACHE_SET_CACHE : 'CACHE_SET_CACHE',

    // CACHE : 캐시 활성화 설정
    CACHE_SET_ACTIVATE: 'CACHE_SET_ACTIVATE',

    /**
     * 캐시 제어 - 캐시 측정지표 실시간 데이터 
     */
    REALTIME_CONTROL_ACTIVATE: 'REALTIME_CONTROL_ACTIVATE',

    REALTIME_CACHE_ENV_CONFIG : 'REALTIME_CACHE_ENV_CONFIG',

    // CACHE 항목 가져오기
    CACHE_AGGREGATE_TARGET_LIST : 'CACHE_AGGREGATE_TARGET_LIST',

    // CACHE 흐름 정보 가져오기
    CACHE_STREAM_TARGET_INFO : 'CACHE_STREAM_TARGET_INFO',

    // 알람 목록 가져오기
    ALARM_INFO_LIST: 'ALARM_INFO_LIST',

    // 알람 갯수 가져오기
    ALARM_COUNTS: 'ALARM_COUNTS'
}