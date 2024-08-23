const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  ublicPath: "https://sannevb.github.io/rvmediation/",
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
  },
});
