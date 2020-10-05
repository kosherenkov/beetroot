module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/style.scss";'
      }
    }
  }
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/beetroot/" : "/"
};
