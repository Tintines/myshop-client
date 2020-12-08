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

export default {

  // 引入并局部注册FooterGuide组件
  components: {
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    /*引入其他混合函数文件 */
    @import "./common/stylus/mixins.styl"

</style>
