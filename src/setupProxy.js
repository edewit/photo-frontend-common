const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/photos',
    proxy({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/likes',
    proxy({
      target: 'http://localhost:8081',
      changeOrigin: true,
    })
  );
  app.use(
    '/query',
    proxy({
      target: 'http://localhost:8082',
      changeOrigin: true,
    })
  );
};