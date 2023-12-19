module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Укажите адрес вашего сервера backend
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Если ваши API эндпоинты не начинаются с /api, измените эту строку
        },
      },
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
};