// pages/cart/cart.js
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 点击选中按钮
  onSelect(){
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
  add(){
      this.setData({
        num: this.data.num += 1
      })
  },

  // 点击 - 按钮
  del(){
    if(this.data.num<=1){
        this.setData({
            num: 1,
        })
    }else{
        this.setData({
            num: this.data.num -= 1
        })
    }
    
  },
})