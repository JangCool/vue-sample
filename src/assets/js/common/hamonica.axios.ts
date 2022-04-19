import axios from 'axios'
import constant from '../constant/constant';
import qs from 'qs';

/**
 * Axios 라이브러이 통신에 대한 기본 설정을 지정 한다.
 * 
 */
 //axios로 통신할 기본 URL 지정.
axios.defaults.baseURL = constant.PROFILES_ACTIVE == 'local'? 'http://localhost:8501' : '';

axios.defaults.withCredentials = true;
// axios 인스턴스를 만들 때 구성 기본 값 설정
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// headers: { 'X-Requested-With': 'XMLHttpRequest' },
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
console.log(constant.PROFILES_ACTIVE)

//파라메터가 배열로 전송 될때 a[]=value1&a[]=value2 처럼 처리되어 스프링에서 변환이 안된다.
//qs 라이브러리를 이용하여 [] 제거한 상태로 전송한다.
axios.defaults.paramsSerializer = function(paramObj) {   
    return qs.stringify(paramObj, {arrayFormat: 'repeat'})
}

export default axios;
