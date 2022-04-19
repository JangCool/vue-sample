import { reactive, readonly } from "vue";

const state = reactive({
    /**
     * 로그인 여부
     */
    login: localStorage.getItem("login") == "true" ? true : false,

});



export default { 

    rootState: readonly(state), 

};