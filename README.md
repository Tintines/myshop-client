# myshop-client
```
Only action can change my destiny.
```

## 2020-12-06
### 目标：安装vue3的脚手架并配置好相关配置，启动项目第一天的内容
```
1、已全局安装好vue,查看版本号终端  vue --version
当前脚手架安装版本 @vue/cli 4.5.9
2、创建当前vue3的项目，终端  vue create myshop-client ,前期学的vue2，所以选择手动配置相关脚手架内容。保存自定义配置起名为 my vue2/cli
3、启动项目查看脚手架是否配置成功
4、试着按教程修改，报错，挣扎半小时，原来是原先给定的router store在初始化就存在下，被我禁用的同时，未相应的在调用模块中禁用，导致的not defined报错
```
## 2020-12-07
### 适配模块安装依赖到生产依赖
`
yarn add postcss-px2rem  lib-flexible 
`
#### 配置说明
```
在项目入口文件 main.js 里 引入 lib-flexible， flexible会自动根据设备情况动态设置rem的值的大小
```

```
在vue.config.js中添加配置
      const px2rem = require('postcss-px2rem')
      // 配置postcs-px2rem
      const postcss = px2rem({
        remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
      })
      css: { // 添加postcss配置
          loaderOptions: {
            postcss: {
              plugins: [
                postcss
              ]
            }
          }
      },
```

### git托管项目
常用命令
```
 mkdir XX：创建一个空目录 XX指目录名
 pwd：显示当前目录的路径
 cat xx：查看xx文件内容
 git init：把当前的目录变成可以管理的git仓库，生成隐藏的.git文件夹
 git add xx：把xx文件添加到暂存区
 git commit -m “xx”：提交文件 -m后面的是注释，必须写！
 git status：查看仓库状态
 git log：查看历史记录
 git reset --hard HEAD^：往上回退一个版本
 git reflog：查看历史记录的版本号id
 git checkout -- xx：把xx文件在工作区的修改全部撤销
 git rm xx：删除xx文件
 git remote add origin https://github.com/xxxxx/a.git 关联一个远程库
 git push -u（第一次尽量加上-u，以后不用）origin master：把当前master分支推送到远程库
 git clone https://github.com/xxxxx   从远程库中克隆
 git checkout -b dev：创建dev分支 并切换到dev分支上
 git branch：查看当前所有的分支
 git checkout master：切换回master分支
 git merge dev：在当前分支合并dev分支
 git branch -d dev：删除dev分支
 git branch xxx：创建分支xxx
 git remote：查看远程库信息
 git remote -v查看远程库的详细信息
 git pull origin master 将远程库的更新拉取到本地并自动合并
 git push origin master：git会把master分支推送到远程库对应的分支上
```

## 2020-12-07
### 1.配置 Vue 3 Snippets 的vue组件基础模版
```
{
	"vue component file": {
		"prefix": "vue",
		"body": [
			"<template>",
				"<div>\n\n",
				"</div>",
			"</template>\n",
		
			"<script type=\"text/ecmascript-6\">",
				"export default {\n\n",
		
				"}",
			"</script>\n",
		
			"<style scoped lang=\"stylus\" rel=\"stylesheet/stylus\">\n\n",
			
			"</style>",
			"$2"
		],
		"description": "vue组件文件"
	},
}
```
  设置viewport
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```
### 解决点击响应0.3s延时问题
```
在head标签中添加
<script src="https://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js"></script>
    <script>
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
        }, false);
      }
    </script>
```
## 搭建基础目录结构及文件
```
src
	|-- components------------非路由组件文件夹
		|-- FooterGuide---------------底部组件文件夹
			|-- FooterGuide.vue--------底部组件vue
  |-- pages-----------------路由组件文件夹
		|-- Msite---------------首页组件文件夹
			|-- Msite.vue--------首页组件vue
		|-- Search----------------搜索组件文件夹
			|-- Search.vue---------搜索组件vue
		|-- Order--------------订单组件文件夹
			|-- Order.vue-------订单组件vue
		|-- Profile--------------个人组件文件夹
			|-- Profile.vue-------个人组件vue
  |-- router-----------------路由器文件夹
  |-- vuex-----------------vuex管理状态文件夹
	|-- App.vue---------------应用根组件vue
	|-- main.js---------------应用入口js
```

## 2.引入vue-router
### 下载vue-router
```
yarn add vue-router
```
### 创建router入口js文件
```
index.js
/**
 * 向外暴露路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入分开的路由数组文件
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
    //使用history模式：路由路径没有#
    mode: 'history',

    // 注册项目中的所有路由
    // 将路由数组分开写
    routes   
})

routes.js
略
```
### 在主入口js文件中引入路由器模块
```
import router from './router'

new Vue({

  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  store, // 所有组件都能看到: $store
}).$mount('#app')

```

### 在主文件vue中引入页面并注册相关组件
```
<template>
  <div>
    <!-- 添加路由显示标签 -->
    <router-view></router-view>
    <!-- 添加FooterGuide组件 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'

  // 引入并局部注册FooterGuide组件
  export default {
    components: {
      FooterGuide
    }
  }
</script>
```

### 在路由数组文件中设置默认跳转页面
```
{
        path: '/',
        redirect: '/msite'
      }
```
### 启动项目手动输入路由地址进行测试

## 2.1 编写底部导航组件FooterGuide
解决点击同一个底部选项报错
```
methods: {
       
        goto (path) {
            // 方案一：如果点击当前项，没有任务效果
            // 且双击会报错
            // if (path!==this.$route.path) {
            //     // 编程式路由跳转
            //     this.$router.replace(path)
            // }

            // 方案二：如果点击当前项，刷新界面
            if (path!==this.$route.path) {
                // 编程式路由跳转
                this.$router.replace(path)
            } else {
                window.location = path
            }
        }
    }
```

### 2.2使用swiper实现图片轮播
地址: http://www.swiper.com.cn/
下载练习准确版本: 
```
yarn add swiper@5.2.1
```
配置
```
<script type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'
    // import 'swiper/swiper-bundle.css' //高级swiper    

export default {
    mounted () {
        // swiper对象必须要在列表数据显示之后创建
        new Swiper ('.swiper-container', {
            loop: true, //循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
       
    }  
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper-container   
    --swiper-pagination-color: #02a774  //设置导航点颜色
</style>

```


