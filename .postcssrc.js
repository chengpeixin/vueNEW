module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      // 不需要转换单位的类名
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      // 媒体查询中转换px
      mediaQuery: false
    },
    "postcss-viewport-units": {}
  }
}