// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/static/images/title_main_bg.jpg',
      '/static/images/banner1.jpg',
      '/static/images/banner2.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    photosList: [
      '/static/images/title_main_bg.jpg',
      '/static/images/banner1.jpg',
      '/static/images/banner2.jpg',
    ]
    
  },
  
  openLocation: function (e) {
    wx.openLocation({
      longitude: 116.401557,
      latitude: 39.813646,
      name: 'abc',
      address: 'address'
    })
  },

  makePhoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: '13691288631',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  previewImage: function (e) {
    wx.previewImage({
      current: '',
      urls: [''],
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})