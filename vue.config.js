module.exports = {
  // 是否生成map文件
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  // less样式配置
  css: {
    loaderOptions: {
      css: {},
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: ``,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
    disableHostCheck: true,
  },
};
