const { defineConfig } = require("@vue/cli-service");
(module.exports = {
  configureWebpack: {
    devtool: "source-map",
    publicPath: "/rvmediation/",
  },
}),
  defineConfig({
    transpileDependencies: true,
  });
