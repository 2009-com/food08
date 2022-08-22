// pages/cart/cart.js
import { data } from "../../data/data";
// 从缓存中取购物车数据
let cartData = wx.getStorageSync("cart");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noselect: "/images/cart/circle@noselected.png",
    select: "/images/cart/circle@selected.png",
    all: false,
    isAll: false,
    num: 1,
    sum: 0,
    cartData,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id;
    const res = data.goodsList.find(item=>{
        return item.goodsId == id;
    })
    const cart = this.data.cartData.find(item=>{
      return item.id == this.data.cartData.goodsId
    })
    this.setData({ 
        res,
        cart,
        sum: cart.price * this.data.num,
    });
  },


  // 点击全选按钮
  onAllSelect(){
      if(!this.data.isAll){
        this.setData({
          isAll: true,
          all: true,
        })
      }else{
        this.setData({
          isAll: false,
          all: false,
        })
      }
  },

  onSelect(e){
      const index = e.mark.index
      console.log(index)
    if(!this.data.all){
      this.setData({
        all: true,
      })
    }else{
      this.setData({
        all: false,
      })
    }
},

  // 点击 + 按钮
  onAdd(e){
      console.log(e.mark.index)
      this.setData({
        num: this.data.num += 1,
        sum: this.data.num * this.data.cart.price
      })
  },

  // 点击 - 按钮
  onCut(e){
    const id = e.mark.id
    console.log(id)
    if(this.data.num<=1){
        this.setData({
            num: 1,
        })
    }else{
        this.setData({
            num: this.data.num -= 1,
            sum: this.data.num * this.data.cart.price
        })
    }
    }
})
