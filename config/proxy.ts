export default {
  dev: {
    '/api/': {
      target: 'http://localhost:3001/api',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'http://localhost:3001/api',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
