<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCN
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
#app {
  height: 100%;
}

// #nprogress .bar {
//background: #118060 !important; //自定义颜色
// }
</style>
