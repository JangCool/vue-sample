/**
 * Front-end에서 사용할 공통 상수 값을 정의한다.
 * constant.속성명 형식으로 접근한다.
 * 
 * @author 장진철: zerocooldog@pionnet.co.kr
 * @since 2020.06.29
 */
export default {
    
	/**
	 * 실행시간
	 */
	EXECUTE_TIME: "EXETIME",
	
	
	/**
	 * 시스템 CPU 사용률
	 */
	SYSTEM_CPU_USAGE: "00001",
	
	/**
	 * 시스템 메모리 사용률
	 */
	SYSTEM_MRMORY_USAGE: "00002",
	

    /**
	 * 신규, 종료 액티브 배열 정보 - 위젯용
	 */
    ACTIVE_SERVICE_ARRAY: "00149",

	/**
	 * 액티브 서비스
	 */
	ACTIVE_SERVICE: "00005",

    /**
	 * 액티브 서비스 - 원할
	 */
    ACTIVE_SERVICE_GOOD: "00112",

    /**
	 * 액티브 서비스 - 경고
	 */
    ACTIVE_SERVICE_WARNING: "00113",

    /**
	 * 액티브 서비스 - 위험
	 */
     ACTIVE_SERVICE_DANGER: "00114",

	/**
	 * 트랜잭션 응답시간
	 */
	TX_RESPONSE_TIME: "00006",
	
	
	/**
	 * 동시 사용자 수
	 */
	CONCURRENT_USERS_COUNT: "00007",
	
	
	/**
	 * 동시 사용자 수
	 */
	DB_CONNECTIONS_COUNT: "00008",
	
	/**
	 * TPS
	 */
	TX_TPS: "00009",

    TX_TPS_AVG: "00129",
	
	/**
	 * JVM프로세스사용률
	 */
	JVM_PROCESS_CPU_USAGE: "00012",
	
	/**
	 * JVM힙메모리사용률
	 */
	JVM_HEAP_MEMORY_USAGE: "00013",

    /**
	 * GC 건수
	 */
     GC_COUNT: "00020",
	
	/**
	 * GC 시간
	 */
     GC_TIME: "00021",
	
	/**
	 * 1차 캐시 Get TPS(HIT)
	 */
    CACHE_PRIMARY_CACHE_GET: "00022",
	
	
	/**
	 * 1차 캐시 Put TPS(HIT)
	 */
     CACHE_PRIMARY_CACHE_PUT: "00023",
	
	/**
	 * 2차 캐시 Get TPS(HIT)
	 */
    CACHE_SECONDARY_CACHE_GET: "00024",
	
	
	/**
	 *2차 캐시 Put TPS(HIT)
	 */
    CACHE_SECONDARY_CACHE_PUT: "00025",
	
	/**
	 *DB TPS(HIT)
	 */
    CACHE_DB: "00026",
	/**
	 * CACHE MISS TPS: HIT
	 */
    CACHE_MISS: "00027",
	

	/**
	 * 1차 캐시 Put 응답 시간
	 */
    CACHE_ELAPSED_PRIMARY_CACHE_GET: "00028",

	/**
	 * 1차 캐시 Put 응답 시간
	 */
    CACHE_ELAPSED_PRIMARY_CACHE_PUT: "00029",
	
	/**
	 * 2차 캐시 Get 응답 시간
	 */
    CACHE_ELAPSED_SECONDARY_CACHE_GET: "00030",

     /**
      * 1차 캐시 Put 응답 시간
      */
    CACHE_ELAPSED_SECONDARY_CACHE_PUT: "00031",
	
	/**
	 * DB 응답 시간
	 */
     CACHE_ELAPSED_DB: "00032",
	
	
    /**
	 * 1차 초당 HIT 건수.
	 */
    CACHE_COUNT_PRIMARY_CACHE_GET: "00037",

    CACHE_COUNT_PRIMARY_CACHE_GET_SUM: "00115",
    
    /**
	 * 1차 캐시 Put 개수(HIT)
	 */
    CACHE_COUNT_PRIMARY_CACHE_PUT: "00038",

    /**
	 * 1차 캐시 Put 개수(HIT)
	 */
    CACHE_COUNT_PRIMARY_CACHE_PUT_SUM: "00133",
    

	/**
	 * 2차 초당 HIT 건수.
	 */
    CACHE_COUNT_SECONDARY_CACHE_GET: "00039",

    CACHE_COUNT_SECONDARY_CACHE_GET_SUM: "00118",

    /**
	 *2차 캐시 Put 개수(HIT)
	 */
    CACHE_COUNT_SECONDARY_CACHE_PUT: "00040",

    /**
	 * 1차 캐시 Put 개수(HIT)
	 */
     CACHE_COUNT_SECONDARY_CACHE_PUT_SUM: "00135",

	/**
	 *  DB 호출 건수
	 */
    CACHE_COUNT_DB: "00041",
    
	/**
	 *  캐시 호출 안된 건수
	 */
    CACHE_COUNT_MISS: "00042",

    /**
	 *  캐시 호출 안된 건수 합계
	 */
    CACHE_COUNT_MISS_SUM: "00137",
    
    
    /**
     *  사용량 합(건수)
     */
    CACHE_COUNT_SUM: "M446",

    /**
     *  캐시 hit, miss 합(건수)
     */
    CACHE_HIT_AND_MISS_SUM: "M447",

    /**
     *  캐시응답시간(get) 합(건수)
     */
    CACHE_RESPONSE_TIME_SUM: "M448",

    /**
     *  캐시쓰기(put) 합(건수)
     */
    CACHE_WRITE_SUM: "M449",

    /**
     *  캐시읽기(get) 합(건수)
     */
    CACHE_READ_TIME_SUM: "M450",

	/**
	 * 에이전트 서버 중단
	 */
	SERVER_STOP: "00071",
	
	/**
	 * 에이전트 서버 중단
	 */
	LICENSE_EXPIRED: "00072",
	
	/**
	 * 에이전트 서버 연결 상태
	 */
	SERVER_CONNECTION_STATUS: "00074",
	
	/**
	 * 캐시 설정
	 */
	CACHE_ENV_CONFIG: "M604",
	
	/**
	 * mongo 모니터링 관련 정의
	 */	
	OP_COUNTER_QUERY: "M800",
	OP_COUNTER_GETMORE: "M801",
	OP_COUNTER_INSERT: "M802",
	OP_COUNTER_UPDATE: "M803",
	OP_COUNTER_DELETE: "M804",
	ACTIVE_CLIENT_READERS: "M805",
	ACTIVE_CLIENT_WRITERS: "M806",
	CURRENT_CONNECTIONS: "M807",
	OP_LOG_MAX_SIZE_MB: "M808",
	OP_LOG_USED_SIZE_MB: "M809",
    
    /**
	 * DB_POOL
	 */
	DB_POOL: "00153",
}