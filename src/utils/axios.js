const vueAxios = {
  vm: {},
  install(Vue, instance) {
    if (this.installed) {
      return;
    }

    this.installed = true;
    if (!instance) {
      console.error("you hava to install axios");
      return;
    }

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        }
      },
      $http: {
        get: function get() {
          return instance;
        }
      }
    });
  }
};
export { vueAxios };
