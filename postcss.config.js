module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度。
      viewportHeight: 667, // 视图的高度，对应的是我们设计稿的高度。（可以不配置）
      unitPrecision: 5, // 指定'px'转换为视窗单位值的小数位数 （很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议vw
      selectorBlackList: [], // 指定不需要转换的类
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换px
      exclude: [/TabBar/, /CartBottom/, /CartBottom/] // 指定不需要转换的文件，正则表达式形式的数组
    }
  }
}