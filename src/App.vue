<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
      <a-pagination :defaultCurrent="1" :total="50" showSizeChanger />
      <a-button v-on:click="click()" type="primary">button</a-button>
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
  methods: {
    click() {
      alert();
      console.log(this.locale);
    }
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
}

#nprogress .bar {
  //background: #118060 !important; //自定义颜色
}
</style>
