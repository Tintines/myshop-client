const path = require('path') // 解决路径问题
const px2rem = require('postcss-px2rem') // postcss的一个插件

module.exports = { // 只能写vue封装的配置

  lintOnSave: false, // 关闭Eslint规则

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
          // 设计稿等分之后的值 375/10，等分的比例同页面的rem的比例是一致的
            remUnit: 37.5
          })
        ]
      }
    }
  },

  configureWebpack: { // 内部只能写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名（简写方式）
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  },

  devServer: {
    proxy: {
      // 处理以/api来头路径的请求
      '/api': {
        target: 'http://localhost:4000', // 转发的目标地址
        pathRewrite: {
          '^/api': '' // 转发请求时去除路径前面的/api
        },
        changeOrigin: true // 支持跨域，如果协议/主机也不同，必须加上·
      }
    }
  }

}
