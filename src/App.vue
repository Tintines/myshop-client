<template>
  <div>
    <h1>App 组件</h1>
    <p>测试适配</p>
    <div class="box">
        The box
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    /*引入其他混合函数文件 */
    @import "./common/stylus/mixins.styl"
    p
        width 200px
        height 100px
        background green
    .box
        width 150px
        height 64px
        background red

</style>
