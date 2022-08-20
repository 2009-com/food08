// pages/detail/index.js
import { data } from "../../data/data";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id;
    const res = data.goodsList.find(item=>{
      return item.goodsId == id;
    })
    this.setData({res});
  },
  
  
})