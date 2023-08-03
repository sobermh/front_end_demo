// require node.js 后台引入方式
// 引入合并插件
const {merge} = require('webpack-merge')
// 公共配置
const base = require('./webpack.base.config')

// 合并公共配置
module.exports = merge(base,{
    mode:"production" //表明生产环境
})