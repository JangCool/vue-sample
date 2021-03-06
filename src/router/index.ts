/**
 * createRouter 함수를 page 마다 개별적으로 분리하지 않고 하나의 함수로 처리하기 위하여 hamonicaRouter함수를 정의힌다.
 * 
 * @param p {routes: route URL을 정의한 객체}
 * @author 장진철 (zerocooldog@pionnet.co.kr)
 * @since 2020.07.01
 */
//import util from '@/utils/util.js'
import { createRouter, createWebHashHistory, RouterView } from 'vue-router'

//@ts-ignore
import routes from "virtual:generated-pages";



//router 객체 및 기타 설정 값 정의.
var config = {
    routes : [

    ]
};

export const createHamonicaRouter = function(p){
    const router = createRouter({
        history: createWebHashHistory(), //HistoryMode 설정
        routes: [...new Set([...config.routes, ...routes])] ,//router 병합.
       /* scrollBehavior: function (to) {            
            if (to.hash) {
              return {
                selector: to.hash,
                behavior: 'smooth',
              }
            }
          }*/
    });


     //가드 설정
    // guard(router);

    return router;
}

