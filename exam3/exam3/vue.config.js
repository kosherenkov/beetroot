module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/style.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/exam3/exam3/" : "/"
};
