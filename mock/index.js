const Mock = require('mockjs')
const HOME_DATA = require('./data/home/home.mock')
Mock.mock('/api/mock', opts => {
  return {
    data: {
      banner: HOME_DATA.banner,
      modle: HOME_DATA.modle,
      daymust: HOME_DATA.daymust
    }
  }
})