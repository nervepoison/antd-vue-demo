<template>
  <a-layout :class="['layout', device]">
    <!-- menu -->
    <a-drawer
      v-if="isMoble()"
      placement="left"
      :wrapClassName="`drawer-sider ${navTheme}`"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
    >
      <side-menu
        mode="inline"
        :menus="menus"
        :theme="navTheme"
        :collapsed="false"
        :collapsible="true"
        @menuSelect="menuSelect"
      >
      </side-menu>
    </a-drawer>
  </a-layout>
</template>

<script>
export default {
  name: "BaseLayout",
  date() {
    return {};
  }
};
</script>
