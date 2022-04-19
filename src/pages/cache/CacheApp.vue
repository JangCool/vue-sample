<script setup lang="ts">

import { getCurrentInstance, inject, onBeforeMount, onMounted, reactive } from "@vue/runtime-core";


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * ※ 시작 : props, emit 정의.
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// const props = defineProps<{
//                     sample1: string,
//                     sample2: RoleMenu[]
//                 }>();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * ※ 시작 : 초기 변수 선언
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * 시작 : 업무 로직 처리
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


//사용자 정보 호출 설정.
onBeforeMount( async () => {

})


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * ※ 시작 : 외부 공개 선언 
 *           <script setup> 문법에서 선언된 변수나 함수는 외부에서 접근 불가.
 *           다른 컴포넌트에서 접근 가능 하게 하려면 defineExpose 선언
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// defineExpose({
//     show,
//     hide
// })
</script>
<template>
cacheApp

</template>



<style>

</style>