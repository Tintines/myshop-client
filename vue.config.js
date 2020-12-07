const px2rem = require('postcss-px2rem')
// 配置postcss-px2rem
const postcss = px2rem({
  // 设计稿等分之后的值，等分的比例同页面的rem的比例是一致的
  remUnit: 37.5
})

module.exports = {

  lintOnSave: false, // 关闭Eslint规则

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }

  }

}
