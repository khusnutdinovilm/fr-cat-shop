// const { defineConfig } = require("@vue/cli-service");
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Резюме Frontend-разработчика (Vue.js)";
      args[0].favicon = `public/favicon.png`;
      return args;
    });
  },
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/sass/main.sass"',
      },
    },
  },
  // pages: {
  //   index: {
  //     entry: "src/main.js",
  //     title: "Cat Shop",
  //   },
  // },
};
