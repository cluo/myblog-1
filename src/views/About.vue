<template>
  <div class="about">
    <div class="content">
      <p>本人Evan.G，</p>
      <p style="text-indent: 30px;">前端攻城师一枚，由于最近新攻城武器太多，还在努力适应学习中，博客是用nodejs + express + vue2.0 + vuex + vue-router + axios + mongodb + es6 等技术栈搭建的，研究ssr中。</p>
    </div>
    <div class="col"><span><i class="iconfont icon-xinlangweibo"></i>微博：</span><a href="http://weibo.com/1056766283" target="_blank">http://weibo.com/1056766283</a></div>
    <div class="col"><span><i class="iconfont icon-youxiang"></i>邮箱：</span><a href="mailto:seazeg@126.com" target="_blank">seazeg@126.com</a></div>
    <div class="col"><span><i class="iconfont icon-weixin"></i>微信：</span>seazeg</div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.jquery("html,body").scrollTop(0);
    }
  }
</script>