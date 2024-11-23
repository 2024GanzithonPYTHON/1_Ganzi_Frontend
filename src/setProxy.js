const { createProxymiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxymiddleware("/api/v1", {
      target: "https://go-farming.shop",
      changeOrigin: true,
    })
  );
};
