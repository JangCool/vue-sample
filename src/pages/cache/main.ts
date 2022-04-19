import { createHamonicaApp } from '@/pages/app'
import CacheApp from '@/pages/cache/CacheApp.vue'


//createApp을 createHamonicaApp 재정의 한다.
createHamonicaApp({app: CacheApp})
