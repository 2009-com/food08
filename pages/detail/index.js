// pages/detail/index.js
import { data } from "../../data/data";
let cartArr = [];
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

  toGet(e){
    const id = e.mark.id;
    wx.reLaunch({
      url: '/pages/cart/cart?id=' + id,
    })
  },

  toCart(e){
    console.log(this.data.res)
      // 将当前要加入购物车的商品进行打包
      const a = this.data.res;
      const product = {
        goodsImg: a.goodsImg,
        goodsTxt: a.goodsTxt,
          price: a.price,
          goodsId: a.goodsId,
      }
      cartArr.push(product);
  // 更新缓存： 将当前购物车存入缓存
  wx.setStorageSync("cart",cartArr)
  },
  onShow() {
    // 重新获取缓存
    cartArr = wx.getStorageSync("cart") || [];
    },
})