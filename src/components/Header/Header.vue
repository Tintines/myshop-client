<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: String // 通过props接收数据
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .header
        position fixed
        z-index 100
        background-color #02a774
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .icon-sousuo
                font-size 25px
                color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            width 50%   //盒子占比
            color #fff
            text-align center  //盒子内容文字居中
            .header_title_text
                font-size 18px
                color #fff
                font-weight bold
                display block
        .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header_login_text
                color #fff

</style>
