// import constant from '@/common/constant/constant.js'
//@ts-nocheck

import { defineProto } from "@/protobuf/define/proto";
import utils from "@/utils/util";

class Command {

    #object = {

        agentId : [],
        metricsIds : [],
        commandType : null,
        parameter : {},
        data : null,
        success : false,
        error: false,
        message : null
    };

    constructor(object?){
        if(object){
            this.#object = object;
        }
    }


    /**
     * 에이전트 아이디 설정.
     * 
     * @param {String, Array} aid 문자열 및 배열로 작성된 에이전트 아이디.
     */
    setAgentId = (agentId:string[]) => {

        if(!agentId){
            return;
        }
        
        if(agentId instanceof Array){
            this. #object.agentId = agentId;
        }
    };

    getAgentIds = ():string[] => {
        return this.#object.agentId;
    }

    
    /**
     * 에이전트 아이디 추가.
     * 
     * @param {String} agentId 에이전트 아이디
     */
    addAgentId = (agentId) => {
        this. #object.agentId.push(agentId);
    };

    /**
     * 측정지표 아이디 목록 반환.
     * @return string[]
     */
    getMetricsIds = ():string[] => {
        return this.#object.metricsIds;
    }
    
    /**
     * 측정지표 아이디 설정.
     * 
     * @param {String} metricsId 에이전트 측정지표 아이디
     */
    setMetricsId = (metricsIds) => {
        this. #object.metricsIds = metricsIds || [];
    };

    /**
     * 측정지표 아이디 추가.
     * 
     * @param {String} metricsId 에이전트 측정지표 아이디
     */
    addMetricsId = (metricsId) => {
        this. #object.metricsIds.push(metricsId);
    };

     /**
      * 서버에 지시할 명령 유형 지정.
      * 
      * @param {String} commandType 명령 유형.
      */
    setCommandType = (commandType) => {
        this. #object.commandType = commandType;
    };

    getCommandType = ():string => {
        return this.#object.commandType;
    }

    /**
     * 파라메터 추가.
     * 
     * @param {String} key 파라메터 명.
     * @param {Object} value 파라메터 값.
     */
    addParameter = (key:string, value:string | number) => {

        //null 값을 protubof에서 인식하지 못하기 때문에 
        //문자열일 경우에는 공백을 넣어준다.

        if(!utils.isNumber(value)){
            if(!Array.isArray(value) && utils.text.isBlank( value )){
                value = '';
            }
        }

        this. #object.parameter[key] = value;
    };

    getParameter = (key:string):T => {
        return this.#object.parameter[key] || null;
    }

    /**
     * 응답 데이터 또는 전송시 필요한 데이터 전송.
     * 
     * @param {*} data 
     */
    setData = (data) => {
        this. #object.data = data;
    };

    getData = (): T => {
        return this.#object.data;
    }

    /**
     * 요청 성공 여부 설정.
     * 
     * @param {*} data 
     */
    setSuccess = (success:boolean) => {
        this.#object.success = success;
    };

    isSoccess = (): T => {
        return this.#object.success;
    }

    /**
     * 응답 메세지 설정.
     * 
     * @param {*} message 
     */
    setMessage = (message) => {
        this. #object.message = message;
    };

    getMessage = (): T => {
        return this.#object.message;
    }

    /**
     * Json Object 반환
     * @param protoData protobuf 데이터
     * @return {JSON} command object
     */
    toObject = () => {

        const Command = defineProto.Command;
        
        const message = Command.create(this.#object);
        
        return  defineProto.Command.toObject(message);
    };

    toArrayBuffer = () => {
        return defineProto.Command.encode(this.toObject()).finish();
    }

}

/**
 * Command 객체 생성.
 */
const createCommand = (object?) => {
    return new Command(object);
}

export {
    Command,
    createCommand  
} 
