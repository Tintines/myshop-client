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
### 安装依赖到生产依赖
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


