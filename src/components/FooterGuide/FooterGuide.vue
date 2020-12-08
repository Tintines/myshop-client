<template>
<div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
        <span>
            <i class="iconfont icon-waimai"></i>
        </span>
        <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
        <span>
            <i class="iconfont icon-search2"></i>
        </span>
        <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
        <span>
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
        <span>
            <i class="iconfont icon-geren"></i>
        </span>
        <span>个人</span>
    </span>

</div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {

    goto (path) {
      // 方案一：如果点击当前项，没有任务效果
      // 且双击会报错
      // if (path!==this.$route.path) {
      //     // 编程式路由跳转
      //     this.$router.replace(path)
      // }

      // 方案二：如果点击当前项，刷新界面
      if (path !== this.$route.path) {
        // 编程式路由跳转
        this.$router.replace(path)
      } else {
        window.location = path
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixins.styl'
    .footer-guide
        top-border-1px(#ccc)
        display flex
        // flex-direction column
        position fixed
        left 0
        bottom 0
        height 50px
        width 100%
        background #fff
        .guide-item
            display flex
            flex-direction column
            width 25%
            text-align center
            &.on
                color $green
            span
                margin-top 4px
                font-size 12px
                i
                    font-size 22px

</style>
