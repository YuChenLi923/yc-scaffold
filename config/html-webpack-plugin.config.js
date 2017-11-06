const { chunks } = require('./entry');
let baseConfig = {
    filename:'./index.html',    //生成的html存放路径，相对于 path
    template:'./src/views/template.html',    //html模板路径
    inject:true,    //允许插件修改哪些内容，包括head与body
    hash:true,    //为静态资源生成hash值
    chunks
};

module.exports = {
    prod: Object.assign({}, baseConfig, {
        minify:{    //压缩HTML文件
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:true    //删除空白符与换行符
      }
  }),
  dev: baseConfig
};