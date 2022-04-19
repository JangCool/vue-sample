import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import htmlTemplate from 'vite-plugin-html-template'
import pages from "vite-plugin-pages";
import mpa from "vite-plugin-mpa";
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..']
        },
        port: 8200,
        proxy:{
			'/api' : {
				target: 'http://localhost:8501/',
				ws: true,
				changeOrigin: true
			},
            '/cache' : {
				target: 'http://localhost:8501/',
				ws: true,
				changeOrigin: true
			},

		},
                

        /* proxy: {
            '/api': {
            target: 'http://192.168.2.16:8304',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
            }
        }, */
    },
    plugins: [
        vue(),
        htmlTemplate({
            pages: {

                cache: {
                    entry: 'src/pages/cache/main.ts',
                    title: 'Hamonica Cache',
                }

            }
        }),
        pages({
            nuxtStyle:true,
            pagesDir: [
                { dir: "src/pages/**/pages", baseRoute: "" },
                { dir: "src/pages/cache/pages", baseRoute: "cache" },
   
            ],
            exclude: ["**/components/*.vue", "**/types/*.ts", "**/*.ts"],
        }),
        mpa({
            open:'/cache#/',
            scanFile: 'main.ts',
        }),
        vueI18n({
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            compositionOnly: true,
        
            // you need to set i18n resource including paths !
            include: path.resolve(__dirname, './src/i18n/**')
        })
    ],
    build: {
        assetsDir: 'assets',
        manifest: false,
        outDir: 'dist',
        terserOptions: {
            compress: {
                keep_infinity: true,
                drop_debugger: true,
                drop_console: true,
            },
        },
        //빌드 속도 향상.. 빌드 파일 압축 비활성화
        brotliSize: false,
        rollupOptions: {
                //public에서 호출하는 static과 이름이 겹칠수 있기때문에
                //static 하위에 apps라는 폴더를 만들어 어플리케이션과 직접 연관된 파일들을 따로 저장한다.
            output: {
                assetFileNames: 'static/apps/[ext]/[name][extname]',
                chunkFileNames: 'static/apps/js/[name].js',
                entryFileNames: 'static/apps/js/[name].js'
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    
})
