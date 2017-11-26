//logs.js
const util = require('../../utils/util.js')
var localValue = 'd'
const app = getApp()
console.log(localValue)
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
