//mines.js
const util = require('../../utils/util.js')
const common = require('../common.js')
var localValue = 'b'
const app = getApp()
// console.log(app.globalData.num)
// console.log(localValue)
Page({
  data: {
    mines: [],
    newArray: ["javaEE","HTML5","GO","PYTHON","PHP"],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    item2: {
      index: 1,
      msg: 'template',
      time: '2017-11-15'
    }
  },
  // 事件
  handleTap1 (e) {
    console.log(e)
  },
  handleTap2(e) {
    console.log(e)
  },
  handleTap3(e) {
    console.log(e)
  },
  onLoad: function () {
    this.setData({
      mines: (wx.getStorageSync('mines') || []).map(mine => {
        return util.formatTime(new Date(mine))
      })
    })
  },
  navigateTo () {
    wx.navigateTo({
      url: '../test/test?id=12&name=zs' //传参
    })
  },
  getGlobalData () {
    console.log(app.globalData.num++)
  }
})
