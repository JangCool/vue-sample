/**
 * Front-end에서 사용할 공통 상수 값을 정의한다.
 * constant.속성명 형식으로 접근한다.
 * 
 * @author 장진철(zerocooldog@pionnet.co.kr)
 * @since 2020.06.29
 */
export default {
    //샘플용
    SAMPLE_ALL : import.meta.env.VITE_SAMPLE_ALL,
    SAMPLE : import.meta.env.VITE_SAMPLE,
    //end 샘플용

    PROVIDE_KEY_ROOT_PAGE_DATA: 'ROOT_PAGE_DATA',
    PROVIDE_KEY_ROOT_EXPOSED: 'ROOT_EXPOSED',
    PROVIDE_KEY_ROOT_STORE: 'STORE',
    PROVIDE_KEY_ROOT_TEMPLATE_OBJECTS: 'TEMPLATE_OBJECTS',

    BOOLEAN_TRUE: 'Y',
    BOOLEAN_FALSE: 'N',
    
    PROFILES_ACTIVE: import.meta.env.VITE_PROFILES_ACTIVE,

    /**
     * 템플릿 차트 객체 담는 키 값.
     */
    GLOBAL_VARIABLE_TEMPLATE_OBJECTS: 'templateObjects',

    STATE_KEY : "_hmc_state",

    PATH_NAME_IMS: '/ims',
    PATH_NAME_WAS: '/was',
    PATH_NAME_SETTINGS: '/settings',
    PATH_NAME_OS: '/os',
    PATH_NAME_DB: '/db',
    PATH_NAME_CACHE: '/cache',


    COOKIE_SKIP_MAIN: "skipMain",

    COOKIE_STARTUP_APPLICATION: "startupApplication",

    APPLICATION_ID_IMD : 'APP000',
    APPLICATION_ID_WAS : 'APP001',
    APPLICATION_ID_CACHE : 'APP002',
    APPLICATION_ID_OS : 'APP003',
    APPLICATION_ID_DB : 'APP004',


    //통합모니터링 대시보드
    APPLICATION_IMD_URL: "/imd",
    //웹 어플리케이션 서버
    APPLICATION_WAS_URL: "/was",
    //캐시
    APPLICATION_CACHE_URL: "/cache",
    //OS
    APPLICATION_OS_URL: "/os",
    //DB
    APPLICATION_DB_URL: "/db",



    //상위 메뉴 아이디 : Cache 메뉴
    PARENT_MENU_ID_CACHE : 'MEU0000001',

    //상위 메뉴 아이디 : Was 메뉴
    PARENT_MENU_ID_WAS : 'MEU0000019',

    //상위 메뉴 아이디 : OS 메뉴
    PARENT_MENU_ID_OS : 'MEU0000019',

    //상위 메뉴 아이디 : DB 메뉴
    PARENT_MENU_ID_DB : 'MEU0000059',

    //상위 메뉴 아이디 : 환경 설정 메뉴
    PARENT_MENU_ID_SETTINGS : 'MEU0000036',

    //vuex에 웹소켓 객체를 저장할 cache 이름.
    WEB_SOCKET_CACHE : 'WEB_SOCKET_CACHE',
    //vuex에 웹소켓 객체를 저장할 cacheRealtime 이름.
    WEB_SOCKET_CACHE_REALTIME : 'WEB_SOCKET_CACHE_REALTIME', 
    //vuex에 웹소켓 객체를 저장할 cacheRealtime 이름.
    WEB_SOCKET_CACHE_ENGINE_REALTIME : 'WEB_SOCKET_CACHE_ENGINE_REALTIME', 
    //제어 -> 활성/비활성 메뉴 웹소켓 구분값
    WEB_SOCKET_CACHE_CONTROL_ACTIVATE: 'WEB_SOCKET_CACHE_CONTROL_ACTIVATE',
    //제어 -> 활성/비활성 메뉴 실시간 웹소켓 구분값
    WEB_SOCKET_CACHE_REALITME_CONTROL_ACTIVATE: 'WEB_SOCKET_CACHE_REALITME_CONTROL_ACTIVATE',
    //vuex에 웹소켓 객체를 저장할 was 이름.
    WEB_SOCKET_WAS : 'WEB_SOCKET_WAS',

    //웹소켓 객체를 저장할 WAS 실시간 데이터 웹소켓 객체 이름.
    WEB_SOCKET_WAS_REALTIME : 'WEB_SOCKET_WAS_REALTIME',

    //웹소켓 객체를 저장할 DB 실시간 데이터 웹소켓 객체 이름.
    WEB_SOCKET_DB_REALTIME: 'WEB_SOCKET_DB_REALTIME',

    //웹소켓 객체를 저장할 OS 실시간 데이터 웹소켓 객체 이름.
    WEB_SOCKET_OS_REALTIME: 'WEB_SOCKET_OS_REALTIME',
    //제어 -> 활성/비활성 웹소켓 캐시 분석 흐름 구분값
    WEB_SOCKET_CACHE_ANALYSIS_ANALYSIS_STREAM: 'WEB_SOCKET_CACHE_ANALYSIS_ANALYSIS_STREAM',
    //제어 -> 알람 웹소켓 구분값
    WEB_SOCKET_ALARM: 'WEB_SOCKET_ALARM',

    //webworker를 통하여 웹 소켓 통신을 하기위한 명령 정의.
    //웹소켓 초기화
    WEB_SOCKET_CMD_INIT : 'init',
    //웹소켓 전송
    WEB_SOCKET_CMD_SEND : 'send',
    //웹소켓 응답 메세지.
    WEB_SOCKET_CMD_MESSAGE : 'message',
    //웹소켓 연결 성공.
    WEB_SOCKET_CMD_OPEN : 'open',
    //웹소켓 연결 닫힘.
    WEB_SOCKET_CMD_CLOSE : 'close',
    //웹소켓 연결 에러.
    WEB_SOCKET_CMD_ERROR : 'error',

    CACHE_SCAN_TYPE_SERVICE: 'service',

    CACHE_SCAN_TYPE_MYBATIS : 'mybatis',

    VIEW_TYPE_CARD : 'card',

    VIEW_TYPE_GRID : 'grid',

    SERVER_TYPE_AGENT : 'AGENT',
    
    SERVER_TYPE_COLLECTOR : 'COLLECTOR',
    
    SERVER_TYPE_CACHE : 'CACHE',

    SERVER_TYPE_AGENT_CACHE : 'AGENT_CACHE',
    SERVER_TYPE_AGENT_DB : 'AGENT_DB',

    GROUP_LINK_TYPE_CD_AGENT : 'SYS003001',

    GROUP_LINK_TYPE_CD_CACHE : 'SYS003002',


    METRIC_DATA_INPUT_TYPE_CD_SLID : 'MTR002001',
    METRIC_DATA_INPUT_TYPE_CD_TEXT : 'MTR002002',
    METRIC_DATA_INPUT_TYPE_CD_NONE : 'MTR002003',    
    
	/**
	 * 측정지표, 서버 호출 유형 : 서비스 그룹.
	 */
	MEASUREMENT_TYPE_SERVICE_GROUP : "MSMTT_SG",
	
	/**
	 * 측정지표, 서버 호출 유형 : 엔진 그룹.
	 */
	MEASUREMENT_TYPE_ENGINE_GROUP : "MSMTT_EG",
	
	/**
	 * 측정지표, 서버 호출 유형 : 수집 서버.
	 */
	MEASUREMENT_TYPE_COLLECTOR : "MSMTT_CT",

    /**
	 * 측정지표, 서버 호출 유형 : 서버 아이디
     */
    MEASUREMENT_TYPE_SERVER_ID: "MSMTT_SI",

    CACHE_APPLY_LOG_POSITION_SQL: 'SQL',
    CACHE_APPLY_LOG_POSITION_SERVICE: 'SERVICE',
    
	/**
	 * 서버 적용 전 준비
	 */
	APPLY_STATUS_READY : 'READY',
	
	/**
	 * 적용 요청 후 응답 대기
	 */
	APPLY_STATUS_WAITING_RESPONSE : 'WAITING_RESPONSE',
	
	/**
	 * 완료
	 */
	APPLY_STATUS_COMPLETE : 'COMPLETE',
	
	/**
	 * 실패
	 */
    APPLY_STATUS_FAIL : 'REFAILADY',
    
    SERVER_STATUS_RUNNING: 'RUNNING',

    SERVER_STATUS_WAITING: 'WAITING',

    SERVER_STATUS_SHUTDOWN: 'SHUTDOWN',

    SERVER_STATUS_NO_LICENSE: 'NO_LICENSE',

    SERVER_STATUS_UNRECOGNIZED: 'UNRECOGNIZED',

    DEFAULT_SLOT_NAME : "타이틀을 입력해 주세요.",

    /**
     * 1차 캐시 단계 구분 값.
     */
    CACHE_STEP_PRIMARY: "PRIMARY",
    /**
     * 2차 캐시 단계 구분 값.
     */
    CACHE_STEP_SECONDARY: "SECONDARY",

    /**
     * 1차 캐시 활성
     */
    CACHE_INACTIVATE: "INACTIVATE",
    /**
     * 2차 캐시 비 활성.
     */
    CACHE_DEACTIVATE: "DEACTIVE",
    
   	/**
	 *  알림 위험 유형 ( ) 
	 */
	NOTIFICATION_THRESHOLD_CD_WARNING : "NTI003001",
	NOTIFICATION_THRESHOLD_CD_DANGER  : "NTI003002",


    /*
    * 알림유형  ( )
    */
    NOTIFICATION_TYPE_APPLICATION : "NTI002001" ,   //어플리케이션 알림
    NOTIFICATION_TYPE_COMMON : "NTI002002" ,   // 공통
    
    
    /**
     * 메인 대시보드 아이디
     */    
    DASHBOARD_CACHE_MAIN : "DSH0000019", //케시 메인 대시보드


    /**
     * SLOT 유형 : 차트
     */
    SLOT_TYPE_CHART : "DPY001001",
    
    /**
     * SLOT 유형 : 위젯
     */
    SLOT_TYPE_WIDGET : "DPY001002",

    /**
     * 에이전트 제어 선택 모드 - S: SINGLE
     */
    AGENT_CONTROL_MODE_SINGLE: "S",
    /**
     * 에이전트 제어 선택 모드 - M:MULTI
     */
    AGENT_CONTROL_MODE_MULTI: "M",

    /**
     * X축 유형: 에이전트 실시간
     */
    X_AXIS_TYPE_REALTIME_AGENT: "REALTIME_AGENT",
    
    /**
     * X축 유형: 실시간
     */
    X_AXIS_TYPE_REALTIME: "REALTIME",
    
    /**
     * X축 유형: 에이전트
     */
     X_AXIS_TYPE_AGENT: "AGENT",

    /**
     * X축 유형: 24시간
     */
    X_AXIS_TYPE_HOUR: "HOUR",

    /**
     * X축 유형: 주간
     */
    X_AXIS_TYPE_WEEK: "WEEK",



    /**
     * 템플릿 카드 기본 높이
     */
    DEFAULT_HEIGHT : 95,



     
    DEFAULT_CHART_X_TYPE_HOUR : 'HOUR',

    /**
      * 차트 X축 실시간 시간 범위 10분
      */
    DEFAULT_CHART_X_TYPE_REALTIME_RANGE_10M :'10M',

    /**
     * 차트 Y 눈금 갯수
     */
    DEFAULT_CHART_Y_TICKS_COUNT : 3,

    /**
     * 차트 Y 최대 값 유형 : 고정
     */
    DEFAULT_CHART_Y_MAX_VALUE_TYPE_FIX : 'FIX',

    /**
     * 차트 Y 최소 값 
     */
    DEFAULT_CHART_Y_MIN_VALUE : '0',
    /**
     * 차트 Y 최대 값 유형 : 스캐터 유형일 경우
     */
    DEFAULT_CHART_Y_MAX_VALUE_BY_SCATTER : '10000',

    /**
     * 차트 Y 최대 값 유형 : 최대값 이후 자동
     */
    DEFAULT_CHART_Y_MAX_VALUE_TYPE_AUTO : 'AUTO',


    /**
     * 시각화 데이터 선택 모드 - S: SINGLE
     */
    CHART_VISUALIZATION_MODE_SINGLE: "S",
    
    /**
     * 시각화 데이터 선택 모드 - M:MULTI
     */
    CHART_VISUALIZATION_MODE_MULTI: "M",

    /**
     * 차트 항목 출력 유형: 선
     */
    SERIES_TYPE_LINE: 'line',

    
    /**
     * 차트 항목 출력 유형: 막대
     */
    SERIES_TYPE_BAR: 'bar',


    /**
     * 파이 도넛 차트 범주 유형: 에이전트
     */
    PIE_DOUGHNUT_CATEGORY_TYPE_AGENT: 'AGENT',

    /**
     * 파이 도넛 차트 범주 유형: 집계
     */
    PIE_DOUGHNUT_CATEGORY_TYPE_AGGREGATE: 'AGGREGATE',


    /**
     * 범례 위치: 상단
     */
    LEGEND_POSITION_TOP: 'TOP',

    /**
     * 범례 위치: 하단
     */
    LEGEND_POSITION_BOTTOM: 'BOTTOM',

    /**
     * 범례 위치: 좌측
     */
    LEGEND_POSITION_LEFT: 'LEFT',

    /**
     * 범례 위치: 우측
     */
    LEGEND_POSITION_RIGHT: 'RIGHT',

    


    /*************************
     * 통계 데이타 유형     
     **************************/
    /*
    *  현재 기준
    */
    STATS_TYPE_NOW : 'NOW',
    /*
    *  어제 기준
    */
    STATS_TYPE_YESTERDAY : 'YESTERDAY',

    /*
    * 1주전 오늘
    */
    STATS_TYPE_A_WEEK_AGO_DAY : 'A_WEEK_AGO_DAY',    

    /*
    * 최근 1주
    */
    STATS_TYPE_LAST_WEEK : 'LAST_WEEK',

 /*
    * 최근 1주
    */
 STATS_TYPE_LAST_MONTH: 'LAST_MONTH',

}