// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["白酒","葡萄酒","啤酒","洋酒","黄酒","保健酒","果酒","冰酒","酒具","其他"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  
  // 加入购物车
  addCart(){
    wx.reLaunch({
      url: "/pages/cart/cart"
    })
  },
})