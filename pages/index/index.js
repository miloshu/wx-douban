Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "正在加载中...",
    movies: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: () => {
        wx.request({
          url: 'https://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'json' // 默认值
          },
          success: res => {
            wx.hideLoading()
            console.log(res.data)
            this.setData({
              title: res.data.title,
              movies: res.data.subjects
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // loadmore () {
  //   wx.stopPullDownRefresh()
  // }
})