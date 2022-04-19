import {allowedAccess} from '@/assets/js/common/hamonica.common.js'

/**
 * 권한 검증이 필요 없는 URL을 지정한다.
 * 해당 목록 이외의 모든 URL은 인증 여부 확인후 페이지 이동 된다.
 * 
 * @since 2020.12.10 10:54
 * @author 장진철(zerocooldog@pionnet.co.kr)
 */
const excludeGuardUrl = [
    '/user#/login',
    '/user#/join',
    '/403',
    '/404',
    '/500',
];   

const isExclude = (uri: string) => {

    if(excludeGuardUrl.includes(uri)){
        return true;
    }

    return false;
};

export default function (router) {

    //화면 전환 로딩중.. 이후에 추가..

    



    /**
     * 라우터 변경 전 처리.
     */
    router.beforeEach( async (to, from, next) => {
        console.log("to => ",to)
        console.log("from => ",from)
        console.log("next => ",next)
    });

};