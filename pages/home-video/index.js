// pages/home-video/index.js
import bzRequest from '../../service/index'
import { getTopMv } from '../../service/api_video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMv: [],
        hasMore: true,
    },
    getTopMvInfo: async function (offset) {
        if(!this.data.hasMore) return
        const res = await getTopMv(offset)
        let newData = this.data.topMv
        if(offset == 0 ) {
            newData = res.data.data
        }else {
            newData = newData.concat(res.data.data)
        }
        this.setData({topMv: newData})
        this.setData({hasMore: res.data.hasMore})
        console.log(res)

    },
    videoItemClick: function (event) {
        console.log("video")
        const id =  event.currentTarget.dataset.item.id
        wx.navigateTo({
          url: '/pages/detail-video/index?id='+id,
        })
        console.log(id)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        // getTopMv(0).then(res => {
        //     this.setData({topMv: res.data.data})
        //     console.log(this.data.topMv)
        // }).catch(error => {
        //     console.log(error)
        // })
        // const res = await getTopMv(0)
        // this.setData({ topMv: res.data.data })
        // console.log(res.data)
        this.getTopMvInfo(0)
        wx.setNavigationBarTitle({
            title: '云音乐',
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
    onPullDownRefresh: async function () {
        wx.showNavigationBarLoading({})
        this.getTopMvInfo(0)
        wx.hideNavigationBarLoading({})
        wx.stopPullDownRefresh({})
        // console.log("张晨雨爱白文婷")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: async function () {
        console.log("reach the bottom")
        // const res = await getTopMv(this.data.topMv.length)
        // this.setData({ topMv: this.data.topMv.concat(res.data.data)})
        // console.log(this.data.topMv)
        this.getTopMvInfo(this.data.topMv.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})