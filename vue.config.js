const path = require('path')
/**
 * 
 * 更据目录/文件夹名得到其对应的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
//__dirname:内置代表当前文件的文件夹的绝对路径

module.exports = {//编写webpack配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      },
      '/baidu': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': '',
        }
      },
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],//自动添加的文件扩展名
      alias: {//模块路径别名
        'vue$': 'vue/dist/vue.esm.js',//$代表精确匹配
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),

      }
    }
  }
}